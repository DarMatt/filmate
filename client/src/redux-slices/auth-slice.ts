import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_NAME } from '../CONST/key-localStorage';
import { ISignUp } from '../interfaces/signUp';
import {
  getFromStorage,
  removeFromStorage,
  setToStorage,
} from '../services/local-session-storage/service-localStorage';
import { asyncApiAuth } from '../services/thunk-api/async-apiauth';

interface AuthState {
  loading: null;
  userId: string;
  token: string;
  userData: ISignUp;
  isAuth: boolean;
  error: string;
}
const initialState: AuthState = {
  loading: null,
  userId: '',
  token: '',
  userData: {},
  isAuth: false,
  error: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isAuth = true;
      if (action.payload?.token) {
        setToStorage(
          STORAGE_NAME,
          JSON.stringify({
            token: action.payload?.token,
            userId: action.payload.userId,
          })
        );
      }
    },
    signOut: (state) => {
      state.token = '';
      state.userId = '';
      state.isAuth = false;
      state.userData = {};
      removeFromStorage(STORAGE_NAME);
    },
    signup: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    putUserToStore: (state, action) => {
      console.log('action.payload', action.payload);
      state.userData = action.payload;
      state.isAuth = true;
      state.token = getFromStorage(STORAGE_NAME).token;
    },
    updateUserInfo: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});
export const { login, signOut, signup, putUserToStore, updateUserInfo } = AuthSlice.actions;
export const authAsyncActions = asyncApiAuth;
export default AuthSlice.reducer;
