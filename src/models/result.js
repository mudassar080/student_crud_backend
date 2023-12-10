// models/result.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Result = sequelize.define(
  "Result",
  {
    grade: { type: DataTypes.STRING, allowNull: false },
    semester: { type: DataTypes.INTEGER, allowNull: true },
  },
  { tableName: "results" }
);

module.exports = Result;
