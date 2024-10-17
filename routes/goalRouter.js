const express = require("express");
const router = express.Router();
const { createGoal, getGoals, updateGoal, deleteGoal } = require("../controllers/goalController");

// Goal routes
router.post("/", createGoal); // Create a new goal
router.get("/:employeeId", getGoals); // Get goals for an employee
router.put("/:id", updateGoal); // Update a specific goal
router.delete("/:id", deleteGoal); // Delete a specific goal

module.exports = router;
