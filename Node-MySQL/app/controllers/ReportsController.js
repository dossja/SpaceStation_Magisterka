const Reports = require("../models").Reports;

module.exports = {
    getReports: (req, res) => {
        Reports.findAll().then(reports => {
            return res.status(200).json(reports);
        }).catch(err => {
            return res.status(400).json({ err })
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
        req.body.reportStatusId = 1;
        Reports.create(req.body).then(report => {
            return res.status(201).json(report);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    updateReports: (req, res) => {
        Reports.update(req.body, { where: { id: req.params.id } }).then(updatedReport => {
            return res.status(202).json(updatedReport);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}