const usermodel = require("../Models/User.model.js");
const userservice = require("../Services/User.serves.js");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  console.log(req.body);

  const { fullname, email, password } = req.body;

  const hashpassword = await usermodel.hashPassword(password);

  const user = await userservice.create({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashpassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token,user });
};
module.exports.loginUser=async(req,res,next)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({error:errors.array()});
  }

  const { email, password}= req.body;
  const user = await usermodel.findOne({email}).select('+password');
  if(!user){
    return res.status(401).json({message:'Invalid email or password'});
  }
  const isMatch = await user.matchPassword(password);
  if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
  }
  const token = user.generateAuthToken();

  res.status(200).json({token,user});
};