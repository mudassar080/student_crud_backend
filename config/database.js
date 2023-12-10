const { Sequelize } = require("sequelize");
const { development: dbCreds } = require("./config");

const sequelize = new Sequelize(
  dbCreds.database,
  dbCreds.username,
  dbCreds.password,
  {
    host: dbCreds.host,
    dialect: "postgres",
  }
);

module.exports = sequelize;
