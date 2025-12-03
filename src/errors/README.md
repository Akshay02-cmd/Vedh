# 📁 Errors Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **custom error classes** for consistent error handling throughout the Vedh application.

---

## 📂 Folder Structure

```
errors/
├── BadRequest.errors.js          # 400 Bad Request error
├── CustomeApi.errors.js          # Base custom API error class
├── Forbidden.errors.js           # 403 Forbidden error
├── index.js                      # Exports all error classes
├── InternalServer.errors.js      # 500 Internal Server error
├── NotFound.errors.js            # 404 Not Found error
├── Unauthenticate.errors.js      # 401 Unauthorized error
└── README.md                     # This file
```

---

## 🔧 Error Classes Overview

### **CustomeApi.errors.js**
- Base class for all custom errors
- Extends JavaScript's native `Error` class
- All other error classes inherit from this

### **BadRequest.errors.js** (400)
- Used for invalid request data
- Example: Missing required fields, invalid format

### **Unauthenticate.errors.js** (401)
- Used when authentication fails
- Example: Invalid credentials, missing token

### **Forbidden.errors.js** (403)
- Used when user lacks permission
- Example: Accessing admin-only resources

### **NotFound.errors.js** (404)
- Used when requested resource doesn't exist
- Example: User not found, route not found

### **InternalServer.errors.js** (500)
- Used for unexpected server errors
- Example: Database connection failure

### **index.js**
- Exports all error classes for easy importing

---

## 🚀 Usage

Import and throw custom errors in controllers:

```javascript
const { BadRequestError, UnauthenticatedError } = require('../errors');

if (!email || !password) {
  throw new BadRequestError('Please provide email and password');
}

if (!user) {
  throw new UnauthenticatedError('Invalid credentials');
}
```

Error middleware catches these and sends appropriate responses.

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/errors`
