const userModel = require("../Models/User.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../Models/blacklistToken.model");
const captainModel = require("../Models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  const isblacklisted = await blacklistTokenModel.findOne({ token: token });
  if(isblacklisted){
    res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports.authCaptain = async (req, res, next)=>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if(!token){
    return res.status(401).json({message:'Access denied'});
  }
   const isblacklisted = await blacklistTokenModel.findOne({ token: token });

   if (isblacklisted) {
     res.status(401).json({ message: "Unauthorized" });
   }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    console.log(captain);
    return next();
  }catch(err){
    return res.status(401).json({message:'Unauthorized'});
  }
}