const express = require("express");
const router = express.Router();
const controller = require("../controllers/reportController");
const { auth, isAdmin } = require("../middlewares/auth");

//user 
router.post("/", auth, controller.createReport);
router.get("/my", auth, controller.getMyReports);
router.get("/my/:id", auth, controller.getMyReportById);

//admin
router.get("/", auth, isAdmin, controller.getAllReports);
router.get("/report/:id", auth, isAdmin, controller.getReportById);
router.put("/status/:id", auth, isAdmin, controller.updateStatus);
router.delete("/:id", auth, isAdmin, controller.deleteReport);

//All
router.get("/profile", auth, controller.profile);

// GET enum category
router.get("/categories", controller.categoryReport);

module.exports = router;
