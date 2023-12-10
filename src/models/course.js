// models/course.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Course = sequelize.define(
  "Course",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
  },
  { tableName: "courses" }
);

module.exports = Course;
