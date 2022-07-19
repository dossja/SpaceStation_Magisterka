const express = require("express");

const {
    getMissionCrew,
    getMissionCrewMission,
    getMissionCrewUser,
    postMissionCrew
} = require("../controllers/MissionCrewController.js");

const router = express.Router();

router.get('/MissionCrew', getMissionCrew);
router.get('/MissionCrew/mission/:id', getMissionCrewMission);
router.get('/MissionCrew/user/:id', getMissionCrewUser);

router.post('/MissionCrew/add', postMissionCrew);

module.exports = router;