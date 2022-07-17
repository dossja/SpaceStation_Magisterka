const ReportType = require("../models").ReportType;

module.exports = {
    getReportType: (req, res) => {
        ReportType.findAll().then(reportType => {
            return res.status(200).json(reportType);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}