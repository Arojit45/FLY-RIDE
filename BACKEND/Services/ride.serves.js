const riderModal = require("../Models/ride.model");
const mapsService = require("../Services/maps.serves");
const crypto = require('crypto')

async function getFare(pickup, destination, vehicleType) {
  if (!pickup || !destination || !vehicleType) {
    throw new Error("Pickup, Destination and Vehicle Type are required");
  }

  // Get distance and duration
  const pickupStr = `${pickup.coordinates.lon},${pickup.coordinates.lat}`;
  const destinationStr = `${destination.coordinates.lon},${destination.coordinates.lat}`;
  
  const distanceTime = await mapsService.getDistanceTime(pickupStr, destinationStr);


  if (!distanceTime || !distanceTime.distance_km || !distanceTime.duration_min) {
    throw new Error("Could not fetch distance and duration");
  }

  // Fare calculation based on vehicle type
  const baseFare = {
    auto: 30,
    car: 50,
    bike: 20,
  };
  const perKmRate = {
    auto: 10,
    car: 15,
    bike: 8,
  };
  const perMinuteRate = {
    auto: 2,
    car: 3,
    bike: 1.5,
  };

  const distanceInKm = parseFloat(distanceTime.distance_km);

  const durationInMinutes = parseFloat(distanceTime.duration_min);


  const fare = baseFare[vehicleType] + 
               ((distanceInKm/1000) * perKmRate[vehicleType]) + 
               ((durationInMinutes/60) * perMinuteRate[vehicleType]);

  return {
    fare: Math.round(fare),
    distance: Math.round(distanceInKm * 1000), // Convert to meters
    duration: Math.round(durationInMinutes * 60), // Convert to seconds
  };
}

function getOtp(num){
  function generateOtp(num){
    const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
    return otp;
  }
  return generateOtp(num)
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  // Get fare, distance and duration
  const { fare, distance, duration } = await getFare(pickup, destination, vehicleType);

  // Create the ride
  const ride = await riderModal.create({
    user,
    pickup,
    destination,
    otp:getOtp(6),
    fare,
    distance,
    duration,
    vehicleType,
  });

  return ride;
};
