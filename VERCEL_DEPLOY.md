# Vercel Deployment Guide

## Step 1: Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account and cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/golden-ventures`

## Step 2: Deploy Backend

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy Backend:**
   ```bash
   cd Backend
   vercel --prod
   ```

3. **Set Environment Variables in Vercel Dashboard:**
   - `MONGODB_URI`: Your Atlas connection string
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: goldenventures2011@gmail.com
   - `SMTP_PASS`: Your Gmail app password
   - `COMPANY_EMAIL`: goldenventures2011@gmail.com
   - `CORS_ORIGIN`: https://your-frontend-domain.vercel.app

4. **Note your backend URL:** `https://your-backend.vercel.app`

## Step 3: Deploy Frontend

1. **Update Frontend Environment:**
   ```bash
   cd ../Frontend
   # Edit .env.production with your backend URL
   ```

2. **Deploy Frontend:**
   ```bash
   vercel --prod
   ```

## Step 4: Gmail Setup

1. Enable 2-Factor Authentication on Gmail
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this password in `SMTP_PASS`

## Step 5: Test

- Visit your frontend URL
- Submit contact form
- Check email delivery

## Commands Summary

```bash
# Deploy backend
cd Backend && vercel --prod

# Deploy frontend  
cd Frontend && vercel --prod

# Check deployments
vercel ls
```