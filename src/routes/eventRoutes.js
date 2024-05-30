const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/events/createEvents', eventController.createEvent);
router.get('/events/login', eventController.login);

module.exports = router;