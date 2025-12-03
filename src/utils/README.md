# 📁 Utils Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **utility functions and helper modules** used throughout the Vedh application.

---

## 📂 Folder Structure

```
utils/
├── FetchFile.js         # File fetching utility
└── README.md            # This file
```

---

## 🔧 Utilities Overview

### **FetchFile.js**
- Helper function for file operations
- Handles file retrieval and processing
- Used by file controller for file management

---

## 🚀 Common Utility Functions

Utilities are reusable functions that solve common problems:

**Examples:**
- Data validation and sanitization
- Date/time formatting
- String manipulation
- File operations
- API response formatting
- Token generation
- Data encryption/decryption

---

## 📝 Best Practices

- Keep utilities pure and side-effect free
- Make functions generic and reusable
- Document function parameters and return values
- Write unit tests for utility functions
- Export individual functions for selective imports

**Example Structure:**
```javascript
// utils/formatters.js
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

module.exports = { formatDate, formatCurrency };
```

**Usage:**
```javascript
const { formatDate } = require('../utils/formatters');
const formattedDate = formatDate(user.createdAt);
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/utils`
