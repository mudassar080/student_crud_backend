// migrations/<timestamp>-create-results-table.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("results", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grade: { type: Sequelize.STRING, allowNull: false },
      semester: { type: Sequelize.INTEGER, allowNull: true },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "students", key: "id" },
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "courses", key: "id" },
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("results");
  },
};
