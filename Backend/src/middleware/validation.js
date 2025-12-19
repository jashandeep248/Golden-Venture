const contactValidation = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.push('Valid email is required');
  }

  if (!phone || !/^\+?[\d\s-()]{10,}$/.test(phone)) {
    errors.push('Valid phone number is required');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

const handleValidationErrors = (req, res, next) => {
  next();
};

module.exports = {
  contactValidation,
  handleValidationErrors
};