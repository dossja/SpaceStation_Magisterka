const Missions = require("../models").Missions;
const MissionCrew = require("../models").MissionCrew;
const Users = require("../models").Users;

module.exports = {
    getMissions: (req, res) => {
        Missions.findAll({ include: [{ model: MissionCrew }] }).then(missions => {
            return res.status(200).json(missions);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    getMission: (req, res) => {
        Missions.findAll({
            where: {
                id: req.params.id
            }, include: [{ model: MissionCrew, include: { model: Users } }]
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
                return res.status(201).json(mission);
            }).catch(err => {
                return res.status(400).json({ err })
            });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}