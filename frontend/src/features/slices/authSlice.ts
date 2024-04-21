import { createSlice } from "@reduxjs/toolkit";

type TInitialState={
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: TUser | null;
}

type TUser={
  id:string
  username: string;

};

const authInitialState: TInitialState = {
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
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = action.payload.isLoading;
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
