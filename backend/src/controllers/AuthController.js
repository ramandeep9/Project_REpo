const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser, updateUser } = require('../models/user');
const { sendResetEmail } = require('../utils/EmailService');
const randomstring = require('randomstring');

const generateToken = (userId, expiresIn = '1h') => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

const generateRandomToken = () => {
    return randomstring.generate({ length: 20, charset: 'alphanumeric' });
};

const signup = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser({ username, email, password: hashedPassword, role });

        const token = generateToken(newUser.id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });

        res.status(201).json({ token, userId: newUser.id, username, email, role });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user.id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });

        res.status(200).json({ token, email, id: user.id, role: user.role });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const resetToken = generateRandomToken();

        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + (parseInt(process.env.RESET_TOKEN_EXPIRY) || 3600000);
        await updateUser(user);

        console.log('Reset Token:',resetToken); // Log the reset token
        await sendResetEmail(email,resetToken);

        res.status(200).json({ message: 'Password reset email sent Successfully' });
    } catch (error) {
        console.error('Error sending password reset email:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};


const findUserByResetToken = async (resetToken) => {
    try {
        const user = await findUserByEmail( resetToken );
        return user;
    } catch (error) {
        console.error('Error finding user by reset token:', error);
        throw error;
    }
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await findUserByResetToken(token);
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' });
        }
        
        if (user.resetTokenExpiry < Date.now()) {
            return res.status(400).json({ message: 'Expired token' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = null;
        user.resetTokenExpiry = null;
        await updateUser(user);
        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

exports.signup = signup;
exports.login = login;
exports.logout = logout;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
