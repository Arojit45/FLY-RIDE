const userModel = require('../models/user-model');

module.exports.create = async ({
    firstname,lastname,email,passwords
}) => {
    if(!firstname || !email || !passwords){
        throw new  Error('All fields are required');
    }
    const user = userModel.create({
        fullname:{
            firstname,lastname
        },
        email,
        passwords
    })
    return user;
};