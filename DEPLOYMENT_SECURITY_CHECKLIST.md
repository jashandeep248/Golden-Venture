# Security Checklist for Production Deployment

## CRITICAL - Must Fix Before Deployment:

### 1. Environment Variables
Replace these in your Render environment variables (NOT in .env.production):

```
JWT_SECRET=<generate-strong-32-char-random-string>
SESSION_SECRET=<generate-strong-32-char-random-string>
MONGODB_URI=<your-actual-mongodb-connection-string>
```

### 2. Remove .env.production from Git
```bash
git rm .env.production
echo ".env.production" >> .gitignore
```

### 3. Generate Strong Secrets
Use this command to generate secure secrets:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Render Environment Setup
In Render dashboard, set these environment variables:
- NODE_ENV=production
- PORT=5000
- JWT_SECRET=(generated secret)
- SESSION_SECRET=(generated secret)
- MONGODB_URI=(your MongoDB connection)
- CORS_ORIGIN=https://your-frontend-domain.onrender.com

### 5. Database Security
- Ensure MongoDB has IP whitelist configured
- Use strong database password
- Enable MongoDB authentication

## Additional Security Recommendations:

### Rate Limiting
Add to server.js:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### Input Validation
Install and use express-validator for request validation.

### Logging
Add proper logging for production monitoring.

## Deployment Steps:
1. Fix all security issues above
2. Remove .env.production from repository
3. Set environment variables in Render
4. Deploy backend first
5. Update frontend API URL
6. Deploy frontend
7. Test all functionality
8. Monitor logs for errors