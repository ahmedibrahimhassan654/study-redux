import { createSlice } from "@reduxjs/toolkit";

const initialAutState = {
  isAuth: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAutState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
export const authActions = AuthSlice.actions;
