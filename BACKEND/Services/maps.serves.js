const axios = require("axios");

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
      console.error("No results found for the given address");
      throw new Error("No results found for the given address");
    }

    const location = response.data[0]; 
    return {
      lat: location.lat,
      lng: location.lon,
    };
  } catch (error) {
    console.error("Axios/Server error:", error.message);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("origin and destination are required");
  }
  const [originLat, originLng] = origin.split(",");
  const [destLat, destLng] = destination.split(",");

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
      throw new Error("Unable to fetch Distance and Time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getAuthCompleteSuggestions= async (input) => {
  if(!input){
    throw new Error('query is required')
  }
 const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&limit=5`;

 try {
   const response = await axios.get(url, {
     headers: {
       "User-Agent": "YourAppName/1.0 (your@email.com)",
     },
   });
   if (response.data && response.data.length > 0) {
     return response.data.map((result) => ({
       label: result.display_name,
       lat: result.lat,
       lon: result.lon,
       place_id: result.place_id,
     }));
   } else {
     throw new Error("No suggestions found");
   }
 } catch (err) {
   console.error(err);
   throw err;
 }
}

