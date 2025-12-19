const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Contact = require('../models/Contact');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Prevent timing attacks
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ 
      success: true, 
      message: 'Login successful',
      token,
      admin: { id: admin._id, email: admin.email }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
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
  login,
  getContacts,
  updateContactStatus
};