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
      cb(null, './uploads/images');
    },
    filename: function (req, file, cb) {
      cb(null, uniqid() + path.extname(file.originalname));
    },
  }),
});

// Create a new host profile
router.post('/create', upload.single('host_profile_image'), async (req, res) => {
  try {
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
      linkedin_link
    } = req.body;

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
      year_of_establishment, affliation, website, req.file ? req.file.filename : null,
      host_description, facebook_link, twitter_link, instagram_link, linkedin_link
    ]);

    res.status(200).json({ message: 'Host profile created successfully.' });
    console.log()
  } catch (error) {
    console.error('Error creating host profile:', error);
    res.status(500).json({ error: 'An error occurred while creating the host profile.' });
  }
});

// Update an existing host profile
router.put('/update/:id', upload.single('host_profile_image'), async (req, res) => {
  try {
    const { id } = req.params;
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
      host_profile_image,
      host_description,
      facebook_link,
      twitter_link,
      instagram_link,
      linkedin_link
    } = req.body;

    const conn = await db.getConnection();
    const sql = `
      UPDATE hostprofile SET 
        host_person_name=?, 
        email_address=?, 
        contact_person_designation=?, 
        host_type=?, 
        host_name=?, 
        contact_info=?, 
        address_line_1=?, 
        address_line_2=?, 
        state=?, 
        street=?, 
        city=?, 
        pincode=?, 
        country=?, 
        year_of_establishment=?, 
        affliation=?, 
        website=?, 
        host_profile_image=?, 
        host_description=?, 
        facebook_link=?, 
        twitter_link=?, 
        instagram_link=?, 
        linkedin_link=?
      WHERE id=?
    `;
    await conn.query(sql, [
      host_person_name, email_address, contact_person_designation, host_type, host_name,
      contact_info, address_line_1, address_line_2, state, street, city, pincode, country,
      year_of_establishment, affliation, website, req.file ? req.file.filename : null,
      host_description, facebook_link, twitter_link, instagram_link, linkedin_link, id
    ]);

    res.status(200).json({ message: 'Host profile updated successfully.' });
  } catch (error) {
    console.error('Error updating host profile:', error);
    res.status(500).json({ error: 'An error occurred while updating the host profile.' });
  }
});
// router.get('/host/', async (req, res) => {
//     try {
//       const hostProfiles = await hostProfileController.list();
//       res.status(200).json(hostProfiles);
//     } catch (error) {
//       console.error('Error fetching host profiles:', error);
//       res.status(500).json({ error: 'An error occurred while fetching host profiles.' });
//     }
//   });
  
//   // Get a host profile by ID
//   router.get('/host/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const hostProfile = await hostProfileController.findById(id);
//       if (!hostProfile) {
//         return res.status(404).json({ error: 'Host profile not found.' });
//       }
//       res.status(200).json(hostProfile);
//     } catch (error) {
//       console.error('Error fetching host profile:', error);
//       res.status(500).json({ error: 'An error occurred while fetching host profile.' });
//     }
//   });
  
//   // Delete a host profile by ID
//   router.delete('/host/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       await hostProfileController.deleteById(id);
//       res.status(200).json({ message: 'Host profile deleted successfully.' });
//     } catch (error) {
//       console.error('Error deleting host profile:', error);
//       res.status(500).json({ error: 'An error occurred while deleting host profile.' });
//     }
//   });
router.get('/:id', hostProfileController.read);
router.delete('/:id', hostProfileController.delete);
router.get('/', hostProfileController.list);
module.exports = router;
