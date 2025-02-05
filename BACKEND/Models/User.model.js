const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
fullName: {
    FirstName: {
      type: String,
      require: true,
      minlength: 3,
    },
    LastName: {
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
socketID:{
    type:String,
}
});

userSchema.methods.genertateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
    return token;
}
userSchema.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);

}
userSchema.statics.findByCredentials = async (password) => {
    return await bcrypt.hash(password, 10);
};
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;