# 📁 Styles Folder

<p align="center">
  <img src="../../public/assets/logo.png" width="80" alt="Vedh Logo">
</p>

## 📌 Purpose

This folder contains **Tailwind CSS source files** for styling the Vedh application frontend.

---

## 📂 Folder Structure

```
styles/
├── input.css            # Tailwind CSS input file with custom styles
└── README.md            # This file
```

---

## 🔧 Files Overview

### **input.css**
- Main Tailwind CSS source file
- Contains Tailwind directives (`@tailwind`, `@layer`, `@apply`)
- Includes custom component styles:
  - `.nav-item` - Navigation item styles
  - `.nav-item.active` - Active navigation state
  - Custom utility classes
- Compiled to `/public/css/output.css` for production use

---

## 🚀 Build Process

The input.css file is processed by Tailwind CSS and PostCSS:

```bash
npm run build:css
```

**Flow:**
```
input.css → Tailwind CSS → PostCSS → output.css
```

**Configuration Files:**
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

---

## 🎨 Custom Styles

### Navigation Items
```css
.nav-item {
  @apply flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors;
}

.nav-item.active {
  @apply bg-primary-light text-primary font-semibold;
}
```

---

## 📝 Usage

Import the compiled CSS in HTML files:
```html
<link rel="stylesheet" href="./css/output.css" />
```

---

**Project:** Vedh - Modern Productivity Platform  
**Folder:** `/src/styles`
