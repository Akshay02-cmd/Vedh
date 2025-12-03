# 📁 Script Folder

<p align="center">
  <img src="../assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **client-side JavaScript files** that handle frontend functionality for the Vedh application.

---

## 📂 Folder Structure

```
script/
├── login.js             # Login page functionality
├── Register.js          # Registration page functionality
├── dashboard.js         # Dashboard interactivity
└── README.md            # This file
```

---

## 🔧 Files Overview

### **login.js**
- Handles login form submission
- Validates user input (email, password)
- Makes POST request to `/api/v1/auth/login`
- Uses axios for HTTP requests
- Redirects to dashboard on success

### **Register.js**
- Handles registration form submission
- Validates user input (name, email, password)
- Makes POST request to `/api/v1/auth/register`
- Creates new user account
- Redirects to dashboard after successful registration

### **dashboard.js**
- Provides dashboard interactivity
- Handles sidebar toggle for mobile
- Manages logout functionality
- Clears authentication cookies on logout

---

## 🔐 Authentication Flow

1. **Registration:** User fills form → Register.js → POST `/api/v1/auth/register` → Cookie set → Redirect
2. **Login:** User fills form → login.js → POST `/api/v1/auth/login` → Cookie set → Redirect
3. **Logout:** User clicks logout → dashboard.js → Clear cookies → Redirect

---

## 📦 Dependencies

- **axios** - HTTP client (loaded via CDN)
- Vanilla JavaScript (ES6+)

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/public/script`