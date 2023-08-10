import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "menuState",
  initialState: {
    value: false,
  },
  reducers: {
    handleOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleOpen } = counterSlice.actions;
