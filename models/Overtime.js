const mongoose = require("mongoose");

const overtimeSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    overtimeHours: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Overtime = mongoose.model("Overtime", overtimeSchema);
module.exports = Overtime;
