

const express = require('express');
const { handleChat } = require('../controller/chatbot.controller');

const router = express.Router();

router.post('/send', handleChat);

module.exports = router;
