const { Student, Course } = require("../models");
const { api } = require("../utils/common");

exports.getAllStudents = api(async (_, res) => {
  const students = await Student.findAll();
  res.json(students);
});

exports.createStudent = api(async (req, res) => {
  const { name, age } = req.body;
  const newStudent = await Student.create({ name, age });
  res.status(201).json(newStudent);
});

exports.getStudentCourses = api(async (req, res) => {
  const studentId = req.params.studentId;
  const courses = await Course.findAll({
    include: {
      model: Student,
      where: { id: studentId },
      through: { attributes: [] },
    },
  });
  res.json(courses);
});

exports.getStudentById = api(async (req, res) => {
  const studentId = req.params.studentId;
  const student = await Student.findByPk(studentId);
  if (!student) {
    res.status(404).json({ error: "Student not found" });
    return;
  }
  res.json(student);
});

exports.updateStudent = api(async (req, res) => {
  const studentId = req.params.studentId;
  const { name, age } = req.body;

  const student = await Student.findByPk(studentId);
  if (!student) {
    res.status(404).json({ error: "Student not found" });
    return;
  }

  await student.update({ name, age });
  res.json(student);
});

exports.deleteStudent = api(async (req, res) => {
  const studentId = req.params.studentId;
  const student = await Student.findByPk(studentId);
  if (!student) {
    res.status(404).json({ error: "Student not found" });
    return;
  }

  await student.destroy();
  res.json({ message: "Student deleted successfully" });
});
