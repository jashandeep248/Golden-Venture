const express = require('express');
const { contactValidation, handleValidationErrors } = require('../middleware/validation');
const { submitContact, getContacts, updateContactStatus } = require('../controllers/contactController');

const router = express.Router();

router.post('/', contactValidation, handleValidationErrors, submitContact);
router.get('/admin', getContacts);
router.patch('/admin/:id', updateContactStatus);

module.exports = router;