# 📁 Controllers Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **controller functions** that handle business logic and request-response operations for the Vedh application.

---

## 📂 Folder Structure

```
controllers/
├── auth.contorller.js       # Authentication controller (login, register)
├── file.controller.js       # File management controller
└── README.md                # This file
```

---

## 🔧 Files Overview

### **auth.contorller.js**
- Handles user authentication operations
- **Functions:**
  - `register`: Creates new user accounts with hashed passwords
  - `login`: Authenticates users and generates JWT tokens
- Sets HTTP-only cookies for secure session management
- Returns appropriate responses with status codes

### **file.controller.js**
- Manages file upload, retrieval, and manipulation
- Handles file-related API endpoints

---

## 🚀 How Controllers Work

Controllers receive requests from routes, process the business logic, interact with models/database, and send responses back to the client.

**Flow:**
```
Route → Controller → Model/Database → Controller → Response
```

**Example:**
```javascript
const login = async (req, res) => {
  const { email, password } = req.body;
  // Validate, authenticate, generate token
  res.status(200).json({ message: 'Login successful' });
};
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/controllers`
