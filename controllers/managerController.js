// controllers/managerController.js
const Manager = require("../models/managerModel"); // Ensure this model file exists
const { catchAsyncErrors } = require("../middlewares/catchAsyncError");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/ErrorHandler");

exports.registerManager = catchAsyncErrors(async (req, res, next) => {
    const manager = await Manager.create(req.body);
    sendToken(manager, 201, res);
});

exports.loginManager = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const manager = await Manager.findOne({ email }).select("+password");
    if (!manager || !(await manager.comparePassword(password))) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }
    sendToken(manager, 200, res);
});

exports.getManagerProfile = catchAsyncErrors(async (req, res, next) => {
    const manager = await Manager.findById(req.user.id);
    res.status(200).json(manager);
});

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const updatedManager = await Manager.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.status(200).json(updatedManager);
});
