const express = require("express");

const {
    getReports,
    getReport,
    postReports,
    updateReports
} = require("../controllers/ReportsController.js");

const router = express.Router();

router.get('/Reports', getReports);
router.get('/Reports/:id', getReport);

router.post('/Reports/add', postReports);

router.put('/Reports/update/:id', updateReports);

module.exports = router;