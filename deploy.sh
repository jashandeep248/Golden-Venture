#!/bin/bash

echo "🚀 Deploying Golden Ventures Website..."

# Build and start services
docker-compose down
docker-compose build --no-cache
docker-compose up -d

echo "✅ Deployment complete!"
echo "🌐 Frontend: http://localhost"
echo "🔧 Backend: http://localhost:5000"
echo "📊 MongoDB: localhost:27017"

# Show running containers
docker-compose ps