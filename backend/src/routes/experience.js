const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/ExperienceController');

// Route for saving text experience
router.post('/experience/text', experienceController.saveTextExperience);

// Route for saving audio experience
router.post('/experience/audio', experienceController.saveAudioExperience);

// Route for saving video experience
router.post('/experience/video', experienceController.saveVideoExperience);

module.exports = router;
