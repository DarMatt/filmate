import { createSlice } from '@reduxjs/toolkit';
import { KeysGlobalErrors } from '../CONST/key-global-errors';

export const globalErrorSlice = createSlice({
  name: 'global-error',
  initialState: {
    [KeysGlobalErrors.unknownError]: '',
    [KeysGlobalErrors.serverError]: '',
    [KeysGlobalErrors.badRequestError]: '',
    [KeysGlobalErrors.validationServerError]: [],
    [KeysGlobalErrors.unauthorizedError]: false,
  },
  reducers: {
    setAnyError: (state, action) => {
      state.anyError = action.payload;
    },
    setServerError: (state, action) => {
      state.serverError = 'something_went_wrong_could_you_try_later';
    },
    setValidationServerError: (state, action) => {
      state.validationServerError = action.payload.errors;
    },
    setBadRequestError: (state, action) => {
      state.badRequestError = action.payload.message;
    },
    setUnauthorizedError: (state) => {
      state.unauthorizedError = true;
    },
    clearError: (state, action) => {
      if (action.payload.errorKeys.length) {
        for (const errorKey of action.payload.errorKeys) {
          state[errorKey] = '';
        }
      } else {
        for (const stateKey in state) {
          state[stateKey] = '';
        }
      }
    },
  },
});

export const {
  setAnyError,
  setServerError,
  setValidationServerError,
  setBadRequestError,
  clearError,
  setUnauthorizedError,
} = globalErrorSlice.actions;
export default globalErrorSlice.reducer;
