const PositionType = require("../models").PositionType;

module.exports = {
    getPositionType: (req, res) => {
        PositionType.findAll().then(positionType => {
            return res.status(200).json(positionType);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}