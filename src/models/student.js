// models/student.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Student = sequelize.define(
  "Student",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "students" }
);

module.exports = Student;
