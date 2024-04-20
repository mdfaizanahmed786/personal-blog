import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    logoutUser: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});


export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
