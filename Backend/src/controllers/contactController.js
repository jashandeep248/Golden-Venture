const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    
    const contact = new Contact({
      name,
      email,
      phone,
      message,
      ipAddress
    });
    
    await contact.save();
    console.log('Contact saved to database');
    
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save message. Please try again.'
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
    
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid contact ID' });
    }
    
    if (!['new', 'contacted', 'completed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    
    const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

module.exports = {
  submitContact,
  getContacts,
  updateContactStatus
};