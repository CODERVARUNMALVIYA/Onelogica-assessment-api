const DevelopmentPlan = require("../models/developmentPlanModel");
const { catchAsyncErrors } = require("../middlewares/catchAsyncError");

exports.createDevelopmentPlan = catchAsyncErrors(async (req, res, next) => {
    const plan = await DevelopmentPlan.create(req.body);
    res.status(201).json(plan);
});

exports.getDevelopmentPlans = catchAsyncErrors(async (req, res, next) => {
    const plans = await DevelopmentPlan.find({ employeeId: req.params.employeeId });
    res.status(200).json(plans);
});

exports.updateDevelopmentPlan = catchAsyncErrors(async (req, res, next) => {
    const plan = await DevelopmentPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(plan);
});

exports.deleteDevelopmentPlan = catchAsyncErrors(async (req, res, next) => {
    await DevelopmentPlan.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Development Plan deleted successfully" });
});
