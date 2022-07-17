const PositionType = require("../models").PositionType;

module.exports = {
    getPositionType: (req, res) => {
        PositionType.findAll().then(positionType => {
            return res.status(200).json(positionType);
        });
    }
}