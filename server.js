// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON data

// POST endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Configure Nodemailer to use your email service (e.g., Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password',  // replace with your email password or app-specific password
      }
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'recipient-email@example.com', // replace with the recipient's email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Start the server
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
