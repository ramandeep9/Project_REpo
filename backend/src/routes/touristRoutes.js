const express = require('express');
const router = express.Router();
const touristController = require('../controllers/TouristController');

// Routes for tourist registration
router.post('/create', touristController.create);
router.get('/:id', touristController.read);
router.put('/:id', touristController.update);
router.delete('/:id', touristController.delete);
router.get('/', touristController.list);

module.exports = router;
