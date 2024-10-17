const express = require("express");
const router = express.Router();
const Overtime = require("../models/Overtime");

// Post route to record overtime
router.post("/overtime", async (req, res) => {
    const { employeeId, date, overtimeHours } = req.body;
    try {
        const overtime = new Overtime({ employeeId, date, overtimeHours });
        await overtime.save();
        res.status(201).json(overtime);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
