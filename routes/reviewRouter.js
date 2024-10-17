const express = require("express");
const { createReview, getReviews, updateReview, deleteReview } = require("../controllers/performanceReviewController");
const router = express.Router();

router.route("/").post(createReview);
router.route("/:employeeId").get(getReviews);
router.route("/:id").put(updateReview).delete(deleteReview);

module.exports = router;
