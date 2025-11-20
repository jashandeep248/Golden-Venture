# Golden Ventures Backend API

Secure Node.js/Express backend for the Golden Ventures construction company website.

## Features

- **Contact Form API** - Handles project inquiries with email notifications
- **MongoDB Integration** - Stores contact submissions with status tracking
- **Security** - Rate limiting, input validation, CORS, Helmet protection
- **Email Service** - Automated notifications and auto-replies
- **Admin Panel** - View and manage contact submissions
- **Error Handling** - Comprehensive error management
- **Production Ready** - Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`

4. Start development server:
```bash
npm run dev
```

## API Endpoints

### POST /api/contact
Submit contact form with project inquiry.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Project description..."
}
```

### GET /api/contact/admin
Get all contact submissions (admin only).

### PATCH /api/contact/admin/:id
Update contact status.

**Body:**
```json
{
  "status": "contacted"
}
```

### GET /api/health
Health check endpoint.

## Security Features

- Rate limiting (100 req/15min general, 5 req/hour for contact)
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Error message sanitization
- Request size limits

## Deployment

Set `NODE_ENV=production` and configure SMTP settings for email functionality.