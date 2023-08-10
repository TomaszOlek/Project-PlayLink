import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/menuOpen";

const store = configureStore({
  reducer: {
    menuState: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
