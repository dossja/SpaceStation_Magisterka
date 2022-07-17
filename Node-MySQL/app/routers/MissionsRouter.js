const express = require("express");

const {
    getMissions,
    getMission,
    postMissions
} = require("../controllers/MissionsController.js");

const router = express.Router();

router.get('/Missions', getMissions);
router.get('/Missions/:id/crew', getMission);

router.post('/Missions/add', postMissions);

module.exports = router;