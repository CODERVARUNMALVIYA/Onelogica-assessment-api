const mongoose = require("mongoose");

const benefitUsageSchema = new mongoose.Schema({
    employeeBenefitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeBenefit",
        required: true,
    },
    usageDate: {
        type: Date,
        default: Date.now,
    },
    usageDetails: String, // Details about how the benefit was used
    cost: {
        type: Number,
    },
}, { timestamps: true });

const BenefitUsage = mongoose.model("BenefitUsage", benefitUsageSchema);
module.exports = BenefitUsage;
