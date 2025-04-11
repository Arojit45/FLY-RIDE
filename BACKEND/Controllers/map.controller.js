const mapsService =require('../Services/maps.serves')
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()})
    }
    const{address} = req.query;
    try {
        const Coordinates = await mapsService.getAddressCoordinates(address);
        res.status(200).json(Coordinates)
    } catch (error) {
        res.status(404).json({message:'Coordinate not found'})
    }

}