const mongoose = require("mongoose");
const { create } = require("./User.model");

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:86400 // 1 day
    }
})