const express = require('express');
const contact_router = express.Router();
const { ContactUs } = require('../Controller/ContactController');

contact_router.post('/contactus', ContactUs);

module.exports = contact_router;