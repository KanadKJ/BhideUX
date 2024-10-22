import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bgColor: "#000",
  textColor: "#fff",
};
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.bgColor = action.payload.bg;
      state.textColor = action.payload.textColorAll;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
