# 📁 Public Folder

<p align="center">
  <img src="./assets/logo.png" width="120" alt="Vedh Logo">
</p>

<h1 align="center">Vedh — Public Frontend</h1>

## 📌 Purpose

This folder contains all **static frontend files** served to users in the Vedh application including HTML pages, CSS, JavaScript, and assets.

---

## 📂 Folder Structure

```
public/
├── assets/                  # Images, logos, icons
│   ├── logo.png
│   ├── VedhLogo16.9.png
│   └── README.md
├── css/
│   ├── output.css          # Compiled Tailwind CSS (production)
│   └── README.md
├── dashboard/
│   └── README.md
├── script/
│   ├── login.js            # Login page functionality
│   ├── Register.js         # Registration page functionality
│   ├── dashboard.js        # Dashboard interactivity
│   └── README.md
├── index.html              # Landing/home page
├── login.html              # User login page
├── register.html           # User registration page
├── dashboard.html          # Main dashboard after login
├── profile.html            # User profile/portfolio page
└── README.md               # This file
```

---

## 🌐 Pages Overview

### **index.html**
- Landing page of the application
- First page users see when visiting Vedh

### **login.html**
- User authentication page
- Email and password form
- Redirects to dashboard on successful login

### **register.html**
- New user registration page
- Collects name, email, and password
- Creates account and redirects to dashboard

### **dashboard.html**
- Main application dashboard
- Sidebar navigation (Dashboard, Projects, Tasks, Team, Analytics, Files, Settings)
- Statistics cards, project progress, recent tasks
- Protected route (requires authentication)

### **profile.html**
- Public portfolio page
- Shareable with companies
- Professional bio, projects, skills, achievements
- No login required

---

## 🎨 Styling

All pages use:
- **Tailwind CSS** for utility-first styling
- **Custom components** defined in `src/styles/input.css`
- **Font Awesome** icons
- **Vedh brand colors:** Primary `#6366f1` (Indigo)

*All pages migrated to Tailwind CSS on 01-12-2025*

---

## 🚀 Development

```bash
# Build Tailwind CSS
npm run build:css

# Start the server
npm start

# Access pages at http://localhost:5000/
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/public`