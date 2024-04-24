const HostProfile = require('../models/Hostprofile');
// Create host_profiles table if not exists
HostProfile.createHostProfileTable();

// exports.create = function (req, res) {
//     const hostProfileData = req.body;
//     const profileImage = req.file; // Assuming the file is uploaded using 'profileImage' field
//     HostProfile.create(hostProfileData, profileImage)
//         .then(result => res.status(201).json(result))
//         .catch(error => res.status(500).json({ error: error.message,message:"Error" }));
// };


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

exports.delete = function(req, res) {
    const hostProfileId = req.params.id;
    HostProfile.deleteById(hostProfileId)
        .then(result => {
            if (!result) {
                // If the result is null or undefined, it means the host profile was not found
                return res.status(404).json({ error: `Host profile with ID ${hostProfileId} not found` });
            }
            // If the result is not null or undefined, the deletion was successful
            res.json(result);
        })
        .catch(error => 
            res.status(500).json({ error: error.message }));
};

exports.list = function(req, res) {
    HostProfile.findAll()
        .then(hostProfiles => 
            res.json(hostProfiles))
        .catch(error => 
            res.status(500).json({ error: error.message }));
};

