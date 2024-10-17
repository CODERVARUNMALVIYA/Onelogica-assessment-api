const PerformanceReview = require("../models/performanceReviewModel");
const { catchAsyncErrors } = require("../middlewares/catchAsyncError");

exports.createReview = catchAsyncErrors(async (req, res, next) => {
    const review = await PerformanceReview.create(req.body);
    res.status(201).json(review);
});

exports.getReviews = catchAsyncErrors(async (req, res, next) => {
    const reviews = await PerformanceReview.find({ employeeId: req.params.employeeId });
    res.status(200).json(reviews);
});

exports.updateReview = catchAsyncErrors(async (req, res, next) => {
    const review = await PerformanceReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(review);
});

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    await PerformanceReview.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Review deleted successfully" });
});
