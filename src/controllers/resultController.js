const { Result } = require("../models");
const { api } = require("../utils/common");

const getAllResults = api(async (r_, res) => {
  const results = await Result.findAll();
  res.json(results);
});

const createResult = api(async (req, res) => {
  const { StudentId, CourseId, grade, semester } = req.body;
  console.log(StudentId, CourseId, grade, semester);
  const newResult = await Result.create({
    StudentId,
    CourseId,
    grade,
    semester,
  });
  res.status(201).json(newResult);
});

const getResultById = api(async (req, res) => {
  const resultId = req.params.resultId;
  const result = await Result.findByPk(resultId);
  if (!result) {
    res.status(404).json({ error: "Result not found" });
    return;
  }
  res.json(result);
});

const updateResult = api(async (req, res) => {
  const resultId = req.params.resultId;
  const { grade, semester } = req.body;

  const result = await Result.findByPk(resultId);
  if (!result) {
    res.status(404).json({ error: "Result not found" });
    return;
  }

  await result.update({ grade, semester });
  res.json(result);
});

const deleteResult = api(async (req, res) => {
  const resultId = req.params.resultId;
  const result = await Result.findByPk(resultId);
  if (!result) {
    res.status(404).json({ error: "Result not found" });
    return;
  }

  await result.destroy();
  res.json({ message: "Result deleted successfully" });
});

module.exports = {
  getAllResults,
  createResult,
  getResultById,
  updateResult,
  deleteResult,
};
