const { Course, Student } = require("../models");
const { api } = require("../utils/common");

exports.getAllCourses = api(async (_, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

exports.createCourse = api(async (req, res) => {
  const { name, description } = req.body;
  const newCourse = await Course.create({ name, description });
  res.status(201).json(newCourse);
});

exports.getCourseStudents = api(async (req, res) => {
  const courseId = req.params.courseId;
  const students = await Student.findAll({
    include: {
      model: Course,
      where: { id: courseId },
      through: { attributes: [] },
    },
  });
  res.json(students);
});

// Add CRUD operations

exports.getCourseById = api(async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findByPk(courseId);
  if (!course) {
    res.status(404).json({ error: "Course not found" });
    return;
  }
  res.json(course);
});

exports.updateCourse = api(async (req, res) => {
  const courseId = req.params.courseId;
  const { name, description } = req.body;

  const course = await Course.findByPk(courseId);
  if (!course) {
    res.status(404).json({ error: "Course not found" });
    return;
  }

  await course.update({ name, description });
  res.json(course);
});

exports.deleteCourse = api(async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findByPk(courseId);
  if (!course) {
    res.status(404).json({ error: "Course not found" });
    return;
  }

  await course.destroy();
  res.json({ message: "Course deleted successfully" });
});
