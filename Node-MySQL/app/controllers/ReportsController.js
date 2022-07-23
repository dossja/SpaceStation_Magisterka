const Reports = require("../models").Reports;
const ReportType = require("../models").ReportType;
const ReportStatus = require("../models").ReportStatus;
const Users = require("../models").Users;
const Incidents = require("../models").Incidents;

module.exports = {
    getReports: (req, res) => {
        Reports.findAll({ include: [{ model: ReportType }, { model: ReportStatus }, { model: Users }, { model: Incidents }] }).then(reports => {
            reports.forEach(rep => {
                rep.dataValues.ReportingUser = rep.dataValues.User;
                delete rep.dataValues.User;
            });
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