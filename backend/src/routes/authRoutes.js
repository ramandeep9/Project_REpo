const { Router } = require('express');
const { signup, login } = require('../controllers/AuthController');

const router = Router();

// Signup Route
router.post('/register', signup);

// Login Route
router.post('/login', login);

// Root Route
router.get('', (req, res) => {
  res.status(200).json({ message: 'Server Working' });
});

module.exports = router;