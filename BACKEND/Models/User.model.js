const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      require: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      require: true,
      minlength: 3,
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 5,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  socketID: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};
userSchema.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
