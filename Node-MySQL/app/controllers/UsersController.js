const Users = require("../models").Users;
const PositionType = require("../models").PositionType;

module.exports = {
    getUsers: (req, res) => {
        Users.findAll({ include: [{ model: PositionType }] }).then(users => {
            return res.status(200).json(users);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    getUser: (req, res) => {
        Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(user => {
            return res.status(200).json(user);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    getUserByEmail: (req, res) => {
        Users.findAll({
            where: {
                email: req.body.email
            }
        }).then(user => {
            console.log(user);
            return res.status(200).json(user);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postUsers: (req, res) => {
        req.body.email = req.body.name + "." + req.body.surname + "@firm.com";
        Users.create(req.body).then(user => {
            return res.status(201).json(user);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    updateUsers: (req, res) => {
        Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(user => {
            Users.update(req.body, { where: { id: req.params.id } }).then(updateUser => {
                return res.status(202).json(updateUser);
            }).catch(err => {
                return res.status(400).json({ err })
            });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    deleteUsers: (req, res) => {
        Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({ "message": "User deleted successfully" });
        }).catch(err => {
            return res.status(400).json({ err })
        });
    }
}