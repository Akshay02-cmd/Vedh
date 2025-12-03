# 📁 Routes Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **route definitions** that map HTTP endpoints to controller functions in the Vedh application.

---

## 📂 Folder Structure

```
routes/
├── auth.routes.js       # Authentication routes (login, register)
├── Files.routes.js      # File management routes
└── README.md            # This file
```

---

## 🔧 Routes Overview

### **auth.routes.js**
- Handles authentication-related endpoints
- **Routes:**
  - `POST /api/v1/auth/register` - User registration
  - `POST /api/v1/auth/login` - User login
- Controllers: `register`, `login` from `auth.controller.js`

### **Files.routes.js**
- Handles file upload and management endpoints
- Manages file-related operations

---

## 🚀 How Routes Work

Routes define the API endpoints and connect them to controller functions:

```
HTTP Request → Route → Controller → Response
```

**Example Route Definition:**
```javascript
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
```

**Usage in Server:**
```javascript
const authRoutes = require('./routes/auth.routes');
app.use('/api/v1/auth', authRoutes);
```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/register` | Create new user account | No |
| POST | `/api/v1/auth/login` | Login with credentials | No |

### Files
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/files/upload` | Upload file | Yes |
| GET | `/api/v1/files/:id` | Get file by ID | Yes |

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/routes`
