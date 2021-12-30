import { createSlice } from '@reduxjs/toolkit';
import {
  HTTP_FULFILLED_STATUS,
  HTTP_PENDING_STATUS,
  HTTP_REJECTED_STATUS,
} from '../CONST/http-request-status';
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
      // state.loading = HTTP_FULFILLED_STATUS;
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
      console.log('action', action);
      state.userData = { ...state.userData, ...action.payload };
      //some logic запись а в санке отдельный метод отправляет и внутри достаю из useAppSelector то что сохранялось
    },
    putUserToStore: (state, action) => {
      state.userData = action.payload;
      state.isAuth = true;
      state.token = getFromStorage(STORAGE_NAME).token;
    },
  },
});
export const { login, signOut, signup, putUserToStore } = AuthSlice.actions;
export const authAsyncActions = asyncApiAuth;
export default AuthSlice.reducer;
