const express = require("express");
const submitSurvey = require("../controller/survey.controller");
const router = express.Router();

router.post("/submit", submitSurvey);

module.exports = router;
