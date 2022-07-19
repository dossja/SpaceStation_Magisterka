const MissionCrew = require("../models").MissionCrew;

module.exports = {
    getMissionCrew: (req, res) => {
        MissionCrew.findAll().then(missionCrew => {
            return res.status(200).json(missionCrew);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    getMissionCrewMission: (req, res) => {
        MissionCrew.findAll({
            where: {
                missionId: req.params.id
            }
        }).then(missionCrew => {
            return res.status(200).json(missionCrew);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    getMissionCrewUser: (req, res) => {
        MissionCrew.findAll({
            where: {
                userId: req.params.id
            }
        }).then(missionCrew => {
            return res.status(200).json(missionCrew);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postMissionCrew: (req, res) => {
        MissionCrew.create(req.body).then(missionCrew => {
            return res.status(201).json(missionCrew);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}