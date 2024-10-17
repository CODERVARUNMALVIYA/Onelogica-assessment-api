const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Haversine formula or similar to calculate the distance in meters
};

const checkIfWithinGeofence = (employeeLat, employeeLng, companyLat, companyLng, radius) => {
    const distance = calculateDistance(employeeLat, employeeLng, companyLat, companyLng);
    return distance <= radius;
};

module.exports = { checkIfWithinGeofence };
