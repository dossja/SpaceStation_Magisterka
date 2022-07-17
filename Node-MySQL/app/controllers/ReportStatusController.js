const ReportStatus = require("../models").ReportStatus;

module.exports = {
    getReportStatus: (req, res) => {
        ReportStatus.findAll().then(reportStatus => {
            return res.status(200).json(reportStatus);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}