const express = require("express");
const controller = require("../controllers/resultController");
const router = express.Router();

router.get("/", controller.getAllResults);
router.post("/", controller.createResult);
router.get("/:resultId", controller.getResultById);
router.put("/:resultId", controller.updateResult);
router.delete("/:resultId", controller.deleteResult);

module.exports = router;
