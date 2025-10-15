const express = require("express");
const router = express.Router();
const { submitProject } = require("../controllers/projectController");

router.post("/start-project", submitProject);

module.exports = router;
