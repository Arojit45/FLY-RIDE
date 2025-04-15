const axios = require("axios");
const captainModel = require("../Models/captain.model");

module.exports.getAddressCoordinates = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "YourAppName/1.0 (your@email.com)",
      },
    });
    if (response.data.length === 0) {
      throw new Error("No results found for the given address");
    }

    const location = response.data[0];
    return {
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon),
    };
  } catch (error) {
    console.error("Axios/Server error:", error.message);
    throw error;
  }
}

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("origin and destination are required");
  }

  const [originLng, originLat] = origin.split(",");
  const [destLng, destLat] = destination.split(",");

  const url = `http://router.project-osrm.org/route/v1/driving/${originLng},${originLat};${destLng},${destLat}?overview=false`;
  try {
    const response = await axios.get(url);

    if (response.data.code === "Ok") {
      const route = response.data.routes[0];

      return {
        distance_km: (route.distance / 1000).toFixed(2),
        duration_min: (route.duration / 60).toFixed(2),
      };
    } else {
      console.error("OSRM response error:", response.data);
      throw new Error("Unable to fetch Distance and Time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// In maps.serves.js
module.exports.getAuthCompleteSuggestions = async (input) => {
    if (!input || input.length < 3) {
        return [];  // Return empty array instead of throwing error
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&limit=5`;
    
    try {
        const response = await axios.get(url, {
            headers: {
                "User-Agent": "YourAppName/1.0 (your@email.com)"
            }
        });
        
        if (!response.data || response.data.length === 0) {
            return [];  // Return empty array instead of throwing error
        }
        
        return response.data.map(result => ({
            label: result.display_name,
            lat: result.lat,
            lon: result.lon,
            place_id: result.place_id
        }));
    } catch (error) {
        console.error('Error getting suggestions:', error);
        return [];  // Return empty array instead of throwing error
    }
};

module.exports.getRouteDetails = async (
  originLat,
  originLng,
  destLat,
  destLng
) => {
  const url = `http://router.project-osrm.org/route/v1/driving/${originLng},${originLat};${destLng},${destLat}?overview=false`;

  try {
    const response = await axios.get(url);

    if (response.data.code === "Ok") {
      const route = response.data.routes[0];

      return {
        distance: (route.distance / 1000).toFixed(2), // Distance in kilometers
        duration: (route.duration / 60).toFixed(2), // Duration in minutes
      };
    } else {
      throw new Error("Unable to fetch route details");
    }
  } catch (error) {
    console.error("Error fetching route details:", error.message);
    throw error;
  }
};

module.exports.getCaptainsInTheRadius = async(lat,lon,radius)=>{
   if (lat == null || lon == null || radius == null) {
     throw new Error(
       `Latitude, longitude, or radius is missing. Provided values - lat: ${lat}, lon: ${lon}, radius: ${radius}`
     );
   }
  //radius in km
   return await captainModel.find({
     location: {
       $geoWithin: {
         $centerSphere: [[lat,lon], radius / 6371],
       },
     },
   });
}
