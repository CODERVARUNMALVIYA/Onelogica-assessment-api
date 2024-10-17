const express = require("express");
const router = express.Router();
const {
  registerEmployee,
  loginEmployee,
  getEmployeeProfile,
  updateProfile,
} = require("../controllers/employerController");

// Employee routes
router.post("/register", registerEmployee); // Correct route definition
router.post("/login", loginEmployee);
router.get("/profile", getEmployeeProfile);
router.put("/profile", updateProfile);

module.exports = router;
