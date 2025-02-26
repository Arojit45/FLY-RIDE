const usermodel = require("../Models/User.model.js");
const userservice = require("../Services/User.serves.js");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../Models/blacklistToken.model.js");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  console.log(req.body);

  const { fullname, email, password } = req.body;

  const isUserAlreadyExist = await usermodel.findOne({email});
  if(isUserAlreadyExist){
    return res.status(400).json({ message: "User already exist" });
  }

  const hashpassword = await usermodel.hashPassword(password);

  const user = await userservice.create({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashpassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;
  const user = await usermodel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};
module.exports.profile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};
module.exports.logout = async (req,res,next)=>{
  res.clearCookie("token");
  token = req.cookies.token||req.headers.authorization.split(" ")[1];
  await blacklistTokenModel.create({token});
  res.status(200).json({message:"Logout successfully"});
}
