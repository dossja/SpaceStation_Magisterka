const Incidents = require("../models").Incidents;

module.exports = {
    getIncidents: (req, res) => {
        Incidents.findAll().then(incidents => {
            return res.status(200).json(incidents);
        });
    },

    getIncident: (req, res) => {
        Incidents.findAll({
            where: {
                reportId: req.params.id
            }
        }).then(incident => {
            return res.status(200).json(incident);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postIncidents: (req, res) => {
        Incidents.create(req.body).then(incident => {
            return res.status(201).json({ "message": "Incident created successfully", incident });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}