const router = require("express").Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const notificationsRoutes = require("./notificationRoutes");
const lmsRoutes = require("./lmsRoutes");
const householdRoutes = require("./householdRoutes");
const ticketRoutes = require("./ticketsRoutes");
const surveyRoutes = require("./surveyRoutes");
const audienceRoutes = require("./audienceRoutes");
const settingsRoutes = require("./settingsRoutes");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/lms", lmsRoutes);
router.use("/households", householdRoutes);
router.use("/tickets", ticketRoutes);
router.use("/surveys", surveyRoutes);
router.use("/audience", audienceRoutes);
router.use("/settings", settingsRoutes);

module.exports = router;
