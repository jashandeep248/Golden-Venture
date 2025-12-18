const mongoose = require('mongoose');
require('dotenv').config();

const Admin = require('../src/models/Admin');

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminExists = await Admin.findOne({ email: 'admin@goldenventures.com' });
    if (adminExists) {
      console.log('Admin already exists');
      return;
    }

    const admin = new Admin({
      email: 'admin@goldenventures.com',
      password: 'admin123'
    });

    await admin.save();
    console.log('Admin created successfully');
    console.log('Email: admin@goldenventures.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdmin();