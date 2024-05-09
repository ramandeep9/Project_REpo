const express = require('express');
const router = express.Router();
const hostProfileController = require('../controllers/HostprofileController');
const multer = require('multer');
const path = require('path');
const db = require('../config/db');
const uniqid = require('uniqid');

// Multer configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images');
    },
    filename: function (req, file, cb) {
      cb(null, uniqid() + path.extname(file.originalname));
    },
  }),
});


// Create a new host profile
router.post('/create', upload.single('host_profile_image'), async (req, res) => {
  try {
    // Extract request body and file
    const {
      host_person_name,
      email_address,
      contact_person_designation,
      host_type,
      host_name,
      contact_info,
      address_line_1,
      address_line_2,
      state,
      street,
      city,
      pincode,
      country,
      year_of_establishment,
      affliation,
      website,
      host_description,
      facebook_link,
      twitter_link,
      instagram_link,
      linkedin_link,
    } = req.body;

    // Get the file name if uploaded

      host_profile_image =  req.file ? req.file.filename : null;
    
    // Perform database insertion
    const conn = await db.getConnection();
    const sql = `
      INSERT INTO hostprofile (
        host_person_name, email_address, contact_person_designation, host_type, host_name,
        contact_info, address_line_1, address_line_2, state, street, city, pincode, country,
        year_of_establishment, affliation, website, host_profile_image, host_description,
        facebook_link, twitter_link, instagram_link, linkedin_link
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await conn.query(sql, [
      host_person_name, email_address, contact_person_designation, host_type, host_name,
      contact_info, address_line_1, address_line_2, state, street, city, pincode, country,
      year_of_establishment, affliation, website, host_profile_image,host_description, 
      facebook_link, twitter_link, instagram_link, linkedin_link
    ]);
   
    console.log('Host profile created successfully:', JSON.stringify(req.body));
    res.status(200).json({ message: 'Host profile created successfully.' });
  } catch (error) {
    console.error('Error creating host profile:', error);
    res.status(500).json({ error: 'An error occurred while creating the host profile.' });
  }
});

// Update an existing host profile
router.put('/update/:id', upload.single('host_profile_image'), async (req, res) => {
  try {
    // Extract request body, file, and URL parameter
    const { id } = req.params;
    const { ...otherFields } = req.body;
    const host_profile_image = req.file ? req.file.filename : null;

    // Perform database update
    const conn = await db.getConnection();
    const sql = `UPDATE hostprofile SET ?, host_profile_image=? WHERE id=?`;
    await conn.query(sql, [otherFields, host_profile_image, id]);

    res.status(200).json({ message: 'Host profile updated successfully.' });
  } catch (error) {
    console.error('Error updating host profile:', error);
    res.status(500).json({ error: 'An error occurred while updating the host profile.' });
  }
});

router.get('/:id', hostProfileController.read);
router.delete('/:id', hostProfileController.delete);
router.get('/', hostProfileController.list);

module.exports = router;
