const mongoose = require("mongoose");

const benefitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        enum: ["health insurance", "retirement plan", "paid time off", "other"],
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    eligibility: {
        type: String,
        default: "All employees",
    },
}, { timestamps: true });

const Benefit = mongoose.model("Benefit", benefitSchema);
module.exports = Benefit;
