#!/bin/bash

echo "🚀 Preparing for Render Deployment..."

# Install dependencies
echo "📦 Installing Backend Dependencies..."
cd Backend && npm install

echo "📦 Installing Frontend Dependencies..."
cd ../Frontend && npm install

echo "🔨 Building Frontend..."
npm run build

echo "✅ Ready for Render Deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub"
echo "2. Connect repository to Render"
echo "3. Deploy backend as Web Service"
echo "4. Deploy frontend as Static Site"
echo "5. Set environment variables"