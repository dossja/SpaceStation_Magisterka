const express = require("express");

const {
    getReportStatus
} = require("../controllers/ReportStatusController.js");

const router = express.Router();

router.get('/ReportStatus', getReportStatus);

module.exports = router;