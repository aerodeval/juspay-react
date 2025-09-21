import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";

// MUI
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme,darkTheme } from "./styles/theme.js"; // always light

// Redux
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../src/store/store.js";
import { setTheme } from "../src/data/themeSlice.js";


function Root() {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";
  const dispatch = useDispatch();

  // Detect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    dispatch(setTheme(prefersDark ? "dark" : "light"));
  }, [dispatch]);

  // Toggle .dark-theme class
  useEffect(() => {
    if (isDark) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [isDark]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>
);
