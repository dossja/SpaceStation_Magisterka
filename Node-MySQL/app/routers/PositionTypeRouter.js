const express = require("express");

const {
    getPositionType
} = require("../controllers/PositionTypeController.js");

const router = express.Router();

router.get('/PositionType', getPositionType);

module.exports = router;