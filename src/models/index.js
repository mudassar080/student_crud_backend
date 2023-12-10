// models/association.js
const Course = require("./course");
const Student = require("./student");
const Result = require("./result");
const StudentCourse = require("./studentCourse");

// Define relationships between tables
Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });

Result.belongsTo(Student);
Result.belongsTo(Course);

module.exports = { Course, Student, Result, StudentCourse };
