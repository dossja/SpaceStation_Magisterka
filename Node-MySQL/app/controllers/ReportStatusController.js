const ReportStatus = require("../models").ReportStatus;

module.exports = {
    getReportStatus: (req, res) => {
        ReportStatus.findAll().then(reportStatus => {
            return res.status(200).json(reportStatus);
        });
    }
}