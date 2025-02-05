const mongoose = require('mongoose');

function connectDB() {
    // Database connection 🚀
    mongoose.connect(process.env.DB_CONNECT)
         .then(() => {console.log("DB connected")}).catch(err => console.log(err));
}
module.exports = connectDB;