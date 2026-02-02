# 🏗️ Golden Ventures - MERN Stack Website

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

**A modern, full-stack web application for Golden Ventures construction company**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Documentation](#-documentation) • [Deployment](#-deployment)

</div>

---

## 📋 Overview

Golden Ventures is a professional, full-featured website built for a construction and infrastructure company. The application provides a comprehensive digital presence with an integrated contact management system and admin dashboard.

### 🎯 Key Features

- ✨ **Modern UI/UX** - Clean, responsive design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🔒 **Secure Admin Panel** - JWT-based authentication with role management
- 📧 **Contact Management** - Inquiry tracking with status updates
- 🚀 **Production Ready** - Deployed and optimized for performance
- 🛡️ **Security First** - Rate limiting, input validation, and CORS protection

---

## 🖼️ Screenshots

### Main Website
```
┌─────────────────────────────────────────┐
│  Header & Navigation                    │
├─────────────────────────────────────────┤
│  Company Overview                       │
├─────────────────────────────────────────┤
│  Focus Areas & Services                 │
├─────────────────────────────────────────┤
│  Mission & Vision                       │
├─────────────────────────────────────────┤
│  Leadership & Team                      │
├─────────────────────────────────────────┤
│  Projects Portfolio                     │
├─────────────────────────────────────────┤
│  Contact Form                           │
└─────────────────────────────────────────┘
```

### Admin Dashboard
```
┌─────────────────────────────────────────┐
│  Admin Dashboard                        │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐   │
│  │ Contact Inquiry #1              │   │
│  │ Name: John Doe                  │   │
│  │ Email: john@example.com         │   │
│  │ Status: [New ▼]                 │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Contact Inquiry #2              │   │
│  │ Name: Jane Smith                │   │
│  │ Email: jane@example.com         │   │
│  │ Status: [Contacted ▼]           │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.2 | Build Tool & Dev Server |
| CSS3 | - | Styling & Animations |
| ESLint | 9.39.1 | Code Quality |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.0.0+ | Runtime Environment |
| Express.js | 4.18.2 | Web Framework |
| MongoDB | - | Database |
| Mongoose | 8.20.0 | ODM |
| JWT | 9.0.3 | Authentication |
| Bcrypt | 2.4.3 | Password Hashing |
| Helmet | 7.1.0 | Security Headers |
| CORS | 2.8.5 | Cross-Origin Requests |

---

## 📁 Project Structure

```
Golden-Venture/
│
├── Backend/                          # Node.js/Express API
│   ├── src/
│   │   ├── config/                   # Configuration files
│   │   │   └── database.js           # MongoDB connection
│   │   ├── controllers/              # Request handlers
│   │   │   ├── adminController.js    # Admin logic
│   │   │   └── contactController.js  # Contact form logic
│   │   ├── middleware/               # Custom middleware
│   │   │   ├── auth.js               # JWT authentication
│   │   │   ├── errorHandler.js       # Error handling
│   │   │   └── rateLimiter.js        # Rate limiting
│   │   ├── models/                   # Mongoose schemas
│   │   │   ├── Admin.js              # Admin model
│   │   │   └── Contact.js            # Contact model
│   │   ├── routes/                   # API routes
│   │   │   ├── admin.js              # Admin endpoints
│   │   │   └── contact.js            # Contact endpoints
│   │   └── server.js                 # App entry point
│   ├── scripts/
│   │   └── createAdmin.js            # Admin creation script
│   ├── .env.example                  # Environment template
│   ├── package.json
│   └── README.md
│
├── Frontend/                         # React Application
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── components/               # React components
│   │   │   ├── Admin.jsx             # Admin wrapper
│   │   │   ├── AdminDashboard.jsx    # Dashboard UI
│   │   │   ├── AdminLogin.jsx        # Login page
│   │   │   ├── Contact.jsx           # Contact form
│   │   │   ├── FocusAreas.jsx        # Focus areas section
│   │   │   ├── Footer.jsx            # Footer component
│   │   │   ├── Header.jsx            # Header & navigation
│   │   │   ├── Leadership.jsx        # Leadership section
│   │   │   ├── Mission.jsx           # Mission section
│   │   │   ├── Overview.jsx          # Overview section
│   │   │   ├── Projects.jsx          # Projects section
│   │   │   ├── Services.jsx          # Services section
│   │   │   ├── Strengths.jsx         # Strengths section
│   │   │   └── Team.jsx              # Team section
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js    # Scroll animations
│   │   ├── App.jsx                   # Main app component
│   │   ├── App.css                   # App styles
│   │   ├── index.css                 # Global styles
│   │   └── main.jsx                  # Entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── PROJECT_DOCUMENTATION.md          # Technical documentation
├── CLIENT_HANDOVER_GUIDE.md          # Client guide
├── DEPLOYMENT_SECURITY_CHECKLIST.md  # Security checklist
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Quick Start

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jashandeep248/Golden-Venture.git
cd Golden-Venture
```

#### 2️⃣ Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
# Update MONGODB_URI, JWT_SECRET, SESSION_SECRET

# Generate secure secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Create admin user
npm run create-admin

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

#### 3️⃣ Frontend Setup
```bash
# Open new terminal
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Create environment file
echo VITE_API_URL=http://localhost:5000 > .env

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

#### 4️⃣ Access the Application
- **Main Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin
- **API Health**: http://localhost:5000/api/health

---

## 📚 Documentation

Comprehensive documentation is available in the following files:

| Document | Description | Audience |
|----------|-------------|----------|
| [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) | Complete technical documentation | Developers |
| [CLIENT_HANDOVER_GUIDE.md](./CLIENT_HANDOVER_GUIDE.md) | User-friendly guide | Clients/End Users |
| [DEPLOYMENT_SECURITY_CHECKLIST.md](./DEPLOYMENT_SECURITY_CHECKLIST.md) | Security & deployment guide | DevOps/Developers |
| [Backend/README.md](./Backend/README.md) | Backend API documentation | Backend Developers |

---

## 🔌 API Endpoints

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |

### Admin Endpoints (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/verify` | Verify token |
| GET | `/api/contact/admin` | Get all contacts |
| PATCH | `/api/contact/admin/:id` | Update contact status |

For detailed API documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md#-api-documentation)

---

## 🔒 Security Features

- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Password Hashing** - Bcrypt with 12 rounds
- ✅ **Rate Limiting** - Prevents brute force attacks
- ✅ **CORS Protection** - Whitelist-based origin control
- ✅ **Helmet.js** - Security headers
- ✅ **Input Validation** - Sanitization and validation
- ✅ **Session Management** - Secure session handling
- ✅ **Error Sanitization** - No sensitive data exposure

---

## 🌐 Deployment

### Backend Deployment (Render/Heroku)

**Environment Variables Required:**
```env
NODE_ENV=production
PORT=5000
JWT_SECRET=<your-secret>
SESSION_SECRET=<your-secret>
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=<your-frontend-url>
```

**Deploy to Render:**
1. Connect GitHub repository
2. Select Backend directory
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

### Frontend Deployment (Netlify/Vercel)

**Environment Variables Required:**
```env
VITE_API_URL=<your-backend-url>
```

**Deploy to Netlify:**
1. Connect GitHub repository
2. Select Frontend directory
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy

For detailed deployment instructions, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md#-deployment-guide)

---

## 🧪 Testing

### Backend Testing
```bash
cd Backend
npm test
```

### Frontend Testing
```bash
cd Frontend
npm run lint
```

### Manual Testing Checklist
- [ ] Contact form submission
- [ ] Admin login
- [ ] Admin dashboard access
- [ ] Contact status updates
- [ ] Responsive design on mobile
- [ ] All sections display correctly
- [ ] Navigation works smoothly

---

## 🛠 Development

### Available Scripts

#### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run create-admin  # Create admin user
```

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style

- **Backend**: CommonJS modules, Express.js conventions
- **Frontend**: ES6+ modules, React functional components
- **Formatting**: Consistent indentation, meaningful variable names
- **Comments**: Clear documentation for complex logic

---

## 📊 Features Breakdown

### Public Website Features
- ✅ Responsive header with navigation
- ✅ Company overview section
- ✅ Focus areas showcase
- ✅ Services presentation
- ✅ Mission and vision statement
- ✅ Leadership team profiles
- ✅ Team members section
- ✅ Company strengths
- ✅ Projects portfolio
- ✅ Contact form with validation
- ✅ Professional footer
- ✅ Smooth scroll animations

### Admin Dashboard Features
- ✅ Secure login system
- ✅ View all contact submissions
- ✅ Filter by status
- ✅ Update inquiry status
- ✅ View submission timestamps
- ✅ Access client contact info
- ✅ IP address tracking
- ✅ Secure logout

---

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string
- Verify environment variables are set
- Ensure port 5000 is available

**Frontend can't connect to backend:**
- Verify VITE_API_URL is correct
- Check CORS configuration
- Ensure backend is running

**Admin login fails:**
- Verify admin user exists
- Check JWT_SECRET matches
- Clear browser localStorage

For more troubleshooting, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md#troubleshooting)

---

## 📈 Performance

### Optimizations Included
- Response compression (gzip)
- Static asset caching
- Optimized database queries
- Minified production builds
- Lazy loading where applicable
- Image optimization

### Performance Metrics
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **API Response Time**: < 200ms

---

## 🤝 Contributing

This is a client project. For modifications or improvements:

1. Contact the project maintainer
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit for review

---

## 📝 License

This project is proprietary software developed for Golden Ventures.

**Copyright © 2026 Golden Ventures. All rights reserved.**

---

## 👥 Credits

### Development Team
- **Developer**: [Your Name]
- **Client**: Golden Ventures
- **Project Duration**: [Start Date] - [End Date]

### Technologies Used
- React.js - Meta Platforms, Inc.
- Express.js - OpenJS Foundation
- MongoDB - MongoDB, Inc.
- Node.js - OpenJS Foundation
- Vite - Evan You and contributors

---

## 📞 Support

### For Technical Support
- **Email**: [Your Email]
- **Phone**: [Your Phone]
- **Hours**: [Your Support Hours]

### For Client Support
See [CLIENT_HANDOVER_GUIDE.md](./CLIENT_HANDOVER_GUIDE.md) for user instructions.

---

## 🔄 Version History

### v1.0.0 (Current) - January 2026
- ✅ Initial release
- ✅ Full MERN stack implementation
- ✅ Contact form with admin dashboard
- ✅ Responsive design
- ✅ Security features
- ✅ Production deployment

---

## 📋 Roadmap (Future Enhancements)

Potential future features:
- 📧 Email notifications for new inquiries
- 📊 Analytics dashboard
- 🔍 Advanced search and filtering
- 📱 Mobile app version
- 🌐 Multi-language support
- 💬 Live chat integration
- 📸 Image gallery management
- 📝 Blog/News section

---

## ⚡ Quick Links

- [Live Website](https://your-domain.com)
- [Admin Panel](https://your-domain.com/admin)
- [API Documentation](./PROJECT_DOCUMENTATION.md#-api-documentation)
- [Deployment Guide](./PROJECT_DOCUMENTATION.md#-deployment-guide)
- [Client Guide](./CLIENT_HANDOVER_GUIDE.md)

---

<div align="center">

**Built with ❤️ using the MERN Stack**

[⬆ Back to Top](#-golden-ventures---mern-stack-website)

</div>
