const express = require("express");

const {
    getReportType
} = require("../controllers/ReportTypeController.js");

const router = express.Router();

router.get('/ReportType', getReportType);

module.exports = router;