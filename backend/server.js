const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store contact submissions (in production, you'd use a database)
const contactSubmissions = [];

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, whatsapp, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }
    
    // Create submission object
    const submission = {
      id: Date.now(),
      name: name.trim(),
      whatsapp: whatsapp ? whatsapp.trim() : '',
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress
    };
    
    // Store submission
    contactSubmissions.push(submission);
    
    // Log submission (in production, you'd save to database)
    console.log('New contact submission:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      timestamp: submission.timestamp
    });
    
    // Optional: Send email notification (configure with your email service)
    // await sendEmailNotification(submission);
    
    res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! We\'ll get back to you shortly.',
      submissionId: submission.id
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    });
  }
});

// Get all submissions endpoint (for admin purposes)
app.get('/api/submissions', (req, res) => {
  res.json({
    success: true,
    count: contactSubmissions.length,
    submissions: contactSubmissions.map(sub => ({
      id: sub.id,
      name: sub.name,
      email: sub.email,
      whatsapp: sub.whatsapp,
      message: sub.message,
      timestamp: sub.timestamp
    }))
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Good Deals API is running!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Good Deals API Server',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact',
      submissions: 'GET /api/submissions',
      health: 'GET /api/health'
    }
  });
});

// Optional email notification function
async function sendEmailNotification(submission) {
  try {
    // Configure your email service here
    // Example with Gmail (you'd need to set up app passwords)
    /*
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@gooddeals.com', // Your business email
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>WhatsApp:</strong> ${submission.whatsapp || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <p><strong>Submitted:</strong> ${submission.timestamp}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
    */
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Good Deals API server running on http://0.0.0.0:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});

module.exports = app;

