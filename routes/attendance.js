const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const { checkIfWithinGeofence } = require("../utils/geofence");

// Post route for clock-in
router.post("/clock-in", async (req, res) => {
    const { employeeId, lat, lng } = req.body;
    const companyLat = 37.7749; // Example: Company's latitude
    const companyLng = -122.4194; // Example: Company's longitude
    const radius = 500; // 500 meters geofence

    const withinGeofence = checkIfWithinGeofence(lat, lng, companyLat, companyLng, radius);

    try {
        const attendance = new Attendance({
            employeeId,
            location: { lat, lng },
            withinGeofence,
            clockInTime: Date.now(),
        });
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
