const mongoose = require("mongoose");

const developmentPlanSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    goals: [{
        type: String,
    }],
    trainingPrograms: [{
        type: String,
    }],
    timeline: {
        type: String,
    },
}, { timestamps: true });

const DevelopmentPlan = mongoose.model("DevelopmentPlan", developmentPlanSchema);
module.exports = DevelopmentPlan;
