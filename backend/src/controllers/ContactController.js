// controllers/contactController.js

const contact = require('../models/Contact');

contact.createContactTable();
// Function to create the contact table if it doesn't exist
const createContactTable = (req, res) => {
  contact.createContactTable((err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating contact table' });
    }
    return res.status(200).json({ message: 'Contact table created or already exists' });
  });
};

// Function to save a new contact
const saveContact = (req, res) => {
  const { name, email, mobile, application, query } = req.body;
  contact.saveContact(name, email, mobile, application, query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving contact' });
    }
    return res.status(201).json({ message: 'Contact saved successfully' });
  });
};

module.exports = {
  createContactTable,
  saveContact,
};
