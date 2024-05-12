const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser} = require('../models/user');
// const { sendResetEmail } = require('../utils/EmailService');
// const randomstring = require('randomstring');
const {getConnection}=require('../config/db')
const nodemailer = require('nodemailer');
require('dotenv').config();
const generateToken = (userId, expiresIn = '1h') => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

  const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const otp = Math.floor(1000 + Math.random() * 9000);

      const otpExpier = new Date();
      otpExpier.setMinutes(otpExpier.getMinutes() + 40);


      const connection = await getConnection();
    connection.query(" UPDATE register SET otp = ?, otpExpire = ? WHERE email = ? ",  [otp, otpExpier, req.body.email]);
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'deepramangill621@gmail.com', // Sender email
            pass: process.env.PASSWORD, // Sender email password from environment variable
        },
    });

    const mailOptions = {
        from: 'deepramangill621@gmail.com',
        to: req.body.email,
        subject: 'Password reset OTP',
        text: `Dear User,

        You are receiving this email because a request 
        has been made to reset the password for your 
        account on Tredul - https://tredul.in.
        
        To proceed with the password reset, 
        please use the following One-Time Password (OTP):
        Here's your OTP: ${otp} 
        Please note that this OTP is valid 
        for 40 minutes from the time of issuance.
        
        If you did not request this password reset or
        if you believe this is in error, you can safely 
        ignore this email.Your account security remains intact.
        
        Thank you for being a part of the Tredul, 
        where we journey, learn, and thrive together!
        
        Best Regards,
        Department of Holistic Education
        With Intern Ramandeep
        Tredul - Travel, Educate, and Live`,
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return next(new AppError(error, 500));
        } else {
            res.json({
                data: "Your OTP send to the email"
            })
        }
    });

    } catch (error) {
      console.error('Error sending password reset email:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  };

  const resetPassword = async (req, res) => {
    const { otp, password } = req.body;

    try {
        if (!otp) {
            return res.status(404).json({ message: "OTP not found" });
        }

        const connection = await getConnection();

        const [result] = await connection.query("SELECT * FROM register WHERE otp = ? AND otpExpire > NOW()", [otp]);

        if (result.length === 0) {
            return res.status(404).json({ message: "Invalid or expired OTP" });
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);

        
        await connection.query("UPDATE register SET password = ?, otp = null, otpExpire = null WHERE otp = ?", [hashedPassword, otp]);

        res.status(201).json({ message: "Password changed successfully" });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Error resetting password' });
    }
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

exports.forgotPassword = forgotPassword;
exports.signup = signup;
exports.login = login;
exports.logout = logout;
exports.resetPassword=resetPassword;
