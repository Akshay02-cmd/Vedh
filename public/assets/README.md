# 📁 Assets Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **static assets** including images, logos, icons, and media files used throughout the Vedh application.

---

## 📂 Folder Structure

```
assets/
├── logo.png             # Main Vedh logo
├── VedhLogo16.9.png     # Vedh logo (16:9 aspect ratio)
└── README.md            # This file
```

---

## 🖼️ Assets Overview

### **logo.png**
- Main Vedh brand logo
- Used in:
  - Page favicons
  - Header navigation
  - README files
  - Marketing materials

### **VedhLogo16.9.png**
- Widescreen format logo (16:9 ratio)
- Used in:
  - Dashboard sidebar
  - Navigation bars
  - Wide banner areas
  - Profile page header

---

## 🎨 Asset Types

This folder can contain:
- **Logos & Branding:**
  - App logo variations
  - Favicon files
  - Brand marks

- **UI Elements:**
  - Icons
  - Buttons
  - Badges
  - Decorative graphics

- **Images:**
  - Hero images
  - Background patterns
  - Illustrations
  - Project thumbnails

- **Media:**
  - Demo videos
  - Audio files
  - Animations

---

## 🚀 Usage

Assets are referenced in HTML/CSS:

```html
<!-- Favicon -->
<link rel="icon" type="image/png" href="./assets/logo.png" />

<!-- Logo Image -->
<img src="./assets/VedhLogo16.9.png" alt="Vedh" />

<!-- Background in CSS -->
background-image: url('./assets/pattern.png');
```

---

## 📝 Best Practices

- **Optimize images** for web (compress, resize)
- Use **appropriate formats:**
  - PNG for logos/icons (transparency)
  - JPG for photos
  - SVG for scalable graphics
  - WebP for modern browsers
- **Naming convention:** lowercase, hyphen-separated
- Keep file sizes small for performance
- Use descriptive alt text for accessibility

---

## 🔐 Organization Tips

```
assets/
├── logos/
├── icons/
├── images/
│   ├── hero/
│   ├── projects/
│   └── team/
└── media/
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/public/assets`
