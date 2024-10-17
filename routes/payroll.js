const express = require("express");
const router = express.Router();
const Payroll = require("../models/Payroll");
const { calculateSalary, calculateTax, calculateNetPay } = require("../utils/payroll");

// Process payroll
router.post("/process", async (req, res) => {
    const { employeeId, salaryType, hourlyRate, hoursWorked, fixedSalary, commissionRate, taxRate } = req.body;

    try {
        // Calculate total salary
        const totalSalary = calculateSalary(salaryType, hourlyRate, hoursWorked, fixedSalary, commissionRate);
        const taxDeduction = calculateTax(totalSalary, taxRate);
        const netPay = calculateNetPay(totalSalary, taxDeduction);

        // Create Payroll record
        const payroll = new Payroll({
            employeeId,
            salaryType,
            hourlyRate,
            hoursWorked,
            fixedSalary,
            commissionRate,
            totalSalary,
            taxDeduction,
            netPay,
        });

        await payroll.save();
        res.status(201).json(payroll);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Generate payslip
router.get("/:employeeId/payslip", async (req, res) => {
    const { employeeId } = req.params;

    try {
        const payroll = await Payroll.findOne({ employeeId }).sort({ createdAt: -1 }); // Get the latest payroll record
        if (!payroll) {
            return res.status(404).json({ message: "No payroll record found for this employee." });
        }

        // Generate payslip (You can format it as needed)
        const payslip = {
            employeeId: payroll.employeeId,
            totalSalary: payroll.totalSalary,
            taxDeduction: payroll.taxDeduction,
            netPay: payroll.netPay,
            date: payroll.createdAt,
        };

        res.status(200).json(payslip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = router;
