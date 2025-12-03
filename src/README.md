# 📁 Source (Backend) Folder

<p align="center">
  <img src="../public/assets/logo.png" width="120" alt="Vedh Logo">
</p>

<h1 align="center">Vedh Backend — Source Code</h1>

## 📌 Purpose

This folder contains the **complete backend source code** for the Vedh application, built with Node.js, Express.js, and MongoDB.

---

## 📂 Folder Structure

```
src/
├── config/              # Configuration files
│   └── db.config.js    # MongoDB connection setup
├── controllers/         # Request handlers & business logic
│   ├── auth.controller.js
│   └── file.controller.js
├── errors/              # Custom error classes
│   ├── BadRequest.errors.js
│   ├── CustomeApi.errors.js
│   ├── Forbidden.errors.js
│   ├── InternalServer.errors.js
│   ├── NotFound.errors.js
│   ├── Unauthenticate.errors.js
│   └── index.js
├── middelwares/         # Express middlewares
│   ├── auth.middelware.js
│   └── errorMiddelwares/
│       ├── Error-handle.Middelwares.js
│       └── Not-found.Middelwares.js
├── models/              # Mongoose schemas
│   └── user.models.js
├── routes/              # API route definitions
│   ├── auth.routes.js
│   └── Files.routes.js
├── services/            # Business logic layer (reserved)
├── styles/              # Tailwind CSS source
│   └── input.css
├── utils/               # Utility functions
│   └── FetchFile.js
├── validators/          # Input validation (reserved)
├── app.js               # Express app configuration
├── server.js            # Server entry point
└── README.md            # This file
```

---

## 🚀 Architecture Overview

### **MVC Pattern**
The backend follows a clean **Model-View-Controller** architecture:

```
Request → Routes → Middleware → Controller → Model → Database
                                    ↓
                                Response
```

### **Flow Example (User Login)**
1. **Route** (`auth.routes.js`) receives POST to `/api/v1/auth/login`
2. **Middleware** (optional) validates input
3. **Controller** (`auth.controller.js`) processes login logic
4. **Model** (`user.models.js`) queries MongoDB
5. **Response** sent back with JWT token

---

## 🔧 Key Components

### **Configuration** (`config/`)
- Database connection management
- Environment variable setup
- External service configurations

### **Controllers** (`controllers/`)
- Handle HTTP requests and responses
- Contain business logic
- **auth.controller.js**: Login, registration
- **file.controller.js**: Serve static HTML files

### **Models** (`models/`)
- Define MongoDB schemas using Mongoose
- **user.models.js**: User schema with password hashing and JWT methods

### **Middlewares** (`middelwares/`)
- **auth.middleware**: JWT token verification
- **errorMiddlewares**: Global error handling and 404 responses

### **Routes** (`routes/`)
- Define API endpoints
- Map URLs to controller functions
- **auth.routes.js**: `/api/v1/auth/*`
- **Files.routes.js**: Serve HTML pages

### **Errors** (`errors/`)
- Custom error classes for consistent error handling
- HTTP status codes (400, 401, 403, 404, 500)

---

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Static Pages
- `GET /` - Home page
- `GET /login` - Login page
- `GET /register` - Registration page
- `GET /dashboard` - Dashboard (protected)
- `GET /profile` - Profile page

---

## 🔐 Security Features

- ✅ **Password Hashing** - bcrypt with 10 salt rounds
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **HTTP-Only Cookies** - Prevents XSS attacks
- ✅ **Helmet.js** - Security headers
- ✅ **CORS** - Cross-Origin Resource Sharing
- ✅ **Rate Limiting** - Prevents brute force attacks
- ✅ **Input Validation** - Mongoose schema validation

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Express.js 5.1.0** | Web framework |
| **MongoDB** | Database |
| **Mongoose 9.0.0** | ODM for MongoDB |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **helmet** | Security middleware |
| **cors** | CORS handling |
| **express-rate-limit** | Rate limiting |
| **cookie-parser** | Cookie parsing |

---

## 📝 Environment Variables

Required variables (see `.env.example`):
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vedh
JWT_SECRET=your_secret_key
JWT_LIFETIME=30d
NODE_ENV=development
```

---

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running
   mongod
   ```

4. **Run Development Server**
   ```bash
   npm start
   ```

5. **Access Application**
   ```
   http://localhost:5000
   ```

---

## 📦 Build Commands

```bash
# Start development server with nodemon
npm start

# Build Tailwind CSS
npm run build:css

# Watch Tailwind CSS changes
npm run watch:css
```

---

## 🧪 Testing

```bash
# Run tests (to be implemented)
npm test
```

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src` (Backend Source Code)