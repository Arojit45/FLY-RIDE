const rideService = require("../Services/ride.serves");
const mapsService = require("../Services/maps.serves");
const rideModal = require('../Models/ride.model')
const { validationResult } = require("express-validator");
const {sendMessageToSocketId} = require('../Socket');
const { events } = require("../Models/User.model");

module.exports.createRide = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    // Get coordinates for pickup and destination
    const pickupCoords = await mapsService.getAddressCoordinates(pickup);
    const destinationCoords = await mapsService.getAddressCoordinates(
      destination
    );
    // Create ride with coordinates
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup: {
        name: pickup,
        coordinates: pickupCoords,
      },
      destination: {
        name: destination,
        coordinates: destinationCoords,
      },
      vehicleType,
    });
      res.status(201).json( ride );
      setImmediate(async () => {
        try {
          const captainsInRadius = await mapsService.getCaptainsInTheRadius(
            pickupCoords.lat,
            pickupCoords.lon,
            2
          );
          ride.otp =''
          const ridewithUser = await rideModal.findOne({_id:ride._id}).populate('user')
          //send message to all captain
          
          captainsInRadius.map(captain =>{
            sendMessageToSocketId(captain.socketID, {
              events: "new-ride",
              data: ridewithUser,
            });
          })

          // Optionally, you can notify the user or update the database with the captains
        } catch (error) {
          console.error("Error fetching captains in radius:", error.message);
        }
      });
  } catch (error) {
    console.error("Error creating ride:", error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports.getFareForAllVehicles = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    
    const { pickup, destination } = req.query;
    
    try {
        const result = await rideService.getFareForAllVehicles(pickup, destination);
        return res.status(200).json(result.fares);
    } catch (error) {
        console.error('Error calculating fare:', error);
        return res.status(500).json({ 
            message: 'Error calculating fare',
            error: error.message 
        });
    }
};

module.exports.confirmRide = async (req,res)=>{
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const {rideId}=req.body
  try {
    const ride = await rideService.confirmRide(rideId,req.captain._id)
    sendMessageToSocketId(ride.user.socketId,{
      events:'ride-confirm',
      date:ride
    })
    return res.status(200).json(ride)
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}
