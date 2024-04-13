const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/user');
const generateToken = require('../utils/GenerateToken');

// Signup Function
const signup = async (req, res) => {
    // Extract email, password, confirmPassword from request body
    const {username,email, password , role } = req.body;

    try {
        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const userId = await createUser({username, email, password: hashedPassword , role});

        // Generate JWT token
        const token = generateToken(userId);

        res.status(201).json({ token, userId, username , email,password,role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

// Login Function
const login = async (req, res) => {
    // Extract email and password from request body
    const { email, password } = req.body;
console.log(req.body+ email+ password);
    try {
        // Check if user exists
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ token, email, id: user.id, role: user.role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

exports.signup = signup;
exports.login = login;
