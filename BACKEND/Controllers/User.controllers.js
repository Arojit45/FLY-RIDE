const usermodel = require('../Models/User.model');
const userservice = require('../Services/user.services');

const {validationResult} = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { firstname, lastname, email, passwords } = req.body;
  const hashpassword = await userservice.hashPassword(passwords);
  const user = await usermodel.create({
    firstname,
    lastname,
    email,
    passwords: hashpassword,
  });
  const token = user.generateAuthToken();

  res.status(201).json({ user, token });
};
