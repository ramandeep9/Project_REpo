// routes/hostProfileRoutes.js
const express = require('express');
const router = express.Router();
const hostProfileController = require('../controllers/HostprofileController');
// const multer = require('multer');

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Save uploaded images to the 'uploads' directory
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now());
//     }
// });
// const upload = multer({ storage: storage });

router.post('/', hostProfileController.create);
router.get('/:id', hostProfileController.read);
router.put('/:id', hostProfileController.update);
router.delete('/:id', hostProfileController.delete);
router.get('/', hostProfileController.list);
// router.post('/logout', hostProfileController.logout);
// router.post('/upload', upload.single('image'),multer.uploadImage);


module.exports = router;
