import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./ColorReducer";

export const store = configureStore({
  reducer: {
    changeColor: colorSlice,
  },
});
