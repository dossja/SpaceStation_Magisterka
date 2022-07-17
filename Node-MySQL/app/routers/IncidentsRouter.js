const express = require("express");

const {
    getIncidents,
    getIncident,
    postIncidents
} = require("../controllers/IncidentsController.js");

const router = express.Router();

router.get('/Incidents', getIncidents);
router.get('/Incidents/report/:id', getIncident);

router.post('/Incidents/add', postIncidents);

module.exports = router;