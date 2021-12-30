import { createSlice } from '@reduxjs/toolkit';

export const LoadingSlice = createSlice({
  name: 'loadingManagementState',
  initialState: {
    asyncActions: [],
  },
  reducers: {
    setAsyncActionsInState: (state: any, action) => {
      if (!state.asyncActions.includes(action.payload)) {
        state.asyncActions.push(action.payload);
      }
    },
    removeAsyncActionsFromState: (state, action) => {
      state.asyncActions = state.asyncActions.filter(
        (apiRequest: any) => apiRequest.requestId !== action.payload.requestId
      );
    },
  },
});

export const { setAsyncActionsInState, removeAsyncActionsFromState } = LoadingSlice.actions;
export default LoadingSlice.reducer;
