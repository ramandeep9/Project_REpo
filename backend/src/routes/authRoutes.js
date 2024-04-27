const { Router } = require('express');
const { signup, login ,logout,forgotPassword,resetPassword} = require('../controllers/AuthController');

const router = Router();

// Signup Route
router.post('/register', signup);

// Login Route
router.post('/login', login);

// Logout
router.post('/logout', logout);

//Forgot

router.post('/forgot-password', forgotPassword);

//Reset
router.post('/reset-password/:token', resetPassword);

// Root Route
router.get('', (req, res) => {
  res.status(200).json({ message: 'Server Working' });
});

module.exports = router;