import express from "express"
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Send email using nodemailer
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact Form Submission from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

module.exports = router;