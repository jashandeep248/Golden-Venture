# Render Deployment Guide

## Step 1: Setup MongoDB Atlas

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/golden-ventures`

## Step 2: Deploy Backend on Render

1. **Connect GitHub:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Connect your GitHub repository

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Select your repository
   - Configure:
     - **Name:** golden-ventures-backend
     - **Environment:** Node
     - **Build Command:** `cd Backend && npm install`
     - **Start Command:** `cd Backend && npm start`

3. **Set Environment Variables:**
   - `NODE_ENV`: production
   - `PORT`: 10000
   - `MONGODB_URI`: Your Atlas connection string
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: goldenventures2011@gmail.com
   - `SMTP_PASS`: Your Gmail app password
   - `COMPANY_EMAIL`: goldenventures2011@gmail.com
   - `CORS_ORIGIN`: https://your-frontend.onrender.com

4. **Deploy:** Click "Create Web Service"

## Step 3: Deploy Frontend on Render

1. **Create Static Site:**
   - Click "New +" → "Static Site"
   - Select same repository
   - Configure:
     - **Name:** golden-ventures-frontend
     - **Build Command:** `cd Frontend && npm install && npm run build`
     - **Publish Directory:** `Frontend/dist`

2. **Set Environment Variables:**
   - `VITE_API_URL`: https://your-backend.onrender.com/api

3. **Deploy:** Click "Create Static Site"

## Step 4: Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → App passwords
   - Generate for "Mail"
3. Use this password in backend `SMTP_PASS`

## Step 5: Update CORS

After frontend deploys, update backend `CORS_ORIGIN` with actual frontend URL.

## URLs

- **Backend:** https://golden-ventures-backend.onrender.com
- **Frontend:** https://golden-ventures-frontend.onrender.com
- **API Health:** https://golden-ventures-backend.onrender.com/api/health