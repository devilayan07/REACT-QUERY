import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    Log_out: (state, { payload }) => {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
});

export const { toggleLoggedIn, Log_out } = authSlice.actions;

export default authSlice.reducer;
