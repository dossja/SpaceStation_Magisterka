const Missions = require("../models").Missions;

module.exports = {
    getMissions: (req, res) => {
        Missions.findAll().then(missions => {
            return res.status(200).json(missions);
        }).catch(err => {
            return res.status(400).json({ err })
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
        Missions.findAll({ order: [['id', 'DESC']] }).then(missions => {
            let startDate, endDate;
            if (missions.length < 1)
                startDate = new Date();
            else
                startDate = missions[0].dataValues.startDate;

            endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 56);

            Missions.create({ startDate, endDate }).then(mission => {
                return res.status(201).json({ "message": "Missions created successfully", mission });
            }).catch(err => {
                return res.status(400).json({ err })
            });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}