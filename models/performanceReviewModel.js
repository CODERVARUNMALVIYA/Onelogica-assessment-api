const mongoose = require("mongoose");

const performanceReviewSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manager",
        required: true,
    },
    reviewDate: {
        type: Date,
        default: Date.now,
    },
    score: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
    },
}, { timestamps: true });

const PerformanceReview = mongoose.model("PerformanceReview", performanceReviewSchema);
module.exports = PerformanceReview;
