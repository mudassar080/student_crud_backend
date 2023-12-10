const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

// No additional fields needed for a join table
const StudentCourse = sequelize.define(
  "StudentCourse",
  {},
  { tableName: "student_courses" }
);

module.exports = StudentCourse;
