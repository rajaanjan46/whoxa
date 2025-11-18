# WHOXA 🚀

> A modern, feature-rich real-time communication platform built with React, TypeScript, and Firebase

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)

## 📱 Overview

WHOXA is a comprehensive real-time communication platform that brings together the best features of modern messaging applications. Built with cutting-edge technologies, it offers seamless messaging, high-quality video calls, group conversations, status updates, and much more.

## ✨ Key Features

### 💬 **Real-time Messaging**
- Instant messaging with real-time delivery
- Message reactions and emoji support
- Message forwarding and replying
- Starred messages for easy access
- Message search functionality
- File and media sharing (images, videos, documents)

### 📞 **Video Calling**
- High-quality peer-to-peer video calls
- Group video calls support
- Screen sharing capabilities
- Call recording (planned)
- Call history tracking

### 👥 **Group Management**
- Create and manage group chats
- Group admin controls
- Add/remove members functionality
- Group settings and permissions
- Public group discovery

### 📸 **Status Updates**
- WhatsApp-style status stories
- View status updates from contacts
- Story replies and interactions
- Privacy controls for status visibility

### 🗺️ **Location & Sharing**
- Real-time location sharing
- Interactive maps integration
- Contact sharing functionality
- File compression and optimization

### 🎯 **Interactive Features**
- Polls and voting system
- Message pinning
- User blocking and reporting
- Multi-language support
- Dark/light theme toggle

### 🔒 **Security & Privacy**
- Firebase Authentication
- Secure message encryption
- User privacy controls
- Admin moderation tools

## 🏗️ Architecture

```
whoxa/
├── whoxa_frontend/     # React web application
├── whoxa_backend/      # Backend API services
└── whoxa_admin/        # Admin dashboard
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Socket.IO** - Real-time communication
- **Firebase** - Authentication and backend services

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time WebSocket communication
- **Firebase Admin** - Backend services

### Key Libraries
- **PeerJS** - Peer-to-peer connections for video calls
- **mediasoup-client** - WebRTC media server
- **Google Maps API** - Location services
- **FFmpeg** - Video processing
- **React Query** - Server state management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase project setup
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bouzayenilyes/whoxa.git
   cd whoxa
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd whoxa_frontend
   npm install

   # Backend
   cd ../whoxa_backend
   npm install

   # Admin
   cd ../whoxa_admin
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in each directory:

   **Frontend (.env)**
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1 - Frontend
   cd whoxa_frontend && npm run dev

   # Terminal 2 - Backend
   cd whoxa_backend && npm start

   # Terminal 3 - Admin
   cd whoxa_admin && npm run dev
   ```

## 📦 Project Structure

```
whoxa_frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Main application pages
│   │   ├── Home/           # Main chat interface
│   │   ├── Register/       # Authentication pages
│   │   └── ...
│   ├── store/              # Redux state management
│   │   ├── api/            # API calls and queries
│   │   └── slices/         # Redux slices
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── hooks/              # Custom React hooks
│   └── socket/             # WebSocket handlers
├── public/                 # Static assets
└── ...
```

## 🎯 Core Components

### Message Management
- Real-time message delivery via WebSocket
- Message status indicators (sent, delivered, read)
- File upload and media handling
- Message encryption and security

### Video Calling System
- Peer-to-peer connection setup
- Media stream management
- Call controls (mute, camera, end call)
- Multi-participant support

### User Interface
- Responsive design for all screen sizes
- Dark/light theme support
- Multi-language localization
- Accessibility features

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email, Google, Phone)
3. Configure Firestore Database
4. Set up Storage buckets
5. Enable Cloud Functions (optional)

### Google Maps Integration
1. Get a Google Maps API key
2. Enable Maps JavaScript API
3. Enable Places API
4. Configure billing account

## 📱 Mobile Responsiveness

WHOXA is fully responsive and works seamlessly across:
- 📱 Mobile devices (iOS/Android)
- 💻 Desktop computers
- 📟 Tablets
- 🌐 Web browsers

## 🔐 Security Features

- **End-to-end encryption** for messages (planned)
- **Firebase Security Rules** for data protection
- **User authentication** with multiple providers
- **Input validation** and sanitization
- **Rate limiting** for API endpoints
- **Admin moderation** tools

## 🌍 Internationalization

Currently supports:
- 🇬🇧 English
- 🇫🇷 French
- 🇸🇦 Arabic
- 🇩🇪 German
- And more languages coming soon...

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd whoxa_frontend
npm run build
# Deploy the dist folder
```

### Backend (Railway/Heroku)
```bash
cd whoxa_backend
npm run build
# Deploy using your preferred platform
```

## 🧪 Testing

```bash
# Run frontend tests
cd whoxa_frontend
npm test

# Run backend tests
cd whoxa_backend
npm test
```

## 📊 Performance

- ⚡ **Fast loading** with Vite bundling
- 🔄 **Real-time updates** via WebSocket
- 📱 **Optimized for mobile** with lazy loading
- 🎨 **Smooth animations** with React Spring
- 📦 **Code splitting** for optimal bundle sizes

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bouzayen Ilyes**
- GitHub: [@bouzayenilyes](https://github.com/bouzayenilyes)
- Email: bouzayenilyes@example.com

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Firebase](https://firebase.google.com/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling system
- [Socket.IO](https://socket.io/) for real-time communication
- All contributors who helped make this project possible

## 📞 Support

If you have any questions or need help, feel free to:

- 📧 Email: support@whoxa.com
- 💬 Discord: [Join our community](https://discord.gg/whoxa)
- 🐛 Issues: [GitHub Issues](https://github.com/bouzayenilyes/whoxa/issues)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Real-time messaging
- ✅ Video calling
- ✅ Group chats
- ✅ Status updates

### Phase 2 (Planned)
- 🔲 Voice messages
- 🔲 Message encryption
- 🔲 Desktop application
- 🔲 Bot integration

### Phase 3 (Future)
- 🔲 Video/Audio filters
- 🔲 AI-powered features
- 🔲 Cloud storage
- 🔲 Enterprise features

---

<div align="center">

**Made with ❤️ by Bouzayen Ilyes**

[⭐ Star this repo](https://github.com/bouzayenilyes/whoxa) if you find it useful!

</div>