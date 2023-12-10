const { ENV } = require("../src/utils/common");
const dbCreds = {
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  host: ENV.DB_HOST,
  dialect: "postgres",
};

module.exports = { development: dbCreds, production: dbCreds };
