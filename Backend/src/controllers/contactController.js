const emailService = require('../utils/emailService');
const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    
    // Try to save to database
    try {
      const contact = new Contact({
        name,
        email,
        message,
        ipAddress
      });
      await contact.save();
      console.log('Contact saved to database');
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Continue without database
    }
    
    // Try to send emails but don't fail if email service is down
    try {
      await emailService.sendContactEmail({ name, email, message });
      await emailService.sendAutoReply({ name, email });
      console.log('Emails sent successfully');
    } catch (emailError) {
      console.error('Email service error:', emailError);
      // Continue without failing the request
    }
    
    res.status(200).json({
      success: true,
      message: 'Thank you! Our project desk will follow up within two working days.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or contact us directly.'
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    await Contact.findByIdAndUpdate(id, { status });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

module.exports = {
  submitContact,
  getContacts,
  updateContactStatus
};