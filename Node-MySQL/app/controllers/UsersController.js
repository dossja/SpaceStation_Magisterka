const Users = require("../models").Users;

module.exports = {
    getUsers: (req, res) => {
        Users.findAll().then(users => {
            return res.status(200).json(users);
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
                email: req.params.email
            }
        }).then(user => {
            return res.status(200).json(user);
        }).catch(err => {
            return res.status(400).json({ err })
        });
    },

    postUsers: (req, res) => {
        Users.create(req.body).then(user => {
            return res.status(201).json({ "message": "User created successfully", user });
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
            user.update(req.body).then(updateUser => {
                return res.status(202).json({ "message": "User updated successfully", updateUser });
            })
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