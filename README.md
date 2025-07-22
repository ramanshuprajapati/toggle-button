# 🌗 Dark/Light Mode Toggle Button

This is a simple **Dark/Light Mode Toggle Button** project built using **HTML, CSS, and JavaScript**.  
It uses **`localStorage`** to remember the user's selected theme even after refreshing or reopening the browser.

---

## 🔥 Features

- Toggle between **Light Mode** and **Dark Mode** with a single button
- Saves the selected theme using **localStorage**
- Theme persists even after page reload
- Beginner-friendly clean code

---

## 💡 How It Works

- On page load, JavaScript checks `localStorage` for saved theme (`dark` or `light`)
- If theme is `"dark"`, the `dark-mode` class is applied to the `<body>`
- Clicking the toggle button adds/removes the `dark-mode` class and updates `localStorage`

---

## 📁 Files Used

- `index.html` — Structure of the page
- `style.css` — Styling for both light and dark modes
- `script.js` — Toggle logic and localStorage implementation

## 📸 App Screenshot

![App Screenshot](./screenshot.png)