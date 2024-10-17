const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    salaryType: {
        type: String,
        enum: ["hourly", "fixed", "commission"],
        required: true,
    },
    hourlyRate: {
        type: Number,
        default: 0,
    },
    fixedSalary: {
        type: Number,
        default: 0,
    },
    commissionRate: {
        type: Number,
        default: 0,
    },
    hoursWorked: {
        type: Number,
        default: 0,
    },
    totalSalary: {
        type: Number,
        default: 0,
    },
    taxDeduction: {
        type: Number,
        default: 0,
    },
    netPay: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const Payroll = mongoose.model("Payroll", payrollSchema);
module.exports = Payroll;
