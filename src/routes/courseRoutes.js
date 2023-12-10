const express = require("express");
const controller = require("../controllers/courseController");
const router = express.Router();

router.get("/", controller.getAllCourses);
router.post("/", controller.createCourse);
router.get("/:courseId/students", controller.getCourseStudents);
router.get("/:courseId", controller.getCourseById);
router.put("/:courseId", controller.updateCourse);
router.delete("/:courseId", controller.deleteCourse);

module.exports = router;
