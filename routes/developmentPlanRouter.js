const express = require("express");
const { createDevelopmentPlan, getDevelopmentPlans, updateDevelopmentPlan, deleteDevelopmentPlan } = require("../controllers/developmentPlanController");
const router = express.Router();

router.route("/").post(createDevelopmentPlan);
router.route("/:employeeId").get(getDevelopmentPlans);
router.route("/:id").put(updateDevelopmentPlan).delete(deleteDevelopmentPlan);

module.exports = router;
