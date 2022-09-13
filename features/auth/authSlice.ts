import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token?: string | null;
  error?: string | null;
  message: string;
  authenticated: boolean;
};

const token = Cookies.get("token");

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    message: "",
    authenticated: !!token,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token, error, message, authenticated },
      }: PayloadAction<AuthState>
    ) => {
      state.user = user;
      state.token = token;
      state.error = error;
      state.message = message;
      state.authenticated = authenticated;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth;
