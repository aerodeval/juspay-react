import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../data/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
