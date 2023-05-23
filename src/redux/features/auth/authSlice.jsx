import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authChange: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.role = action.payload.role;
    },
  },
});

export const { authChange } = authSlice.actions;

export default authSlice.reducer;
