import { AnyAction, Dispatch, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { signOut } from '../redux-slices/auth-slice';
import {
  setServerError,
  setBadRequestError,
  setAnyError,
  setValidationServerError,
  setUnauthorizedError,
} from '../redux-slices/global-error-slice';

export const errorMiddleware: Middleware<any, any, Dispatch<AnyAction>> =
  (api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const { status, info } = action.payload;
      switch (true) {
        case status === 500: {
          api.dispatch(setServerError(action.payload));
          break;
        }
        case status === 400 && info.errors instanceof Array: {
          api.dispatch(setValidationServerError(info));
          break;
        }
        case status === 400: {
          api.dispatch(setBadRequestError(info));
          break;
        }
        case status === 401: {
          api.dispatch(signOut());
          api.dispatch(setUnauthorizedError());
          // api.dispatch(rememberPathAfterLogout({ unauthorised: true }));
          break;
        }
        default: {
          api.dispatch(setAnyError(info));
        }
      }
    }
    return next(action);
  };
