# React Vite Dashboard

A modern React dashboard project built with **Vite**, **Redux**, **MUI**, and **Recharts**.  
Features **light/dark theme switching** using Redux and CSS variables, with interactive charts powered by simulated API data.

---

## ✨ Features

- **React + Vite**: Fast and modern frontend setup with Hot Module Replacement
- **Redux**: Global state management including theme switching
- **MUI (Material-UI)**: Comprehensive UI component library (Cards, Buttons, Tables, etc.)
- **Recharts**: Responsive data visualization and charting
- **Light/Dark Theme**: Seamless theme toggle using Redux and CSS variables
- **Simulated API Data**: All dashboard content generated from `content.js`
- **Responsive Design**: Optimized for desktop and mobile devices

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aerodeval/juspay-react.git
   cd juspay-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173` (or the port Vite assigns)

3. **Use the theme toggle button** in the dashboard to switch between light and dark modes

4. **Modify data** in `content.js` to see changes reflected automatically in the dashboard

---

## 📁 Folder Structure

```
src/
 ├── assets/           # Images, icons, and static resources
 ├── components/       # Reusable React components
 ├── dashboard/        # Dashboard pages and sections
 ├── store/            # Redux store configuration and slices
 ├── styles/           # Global CSS and MUI theme configuration
 ├── content.js        # Simulated API data and content
 ├── App.jsx           # Main App component
 └── main.jsx          # Application entry point
```

---

## 🎨 Theme Switching

### How it works:
- **Redux State**: `theme.mode` controls "light" or "dark" theme state
- **CSS Variables**: `.dark-theme` class toggles dark mode variables globally
- **MUI Integration**: Components use CSS variables in `styleOverrides` for dynamic theming

### CSS Variables Example:
```css
/* Light theme (default) */
:root {
  --background: #ffffff;
  --foreground: #1C1C1C;
  --light: #F7F9FB;
  --brand: #1C1C1C;
}

/* Dark theme */
.dark-theme {
  --background: #1C1C1C;
  --foreground: #FFFFFF;
  --light: rgba(255, 255, 255, 0.05);
  --brand: #C6C7F8;
}
```

### Theme Toggle:
```javascript
// Dispatch Redux action to toggle theme
dispatch(toggleTheme())
```

---

## 📊 Simulated API Data

- All dashboard content (cards, charts, tables) is generated from **`content.js`**
- **Easy customization**: Modify data, labels, or icons in `content.js`
- **Hot reload**: Changes automatically reflect in the app without component modifications
- **Realistic data structure**: Mimics real API responses for development

---

## 📦 Dependencies

### Core:
- `react` & `react-dom` - React framework
- `vite` - Build tool and dev server

### State Management:
- `@reduxjs/toolkit` - Redux state management
- `react-redux` - React-Redux bindings

### UI Framework:
- `@mui/material` - Material-UI components
- `@emotion/react` & `@emotion/styled` - CSS-in-JS styling

### Data Visualization:
- `recharts` - Chart library for React

---

## 📝 Notes
Line chart and world map was not implemented as i couldnt find a visual chart close to it similar can be used from recharts but same aesthetic is diffcult to match

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🚀 Getting Started

Ready to explore? Clone the repo, install dependencies, and start the dev server to see the dashboard in action!
