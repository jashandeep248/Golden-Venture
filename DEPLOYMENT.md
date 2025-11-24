# Golden Ventures Deployment Guide

## Quick Deploy (Docker)

1. **Prerequisites:**
   - Docker & Docker Compose installed
   - Configure `Backend/.env` with your credentials

2. **Deploy:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Access:**
   - Website: http://localhost
   - API: http://localhost:5000

## Production Deployment Options

### Option 1: VPS/Cloud Server (Recommended)

1. **Setup MongoDB Atlas:**
   - Create account at mongodb.com/atlas
   - Create cluster and get connection string
   - Update `MONGODB_URI` in `.env.production`

2. **Configure Email:**
   - Enable 2FA on Gmail
   - Generate App Password
   - Update `SMTP_USER` and `SMTP_PASS`

3. **Deploy to VPS:**
   ```bash
   # On your server
   git clone <your-repo>
   cd GoldenVentures
   cp Backend/.env.production Backend/.env
   # Edit Backend/.env with real values
   docker-compose up -d
   ```

### Option 2: Vercel (Serverless)

1. **Setup:**
   - Install Vercel CLI: `npm i -g vercel`
   - Setup MongoDB Atlas (required)

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Environment Variables:**
   Set in Vercel dashboard:
   - `MONGODB_URI`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `COMPANY_EMAIL`

### Option 3: Railway/Render

1. **Connect GitHub repo**
2. **Set environment variables**
3. **Deploy automatically**

## SSL Certificate

For production, use:
- **Cloudflare** (Free SSL + CDN)
- **Let's Encrypt** (Free SSL)
- **Load balancer SSL** (Cloud providers)

## Monitoring

- Health check: `GET /api/health`
- Logs: `docker-compose logs -f`
- Database: MongoDB Compass or Atlas dashboard