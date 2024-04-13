// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactController');

// Route to save a new contact
router.post('/contact', contactController.saveContact);

module.exports = router;

