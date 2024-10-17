const mongoose = require("mongoose");

const employeeBenefitSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    benefitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Benefit",
        required: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    changes: [{
        date: {
            type: Date,
            default: Date.now,
        },
        changeType: String, // e.g., "enrolled", "dropped", "updated"
        notes: String,
    }],
}, { timestamps: true });

const EmployeeBenefit = mongoose.model("EmployeeBenefit", employeeBenefitSchema);
module.exports = EmployeeBenefit;
