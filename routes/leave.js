const express = require("express");
const router = express.Router();
const Leave = require("../models/Leave");

// Apply for leave
router.post("/apply-leave", async (req, res) => {
    const { employeeId, leaveType, startDate, endDate, reason } = req.body;
    try {
        const leave = new Leave({ employeeId, leaveType, startDate, endDate, reason });
        await leave.save();
        res.status(201).json(leave);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Approve/Reject leave
router.patch("/leave/:id/status", async (req, res) => {
    const { status } = req.body;
    try {
        const leave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json(leave);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
