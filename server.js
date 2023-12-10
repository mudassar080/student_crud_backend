// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const courseRoutes = require("./src/routes/courseRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
const resultRoutes = require("./src/routes/resultRoutes");
const { ENV, print } = require("./src/utils/common");
const cors = require("cors");
require("./src/models");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);
app.use("/results", resultRoutes);

// Synchronize models with the database
sequelize
  .sync()
  .then(() => {
    print("Database synchronized.");

    const PORT = ENV.PORT || 8000;
    app.listen(PORT, () => {
      print(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    print("Error synchronizing database:", err);
  });
