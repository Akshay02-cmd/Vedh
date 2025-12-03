# 📁 Validators Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **validation middleware and schemas** for request data validation in the Vedh application.

---

## 📂 Folder Structure

```
validators/
└── README.md            # This file
```

---

## 🔧 Validators Overview

Validators ensure that incoming request data meets required formats and constraints before processing.

**Common Validation Types:**
- Email format validation
- Password strength validation
- Required field validation
- Data type validation
- Length constraints
- Custom business rule validation

---

## 🚀 How Validators Work

Validators are middleware that run before controllers:

```
Request → Validator Middleware → Controller → Response
```

**Example Validator:**
```javascript
// validators/authValidator.js
const { body, validationResult } = require('express-validator');

const registerValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { registerValidator };
```

**Usage in Routes:**
```javascript
const { registerValidator } = require('../validators/authValidator');
router.post('/register', registerValidator, register);
```

---

## 📝 Common Validation Libraries

- **express-validator** - Popular validation middleware
- **joi** - Schema-based validation
- **yup** - JavaScript schema validation
- **validator.js** - String validation library

---

## ✅ Benefits

- Prevents invalid data from reaching the database
- Provides clear error messages to users
- Reduces controller complexity
- Ensures data consistency
- Improves security

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/validators`
