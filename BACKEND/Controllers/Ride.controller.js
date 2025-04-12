const rideService = require("../Services/ride.serves");
const mapsService = require("../Services/maps.serves");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { pickup, destination, vehicleType } = req.body;

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

    return res.status(201).json(ride);
  } catch (error) {
    console.error("Error creating ride:", error);
    return res.status(400).json({ message: error.message });
  }
};
