const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken } = require('../middleware/auth');

router.post('/login', adminController.login);
router.get('/contacts', authenticateToken, adminController.getContacts);
router.put('/contacts/:id', authenticateToken, adminController.updateContactStatus);

module.exports = router;