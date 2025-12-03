# 📁 Config Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **configuration files** for the Vedh backend application.

---

## 📂 Folder Structure

```
config/
├── db.config.js         # Database connection configuration (MongoDB)
└── README.md            # This file
```

---

## 🔧 Files Overview

### **db.config.js**
- Manages MongoDB connection using Mongoose
- Connects to the database using `MONGO_URI` from environment variables
- Handles connection success and error events

---

## 🚀 Usage

The configuration files are imported in the main server file (`server.js`) to initialize database connections and other settings before the server starts.

**Example:**
```javascript
const connectDB = require('./config/db.config');
connectDB();
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/config`
