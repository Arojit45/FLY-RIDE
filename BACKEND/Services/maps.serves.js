const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const apikey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            console.error('Google Maps API error:', response.data);
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Axios/Server error:', error);
        throw error;
    }
};
