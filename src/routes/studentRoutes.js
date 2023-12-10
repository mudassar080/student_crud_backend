const express = require("express");
const controller = require("../controllers/studentController");
const router = express.Router();

router.get("/", controller.getAllStudents);
router.post("/", controller.createStudent);
router.get("/:studentId/courses", controller.getStudentCourses);
router.get("/:studentId", controller.getStudentById);
router.put("/:studentId", controller.updateStudent);
router.delete("/:studentId", controller.deleteStudent);

module.exports = router;
