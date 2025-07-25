# 🚗 FLY-RIDE - Online Ride Booking Platform

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-Real--time-orange.svg)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue.svg)](https://tailwindcss.com/)

A modern, full-stack ride booking platform similar to Uber, built with React, Node.js, and real-time communication capabilities. FLY-RIDE connects passengers with drivers for seamless transportation services.

**🔮 Future Enhancement**: Currently a monolith, planned to be restructured into microservices architecture with RabbitMQ for asynchronous communication.

## 🌟 Features

### For Passengers (Users)

- 👤 **User Authentication** - Secure signup/login system
- 🗺️ **Interactive Maps** - Real-time location tracking with Leaflet.js
- 🚗 **Ride Booking** - Easy ride booking with fare calculation
- 📍 **Location Search** - Smart location search and autocomplete
- ⏱️ **Real-time Tracking** - Live tracking of driver location
- ⭐ **Rating System** - Rate your ride experience
- 💳 **Ride History** - View past rides and receipts

### For Drivers (Captains)

- 🚖 **Driver Dashboard** - Comprehensive driver interface
- 📱 **Ride Requests** - Accept/decline incoming ride requests
- 🗺️ **Navigation** - Built-in navigation system
- 💰 **Earnings Tracking** - Monitor daily and monthly earnings
- 📊 **Performance Analytics** - Driver performance metrics
- 🔔 **Real-time Notifications** - Instant ride request alerts

### Technical Features

- 🔄 **Real-time Communication** - Socket.io for live updates
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📱 **Responsive Design** - Mobile-first responsive UI
- 🚀 **Fast Performance** - Optimized with Vite build tool
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS
- 📡 **RESTful API** - Well-structured backend API

## 🛠️ Tech Stack

### Frontend

- **React 19.0.0** - Modern React with latest features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Leaflet.js** - Interactive maps
- **Socket.io Client** - Real-time communication
- **GSAP** - Advanced animations
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **RabbitMQ** _(Planned)_ - Message broker for microservices communication

## 🏗️ Architecture Evolution

### Current Architecture (Monolith)

The application currently runs as a single backend service handling all operations.

### Planned Microservices Architecture 🚀

The system will be decomposed into three independent services:

#### 1. **User Service** 🧑‍💼

- User authentication and profile management
- User registration and login
- Profile updates and preferences
- User ride history

#### 2. **Captain Service** 🚖

- Captain authentication and profile management
- Vehicle registration and management
- Captain availability status
- Earnings and performance tracking

#### 3. **Ride Service** 🛣️

- Ride creation and management
- Real-time ride tracking
- Fare calculation
- Ride status updates
- Driver-passenger matching

#### 4. **RabbitMQ Message Broker** 📨

- **Event-driven Communication**: Services communicate through events
- **Asynchronous Processing**: Non-blocking operations between services
- **Message Queues**:
  - `user.events` - User-related events
  - `captain.events` - Captain-related events
  - `ride.events` - Ride lifecycle events
  - `notification.events` - Real-time notifications

### Communication Patterns

```
User Service ────→ RabbitMQ ────→ Ride Service
     ↑                              ↓
     └─────← RabbitMQ ←─────── Captain Service
```

**Event Examples**:

- `user.registered` → Trigger welcome notifications
- `ride.created` → Notify nearby captains
- `ride.accepted` → Update user and ride status
- `ride.completed` → Update earnings and history

## 📁 Project Structure

### Current Structure (Monolith)

```
FLY-RIDE/
├── BACKEND/
│   ├── Controllers/          # Business logic controllers
│   │   ├── Captain.controller.js
│   │   ├── User.controllers.js
│   │   ├── Ride.controller.js
│   │   └── map.controller.js
│   ├── Models/              # Database models
│   │   ├── User.model.js
│   │   ├── captain.model.js
│   │   ├── ride.model.js
│   │   └── blacklistToken.model.js
│   ├── Routes/              # API routes
│   │   ├── User.routes.js
│   │   ├── Captain.routes.js
│   │   ├── ride.router.js
│   │   └── maps.routes.js
│   ├── Services/            # Service layer
│   │   ├── User.serves.js
│   │   ├── captain.serves.js
│   │   ├── ride.serves.js
│   │   ├── maps.serves.js
│   │   └── osrmService.js
│   ├── middlewares/         # Custom middlewares
│   │   └── auth.middleware.js
│   ├── DB/                  # Database configuration
│   │   └── db.js
│   ├── app.js              # Express app configuration
│   ├── Server.js           # Server entry point
│   └── Socket.js           # Socket.io configuration
├── FRONTEND/
│   ├── src/
│   │   ├── Pages/          # React pages/screens
│   │   │   ├── Home.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   ├── CaptainLogin.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── Riding.jsx
│   │   │   └── ...
│   │   ├── components/     # Reusable components
│   │   │   ├── LocationSearchPanel.jsx
│   │   │   ├── RidePopup.jsx
│   │   │   ├── StarRating.jsx
│   │   │   └── ...
│   │   ├── context/       # React Context providers
│   │   │   ├── Usercontext.jsx
│   │   │   ├── Captaincontext.jsx
│   │   │   └── Socketcontext.jsx
│   │   ├── assets/        # Static assets
│   │   └── utils/         # Utility functions
│   ├── public/            # Public assets
│   └── package.json       # Dependencies
└── README.md
```

### Planned Microservices Structure 🎯

```
FLY-RIDE/
├── SERVICES/
│   ├── USER-SERVICE/        # Independent User Service
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Routes/
│   │   ├── Services/
│   │   ├── middlewares/
│   │   ├── Events/          # RabbitMQ event handlers
│   │   ├── DB/
│   │   └── server.js
│   ├── CAPTAIN-SERVICE/     # Independent Captain Service
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Routes/
│   │   ├── Services/
│   │   ├── middlewares/
│   │   ├── Events/          # RabbitMQ event handlers
│   │   ├── DB/
│   │   └── server.js
│   ├── RIDE-SERVICE/        # Independent Ride Service
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Routes/
│   │   ├── Services/
│   │   ├── middlewares/
│   │   ├── Events/          # RabbitMQ event handlers
│   │   ├── DB/
│   │   └── server.js
│   └── SHARED/              # Shared utilities
│       ├── messageQueue/    # RabbitMQ configuration
│       ├── middlewares/     # Common middlewares
│       └── utils/           # Shared utilities
├── API-GATEWAY/            # Request routing and authentication
├── FRONTEND/
│   ├── src/
│   │   ├── Pages/          # React pages/screens
│   │   │   ├── Home.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   ├── CaptainLogin.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── Riding.jsx
│   │   │   └── ...
│   │   ├── components/     # Reusable components
│   │   │   ├── LocationSearchPanel.jsx
│   │   │   ├── RidePopup.jsx
│   │   │   ├── StarRating.jsx
│   │   │   └── ...
│   │   ├── context/       # React Context providers
│   │   │   ├── Usercontext.jsx
│   │   │   ├── Captaincontext.jsx
│   │   │   └── Socketcontext.jsx
│   │   ├── assets/        # Static assets
│   │   └── utils/         # Utility functions
│   ├── public/            # Public assets
│   └── package.json       # Dependencies
└── README.md
```

### Benefits of Microservices Architecture

- **🔧 Scalability** - Scale individual services based on demand
- **🛠️ Maintainability** - Easier to maintain and update individual services
- **🔄 Fault Isolation** - Service failures don't bring down the entire system
- **⚡ Performance** - Optimized performance per service
- **👥 Team Independence** - Different teams can work on different services
- **🚀 Deployment** - Independent deployment of services

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git
- RabbitMQ _(Planned)_

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fly-ride.git
cd fly-ride
```

### 2. Backend Setup

```bash
cd BACKEND
npm install
```

### .env

### 3. Frontend Setup

```bash
cd ../FRONTEND
npm install
```

### 4. Start the Application

#### Start Backend Server

```bash
cd BACKEND
npm run dev
```

#### Start Frontend Development Server

```bash
cd FRONTEND
npm run dev
```

The application will be available at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

### For Passengers

1. **Sign Up/Login** - Create an account or login
2. **Set Pickup Location** - Choose your pickup point
3. **Set Destination** - Enter where you want to go
4. **Book Ride** - Confirm your ride details
5. **Track Driver** - Monitor driver's real-time location
6. **Complete Ride** - Rate your experience

### For Drivers

1. **Register as Captain** - Complete driver verification
2. **Go Online** - Start accepting ride requests
3. **Accept Rides** - Review and accept ride requests
4. **Navigate to Pickup** - Use built-in navigation
5. **Complete Trip** - Finish the ride and collect payment

### User Routes

- `POST /users/register` - User registration
- `POST /users/login` - User login
- `GET /users/profile` - Get user profile
- `POST /users/logout` - User logout

### Captain Routes

- `POST /captains/register` - Captain registration
- `POST /captains/login` - Captain login
- `GET /captains/profile` - Get captain profile

### Ride Routes

- `POST /rides/create` - Create new ride
- `GET /rides/:id` - Get ride details
- `PATCH /rides/:id/confirm` - Confirm ride
- `PATCH /rides/:id/start` - Start ride
- `PATCH /rides/:id/end` - End ride

### Maps Routes

- `GET /maps/get-coordinates` - Get location coordinates
- `GET /maps/get-distance-time` - Calculate distance and time
- `GET /maps/get-suggestions` - Location suggestions

## 🌐 Real-time Features

The application uses Socket.io for real-time communication:

- **Live Location Updates** - Real-time driver location tracking
- **Ride Status Updates** - Instant ride status notifications
- **Driver Matching** - Real-time driver assignment
- **In-app Messaging** - Communication between driver and passenger

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern Interface** - Clean and intuitive user interface
- **Interactive Maps** - Smooth map interactions with Leaflet.js
- **Smooth Animations** - Enhanced user experience with GSAP
- **Loading States** - Proper loading indicators throughout the app

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Input Validation** - Express-validator for data validation
- **CORS Protection** - Configured cross-origin resource sharing
- **Token Blacklisting** - Secure logout implementation

## 📊 Database Schema

### Current Database (Shared)

Single MongoDB instance serving all entities.

### Planned Database Structure (Service-specific)

#### User Service Database

- User authentication and profile data
- User preferences and settings
- Ride history references

#### Captain Service Database

- Captain profiles and credentials
- Vehicle information
- Availability and location data
- Earnings and performance metrics

#### Ride Service Database

- Active and completed rides
- Route and fare information
- Real-time tracking data
- User and captain references

#### Benefits of Database Separation

- **Data Isolation** - Each service owns its data
- **Optimized Queries** - Service-specific database optimization
- **Independent Scaling** - Scale databases based on service needs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

- **Your Name** - _Initial work_ -(https://github.com/Arojit45)

## 🙏 Acknowledgments

- React team for the amazing framework
- Socket.io for real-time communication
- Leaflet.js for interactive maps
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution

⭐ **Star this repository if you found it helpful!**
