const captainModel = require('../Models/captain.model');
const captainService = require("../Services/captain.serves");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../Models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password, Vehicle } = req.body;
  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Capatin already exist" });
  }
  const hashPassword = await captainModel.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: Vehicle.color,
    plate: Vehicle.plate,
    capacity: Vehicle.capacity,
    vehicleType: Vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};
module.exports.loginCaptain = async (req,res,next) => {
  
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array()});
  }
  const {email,password} =req.body;
  const captain = await  captainModel.findOne({ email }).select('+ password +');

  if(!captain){
    return res.status(401).json({message:"Invalid email or password"});
  }
  const isMatch = await captain.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
  }
  const token = captain.generateAuthToken();
  res.cookie('token',token);
  res.status(200).json({token,captain});
}
module.exports.profileCaptain = async (req,res,next)=>{
  res.status(200).json({captain:req.captain});
}
module.exports.logoutCaptain = async (req,res,next)=>{
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];
  await blacklistTokenModel.create({token});
  res.clearCookie('token');
  res.status(200).json({message:'Logout successfully'});
}
