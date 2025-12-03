# 📁 CSS Folder

<p align="center">
  <img src="../assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **compiled CSS files** used for styling the Vedh application frontend.

---

## 📂 Folder Structure

```
css/
├── output.css           # Compiled Tailwind CSS (production-ready)
└── README.md            # This file
```

---

## 🔧 Files Overview

### **output.css**
- Production-ready compiled CSS file
- Generated from `src/styles/input.css` by Tailwind CSS
- Contains all Tailwind utility classes and custom components
- Linked in all HTML pages

---

## 🚀 Build Process

```bash
npm run build:css
```

**Flow:** `src/styles/input.css` → Tailwind CSS → PostCSS → `public/css/output.css`

---

## ⚠️ Important

- **DO NOT** manually edit `output.css`
- All changes should be made in `src/styles/input.css`

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/public/css`