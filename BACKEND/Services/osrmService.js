// osrmService.js
const axios = require("axios");

const getRouteDetails = async (origin, destination) => {
  const baseUrl = "http://router.project-osrm.org/route/v1/driving";
  const coordinates = `${origin.lng},${origin.lat};${destination.lng},${destination.lat}`;
  const url = `${baseUrl}/${coordinates}?overview=false`;

  try {
    const response = await axios.get(url);
    if (response.data.routes && response.data.routes.length > 0) {
      const route = response.data.routes[0];
      return {
        distance: route.distance,
        duration: route.duration,
      };
    } else {
      throw new Error("No route found");
    }
  } catch (error) {
    console.error("OSRM error:", error.message);
    throw error;
  }
};

// Export the function properly
module.exports = {
  getRouteDetails,
};
