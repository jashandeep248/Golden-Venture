const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);
router.get('/contacts', adminController.getContacts);
router.put('/contacts/:id', adminController.updateContactStatus);

module.exports = router;