// routes/managerRouter.js
const express = require("express");
const router = express.Router();
const {
    registerManager,
    loginManager,
    getManagerProfile,
    updateProfile,
} = require("../controllers/managerController");

// Manager routes
router.post("/register", registerManager); // Route to register a manager
router.post("/login", loginManager); // Route for manager login
router.get("/profile", getManagerProfile); // Route to get manager profile
router.put("/profile", updateProfile); // Route to update manager profile

module.exports = router;
