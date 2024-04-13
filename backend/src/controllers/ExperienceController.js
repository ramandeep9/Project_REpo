const ExperienceModel = require('../models/Experience');

ExperienceModel.createExperiencesTable();

exports.saveTextExperience = (req, res) => {
  const { content } = req.body;
  const type = 'text';

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  ExperienceModel.saveExperience(type, content, (error, results) => {
    if (error) {
      console.error('Error saving text experience:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('Text experience saved successfully');
      res.status(201).json({ message: 'Text experience saved successfully' });
    }
  });
};

exports.saveAudioExperience = (req, res) => {
  const { content } = req.body;
  const type = 'audio';

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  ExperienceModel.saveExperience(type, content, (error, results) => {
    if (error) {
      console.error('Error saving audio experience:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('Audio experience saved successfully');
      res.status(201).json({ message: 'Audio experience saved successfully' });
    }
  });
};

exports.saveVideoExperience = (req, res) => {
  const { content } = req.body;
  const type = 'video';

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  ExperienceModel.saveExperience(type, content, (error, results) => {
    if (error) {
      console.error('Error saving video experience:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('Video experience saved successfully');
      res.status(201).json({ message: 'Video experience saved successfully' });
    }
  });
};
