
const nodemailer = require('nodemailer');

// Function to send password reset email
const sendResetEmail = async (email, resetToken) => {
    try {
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'deepramangill621@gmail.com', 
                pass: process.env.PASSWORD, 
            },
        });

        // Email message options
        const mailOptions = {
            from: 'deepramangill621@gmail.com', 
            to: email,
            subject: 'Password Reset', 
            html: `<p>You have requested a password reset. Please click the following link to reset your password:</p>
                   <p><a href="http://localhost:3000/reset-password/${resetToken}">Reset Password</a></p>`, // Email body with reset link
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
    }
};

module.exports = { sendResetEmail };
