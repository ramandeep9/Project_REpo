// routes/hostProfileRoutes.js

const express = require('express');
const router = express.Router();
const HostProfile = require('../models/Hostprofile');

// GET host profiles filtered by city and state
router.get('/host/search', async (req, res) => {
    try {
        const { city, state } = req.query;

        // Check if both city and state parameters are provided
        if (city && state) {
            // Fetch host profiles from the database
            const hostProfiles = await HostProfile.findAll();

            // Filter host profiles to include only those matching the provided city and state
            const filteredProfiles = hostProfiles.filter(profile => {
                return profile.city ==city && profile.state ==state;
            });

            // Map filtered host profiles to include only necessary details
            const simplifiedProfiles = filteredProfiles.map(profile => ({
                name: profile.host_name,
                type: profile.host_type, 
                address: `${profile.address_line_1}, ${profile.city}, ${profile.state}`,
                website: profile.website,
                directions: `https://maps.google.com/?q=${profile.address_line_1},${profile.city},${profile.state},${profile.pincode}` // Example directions link
            }));

            // Send simplified host profiles in the response
            res.status(200).json(simplifiedProfiles);
        } else {
            // If either city or state parameter is missing, return a bad request response
            res.status(400).json({ error: 'Both city and state parameters are required for searching' });
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
