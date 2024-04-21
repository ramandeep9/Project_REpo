const HostProfile = require('../models/Hostprofile');
// Create host_profiles table if not exists
HostProfile.createHostProfileTable();

// Controller functions
exports.create = function (req, res) {
    const newHostProfile = req.body;
    HostProfile.create(newHostProfile)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.read = function(req, res) {
    const hostProfileId = req.params.id;
    HostProfile.findById(hostProfileId)
        .then(hostProfile => {
            if (hostProfile) {
                res.json(hostProfile);
            } else {
                res.status(404).json({ message: `Host profile with id ${hostProfileId} not found.` });
            }
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.update = function(req, res) {
    const hostProfileId = req.params.id;
    const updatedHostProfile = req.body;
    HostProfile.updateById(hostProfileId, updatedHostProfile)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.delete = function(req, res) {
    const hostProfileId = req.params.id;
    HostProfile.deleteById(hostProfileId)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.list = function(req, res) {
    HostProfile.findAll()
        .then(hostProfiles => res.json(hostProfiles))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.uploadImage = function (req, res) {
  upload(req, res, function (err) {
      if (err) {
          // An error occurred during file upload
          return res.status(500).json({ error: err.message });
      }
      // File uploaded successfully
      res.json({ message: 'Image uploaded successfully', filename: req.file.filename });
  });
};
