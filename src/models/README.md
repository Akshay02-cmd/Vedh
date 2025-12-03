# 📁 Models Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **Mongoose models** that define the data structure and interact with the MongoDB database for the Vedh application.

---

## 📂 Folder Structure

```
models/
├── user.models.js       # User model (schema, methods, hooks)
└── README.md            # This file
```

---

## 🔧 Models Overview

### **user.models.js**
- Defines the User schema for MongoDB
- **Fields:**
  - `name`: User's full name
  - `email`: Unique email address
  - `password`: Hashed password
  - `createdAt`: Account creation timestamp
  - `updatedAt`: Last update timestamp

- **Pre-save Hook:**
  - Automatically hashes passwords before saving using bcrypt
  - Only hashes if password is modified

- **Instance Methods:**
  - `createJWT()`: Generates JWT token for authentication
  - `comparePassword()`: Compares plain text password with hashed password

---

## 🚀 How Models Work

Models are used by controllers to interact with the database:

```javascript
const User = require('../models/user.models');

// Create new user
const user = await User.create({ name, email, password });

// Find user
const user = await User.findOne({ email });

// Generate JWT
const token = user.createJWT();

// Compare password
const isMatch = await user.comparePassword(password);
```

**Schema Example:**
```javascript
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
```

---

## 🔐 Security Features

- Passwords are automatically hashed using bcrypt (10 salt rounds)
- JWT tokens include user ID and name
- Sensitive data is never exposed in responses

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/models`
