import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../redux-slices/auth-slice';
import MoviesReducer from '../redux-slices/movie-slice';
import ManagerUiReducer from '../redux-slices/manager-ui-slice';
import { loadingMiddleware } from '../middleware/loading-middleware';
import { errorMiddleware } from '../middleware/error-middleware';

const rootReducer = combineReducers({
  auth: AuthReducer,
  movies: MoviesReducer,
  managerUi: ManagerUiReducer,
});
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorMiddleware, loadingMiddleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
