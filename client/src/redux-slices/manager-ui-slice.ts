import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_THEME } from '../CONST/key-localStorage';
import { setToStorage } from '../services/local-session-storage/service-localStorage';

interface ManagerUiState {
  sideBarStatus: boolean;
  theme: boolean;
}
const initialState: ManagerUiState = {
  sideBarStatus: false,
  theme: JSON.parse(localStorage.getItem(STORAGE_THEME)!) || true,
};

export const ManagerUiSlice = createSlice({
  name: 'managerUi',
  initialState,
  reducers: {
    setSideBarStatus: (state, action) => {
      state.sideBarStatus = action.payload;
    },
    setTheme: (state, action) => {
      setToStorage(STORAGE_THEME, JSON.stringify(action.payload));
      state.theme = action.payload;
    },
  },
});

export const { setSideBarStatus, setTheme } = ManagerUiSlice.actions;
export default ManagerUiSlice.reducer;
