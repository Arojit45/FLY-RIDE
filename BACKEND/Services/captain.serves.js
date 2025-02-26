const captainModel = require('../Models/captain.model');

module.exports.createCaptain = async({
    firstName,lastName,email,password,color,plate,capacity,vehicalType
})=>{
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicalType){
        throw new Error("All fields are required");
    }
    const captain = captainModel.create({
        fullname:{
            firstName,lastName
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicalType
        }
    })
    return captain;
}








