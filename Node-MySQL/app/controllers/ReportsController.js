const Reports = require("../models").Reports;

module.exports = {
    getReports: (req, res) => {
        Reports.findAll().then(reports => {
            return res.status(200).json(reports);
        });
    },

    getReport: (req, res) => {
        Reports.findAll({
            where: {
                id: req.params.id
            }
        }).then(report => {
            return res.status(200).json(report);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postReports: (req, res) => {
        Reports.create(req.body).then(report => {
            return res.status(201).json({ "message": "Report created successfully", report });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    updateReports: (req, res) => {
        Reports.findAll({
            where: {
                id: req.params.id
            }
        }).then(report => {
            report.update(req.body).then(updateReport => {
                return res.status(202).json({ "message": "Report updated successfully", updateReport });
            })
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}