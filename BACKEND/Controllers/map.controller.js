const { response } = require('express');
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
module.exports.getDistanceTime = async (req,res,next)=>{
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
          return res.status(400).json({ errors: error.array() });
        }
        const {origin,destination} = req.query
        const distanceTime = await mapsService.getDistanceTime(origin,destination)
        res.status(200).json(distanceTime)
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports.getAuthCompleteSuggestions=async(req,res,next)=>{
    try {
        const error =  validationResult(req)
        if(!error.isEmpty){
            return res.status(400).json({error:error.array()})
        }
        const {input}=req.query;
        const suggestions = await mapsService.getAuthCompleteSuggestions(input)
        res.status(200).json(suggestions)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal server error'})
        
    }
}