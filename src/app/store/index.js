import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesReducer";

export const store = configureStore({
  reducer: moviesReducer,
});
