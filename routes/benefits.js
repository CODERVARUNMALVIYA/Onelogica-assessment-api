const express = require("express");
const router = express.Router();
const Benefit = require("../models/Benefit");
const EmployeeBenefit = require("../models/EmployeeBenefit");
const BenefitUsage = require("../models/BenefitUsage");


router.get("/", async (req, res) => {
    try {
        const benefits = await Benefit.find(); // Fetch all benefits from the database
        res.status(200).json(benefits);
    } catch (error) {
        res.status(500).json({ error: "Error fetching benefits" });
    }
});

// Create a new benefit
router.post("/", async (req, res) => {
    const { name, description, type, cost, eligibility } = req.body;

    try {
        const benefit = new Benefit({ name, description, type, cost, eligibility });
        await benefit.save();
        res.status(201).json(benefit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Enroll an employee in a benefit
router.post("/enroll", async (req, res) => {
    const { employeeId, benefitId } = req.body;

    try {
        const employeeBenefit = new EmployeeBenefit({ employeeId, benefitId });
        await employeeBenefit.save();
        res.status(201).json(employeeBenefit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Record benefit usage
router.post("/usage", async (req, res) => {
    const { employeeBenefitId, usageDetails, cost } = req.body;

    try {
        const benefitUsage = new BenefitUsage({ employeeBenefitId, usageDetails, cost });
        await benefitUsage.save();
        res.status(201).json(benefitUsage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
