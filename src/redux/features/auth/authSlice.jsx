import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  role: null,
  username: null,
  logo: null,
  uid: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authChange: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.role = action.payload.role;
      state.username = action.payload.username;
      state.uid = action.payload.uid;
      state.logo = action.payload.logo;
    },
  },
});

export const { authChange } = authSlice.actions;

export default authSlice.reducer;
