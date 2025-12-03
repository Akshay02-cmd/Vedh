# 📁 Services Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **service layer logic** for complex business operations, third-party integrations, and reusable functions in the Vedh application.

---

## 📂 Folder Structure

```
services/
└── README.md            # This file
```

---

## 🔧 Services Overview

Services separate business logic from controllers, making code more maintainable and testable.

**Common Use Cases:**
- External API integrations
- Email sending services
- File processing operations
- Complex data transformations
- Third-party service interactions
- Scheduled tasks and cron jobs

---

## 🚀 How Services Work

Services are called by controllers to perform specific operations:

```
Controller → Service → External API/Database → Service → Controller
```

**Example Service:**
```javascript
// emailService.js
const sendWelcomeEmail = async (userEmail, userName) => {
  // Email sending logic
  await mailTransporter.sendMail({
    to: userEmail,
    subject: 'Welcome to Vedh!',
    html: `<h1>Hello ${userName}</h1>`
  });
};

module.exports = { sendWelcomeEmail };
```

**Usage in Controller:**
```javascript
const { sendWelcomeEmail } = require('../services/emailService');

const register = async (req, res) => {
  const user = await User.create(req.body);
  await sendWelcomeEmail(user.email, user.name);
  res.status(201).json({ user });
};
```

---

## 📝 Best Practices

- Keep services focused on single responsibilities
- Make services testable and reusable
- Handle errors appropriately
- Document service functions clearly
- Use async/await for asynchronous operations

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/services`
