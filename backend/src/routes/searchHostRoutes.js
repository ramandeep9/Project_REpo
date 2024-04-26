// routes/hostProfileRoutes.js

const express = require('express');
const router = express.Router();
const HostProfile = require('../models/Hostprofile');

// GET all host profiles
router.get('/host/search', async (req, res) => {
    try {
        // Fetch host profiles from the database
        const hostProfiles = await HostProfile.findAll();
        
        // Map host profiles to include only necessary details
        const simplifiedProfiles = hostProfiles.map(profile => ({
            type: profile.host_type,
            name: profile.host_name, 
            address: `${profile.address_line_1}, ${profile.city}, ${profile.state}`,
            website: profile.website,
            directions: `https://maps.google.com/?q=${profile.address_line_1},${profile.city},${profile.state},${profile.pincode}` // Example directions link
        }));
        
        // Send simplified host profiles in the response
        res.json(simplifiedProfiles);
        // console.log(simplifiedProfiles);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

