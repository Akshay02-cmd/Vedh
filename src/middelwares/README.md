# 📁 Middlewares Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **middleware functions** that process requests before they reach controllers in the Vedh application.

---

## 📂 Folder Structure

```
middelwares/
├── auth.middelware.js              # Authentication middleware (JWT verification)
├── errorMiddelwares/
│   ├── Error-handle.Middelwares.js # Global error handler
│   └── Not-found.Middelwares.js    # 404 not found handler
└── README.md                        # This file
```

---

## 🔧 Middleware Overview

### **auth.middelware.js**
- Verifies JWT tokens from cookies
- Protects routes that require authentication
- Attaches user information to request object
- **Usage:** Applied to protected routes

### **errorMiddelwares/Error-handle.Middelwares.js**
- Global error handler for the application
- Catches all errors thrown in the app
- Formats error responses consistently
- Handles custom errors and unexpected errors
- Returns appropriate HTTP status codes

### **errorMiddelwares/Not-found.Middelwares.js**
- Catches requests to undefined routes
- Returns 404 status with friendly message

---

## 🚀 How Middlewares Work

Middlewares are functions that execute in sequence before the final route handler:

```
Request → Middleware 1 → Middleware 2 → Controller → Response
```

**Example Flow:**
```javascript
// 1. Check if route exists (Not-found middleware)
// 2. Verify authentication (auth middleware)
// 3. Execute controller logic
// 4. Catch any errors (Error-handle middleware)
```

**Authentication Example:**
```javascript
router.get('/protected', authMiddleware, protectedController);
```

**Error Handling Example:**
```javascript
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/middelwares`
