<p align="center">
  <img src="./public/assets/logo.png" width="160" alt="Vedh Logo">
</p>

<h1 align="center"> Vedh </h1>

<p align="center">
  <b>A modern, fast, and intelligent productivity platform built for students, developers, and creators.</b>
</p>

---

## 🚀 About the Project

**Vedh** is a productivity and knowledge-management platform designed to help individuals stay organized, track progress, and learn smarter.  
It includes daily goals, topic tracking, notes, roadmap planning, progress charts, and AI-powered insights (future phase).

This project is being built in **public**, documenting the full journey (Day 0 → Launch).

---
## to run project

```
npm i
npm start

```
create .env file in project folder
```
PORT=5000
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret_key
JWT_LIFETIME=1d
```
paste this in your .env file

## 📌 Features (MVP)

### ✅ Core Features
- 🔖 **Clean Home Dashboard** with quick overview  
- 📝 **Rich Text / Markdown Editor** for notes  
- 📚 **Topic Tracking System**  
- 📅 **Daily Progress Tracker**  
- 📈 **Learning Streaks & Analytics**  
- 🌙 **Light/Dark Mode**  

### 🔥 Future Enhancements
- 🤖 AI Suggestions & Smart Insights  
- 🧩 Task recommendations based on patterns  
- 📊 Deep progress analytics  
- 🔐 User authentication & cloud sync  

---

## 🛠️ Tech Stack

### **Frontend** (in future scope 😅)
- React.js  
- TailwindCSS  
- Zustand / Redux (state management)  
- React Router  

### **Backend **
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication
- Quill editor

 *(more stack is going to add.....)*
---

## 🧩 Project Structure (Planned)
```
vedh/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js                # MongoDB connection
│   │   └── cloudinary.js        # Cloudinary setup 
│   │
│   ├── models/                  # Mongoose Schemas (DB tables)
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Tag.js
│   │   ├── Comment.js
│   │   ├── File.js
│   │   └── RefreshToken.js
│   │
│   ├── routes/                  # All API endpoints
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── post.routes.js
│   │   ├── tag.routes.js
│   │   ├── comment.routes.js
│   │   ├── upload.routes.js
│   │   └── admin.routes.js
│   │
│   ├── controllers/             # Logic for each API request
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── post.controller.js
│   │   ├── tag.controller.js
│   │   ├── comment.controller.js
│   │   ├── upload.controller.js
│   │   └── admin.controller.js
│   │
│   ├── services/                # Business logic separate from controllers
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── post.service.js
│   │   ├── tag.service.js
│   │   ├── comment.service.js
│   │   ├── upload.service.js
│   │   └── admin.service.js
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js    # JWT verification
│   │   ├── roleMiddleware.js    # RBAC: admin/author/user
│   │   ├── errorMiddleware.js   # Global error handler
│   │   └── uploadMiddleware.js  # Multer/Cloudinary upload
│   │
│   ├── utils/
│   │   ├── generateToken.js     # Create JWT
│   │   ├── slugify.js           # Create slugs from titles
│   │   ├── email.js             # (Optional) Email service
│   │   └── helpers.js
│   │
│   ├── validators/              # Input validation (optional)
│   │   ├── auth.validation.js
│   │   ├── post.validation.js
│   │   └── user.validation.js
│   │
│   ├── app.js                   # Express app config
│   └── server.js                # Server entry point
│
├── public/                      # Frontend (HTML, CSS, JS)
│   ├── index.html               # Home page
│   ├── post.html                # Single post page
│   ├── login.html
│   ├── register.html
│   ├── dashboard/
│   │   ├── index.html           # Admin dashboard main
│   │   ├── posts.html
│   │   ├── editor.html          # Post editor page
│   │   └── users.html
│   │
│   ├── assets/                  # images, logos, icons
│   └── scripts/                 # frontend JS files
│       ├── auth.js
│       ├── posts.js
│       ├── editor.js
│       └── utils.js
│                        
├── .env.example                 # Sample env file
├── package.json
├── README.md
└── .gitignore

```

---

## 🗂️ Database Schema (Draft)
---
## 🎨 Wireframes (Day 0)
### Home Page
### Editor Page
### Dashboard / Analytics
