const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    leaveType: {
        type: String,
        enum: ["vacation", "sick", "personal"],
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    reason: {
        type: String,
    }
}, { timestamps: true });

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
