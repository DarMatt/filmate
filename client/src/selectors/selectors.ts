import { RootState } from '../store/store';

export const getUserDataSelector = (state: RootState) => {
  return state.auth.userData;
};

export const getTokenSelector = (state: RootState) => {
  return state.auth.token;
};

export const getAuthStatusSelector = (state: RootState) => {
  return state.auth.isAuth;
};

export const getMovieSelector = (state: RootState) => {
  return state.movies.movies;
};

export const getCommentSelector = (state: RootState) => {
  return state.movies.comments;
};

export const getMovieLoadingSelector = (state: RootState) => {
  return state.movies.isLoading;
};

export const getSideBarStatusSelector = (state: RootState) => {
  return state.managerUi.sideBarStatus;
};

export const getThemeSelector = (state: RootState) => {
  return state.managerUi.theme;
};
