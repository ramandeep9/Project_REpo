// Import required modules
const contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

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

    // Send email notification
    sendEmailNotification(name, email, mobile, application, query);

    return res.status(201).json({ message: 'Contact saved successfully' });
  });
};

// Function to send email notification
const sendEmailNotification = (name, email, mobile, application, query) => {
  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
   
    auth: {
      user: 'deepramangill621@gmail.com', // Sender email
      pass: process.env.PASSWORD, // Sender email password from environment variable
    },
  });

  // Email content
  let mailOptions = {
    from: email, // Sender's email address
    to: 'deepvishal621@gmail.com', // Receiver's email address
    subject: 'Contact Saved Notification',
    text: `Dear ${name},\n\nNew Contact Enquiry saved successfully.\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nApplication: ${application}\nQuery: ${query}\n\nBest regards,\nDepartment of Holistic Education`,
  };

  // Send email
  transporter.sendMail(mailOptions,(error,info) => {
    if (error) {
      console.log('Error occurred while sending email:', error);
      
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
  createContactTable,
  saveContact,
};
