const Goal = require("../models/goalModel");
const mongoose = require("mongoose");

// Create a new goal for an employee
exports.createGoal = async (req, res) => {
    console.log("Request Body:", req.body); // Log incoming data for debugging

    const { employeeId, title, description, targetDate, status } = req.body;

    // Validate if employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(400).json({ success: false, message: "Invalid employee ID format" });
    }

    try {
        const goal = await Goal.create({
            employeeId,
            title,
            description,
            targetDate,
            status,
        });

        res.status(201).json({ success: true, goal });
    } catch (error) {
        console.error("Error creating goal:", error); // Log the exact error
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Get all goals for a specific employee
exports.getGoals = async (req, res) => {
    const { employeeId } = req.params;

    // Validate if employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(400).json({ success: false, message: "Invalid employee ID format" });
    }

    try {
        const goals = await Goal.find({ employeeId });

        if (!goals || goals.length === 0) {
            return res.status(404).json({ success: false, message: "No goals found for this employee" });
        }

        res.status(200).json({ success: true, goals });
    } catch (error) {
        console.error("Error fetching goals:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Update a specific goal
exports.updateGoal = async (req, res) => {
    const { id } = req.params;

    // Validate if the goal ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid goal ID format" });
    }

    try {
        const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedGoal) {
            return res.status(404).json({ success: false, message: "Goal not found" });
        }

        res.status(200).json({ success: true, goal: updatedGoal });
    } catch (error) {
        console.error("Error updating goal:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Delete a specific goal
exports.deleteGoal = async (req, res) => {
    const { id } = req.params;

    // Validate if the goal ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid goal ID format" });
    }

    try {
        const deletedGoal = await Goal.findByIdAndDelete(id);

        if (!deletedGoal) {
            return res.status(404).json({ success: false, message: "Goal not found" });
        }

        res.status(200).json({ success: true, message: "Goal deleted successfully" });
    } catch (error) {
        console.error("Error deleting goal:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
