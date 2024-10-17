const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    targetDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed", "On Hold"],
        default: "Not Started",
    },
}, { timestamps: true });

const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
