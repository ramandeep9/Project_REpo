const Tourist = require('../models/Touristprofile');

// Create tourists table if not exists
Tourist.createTouristTable();

exports.create = async (req, res) => {
    try {
        const newTourist = req.body;
        const result = await Tourist.create(newTourist);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.read = async (req, res) => {
    try {
        const touristId = req.params.id;
        const tourist = await Tourist.findById(touristId);
        if (tourist) {
            res.json(tourist)
            console.log(tourist)
        } else {
            res.status(404).json({ message: `Tourist with id ${touristId} not found.` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// In the tourist controller

exports.update = async (req, res) => {
    try {
        const touristId = req.params.id;
        const updatedTouristData = req.body;

        // Check if the updated data is empty
        if (!Object.keys(updatedTouristData).length) {
            return res.status(400).json({ error: 'Updated data cannot be empty' });
        }
 
        // Call the updateById function from the model to update the tourist profile
        const result = await Tourist.updateById(touristId, updatedTouristData);

        // Return a success message
        res.json(result);
    } catch (error) {
        console.error('Error updating tourist:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const touristId = req.params.id;
        await Tourist.deleteById(touristId);
        res.json({ message: 'Tourist information deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.list = async (req, res) => {
    try {
        const tourists = await Tourist.findAll();
        res.json(tourists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
