const Missions = require("../models").Missions;

module.exports = {
    getMissions: (req, res) => {
        Missions.findAll().then(missions => {
            return res.status(200).json(missions);
        });
    },

    getMission: (req, res) => {
        Missions.findAll({
            where: {
                id: req.params.id
            }
        }).then(mission => {
            return res.status(200).json(mission);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postMissions: (req, res) => {
        Missions.create(req.body).then(mission => {
            return res.status(201).json({ "message": "Missions created successfully", mission });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}