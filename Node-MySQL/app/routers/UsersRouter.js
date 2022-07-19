const express = require("express");

const {
    getUsers,
    getUser,
    getUserByEmail,
    postUsers,
    updateUsers,
    deleteUsers
} = require("../controllers/UsersController.js");

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUser);

router.post('/Users/login', getUserByEmail);
router.post('/Users/signup', postUsers);

router.put('/Users/update/:id', updateUsers);

router.delete('/Users/delete/:id', deleteUsers);

module.exports = router;