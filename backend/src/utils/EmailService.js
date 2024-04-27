// utils/EmailService.js

// Import any necessary email sending library or service here
// For example, if you're using Nodemailer:
const nodemailer = require('nodemailer');

// Function to send password reset email
const sendResetEmail = async (email, resetToken) => {
    try {
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            // Provide your email service provider configuration here
            // For example, if you're using Gmail:
            service: 'Gmail',

            auth: {
                user: 'deepramangill621@gmail.com', // Your email address
                pass: process.env.PASSWORD, // Your email password or app-specific password
            },
        });

        // Email message options
        const mailOptions = {
            from: 'deepramangill621@gmail.com', // Sender address
            to: email, // Recipient address
            subject: 'Password Reset', // Email subject
            html: `<p>You have requested a password reset. Please click the following link to reset your password:</p>
                   <p><a href="http://localhost:3000/reset-password/${resetToken}">Reset Password</a></p>`, // Email body with reset link
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error; // Throw the error to handle it in the calling function
    }
};

module.exports = { sendResetEmail };
