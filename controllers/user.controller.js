const express = require('express');
const router = express.Router();

router.get('/api/users', (req, res) => {
    const users = [ {id: 1, firstname: "Smith", lastname: "Blake"}, {id: 2, firstname: "James", lastname: "Eddie"}, {id: 3, firstname: "Mary", lastname: "Payne"}]
    res.send({"users": users});
});

router.get('/api/userbyid', (req, res) => {
    const users = [ {id: 1, firstname: "Smith", lastname: "Blake"}, {id: 2, firstname: "James", lastname: "Eddie"}, {id: 3, firstname: "Mary", lastname: "Payne"}]
    res.send({"user": users[2]});
});

module.exports = router;