import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { AsyncThunkAction } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { IMovieCard } from '../../interfaces/movieCard';
import { IMovies } from '../../interfaces/movieList';
import { ISignUp } from '../../interfaces/signUp';
import { IReviewType } from '../../redux-slices/movie-slice';

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: Dispatch<AnyAction> | undefined;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
type ThunkAction = AsyncThunkAction<any, void, AsyncThunkConfig>;

export type movieDispatchType = {
  dispatch: (arg0: { payload: IMovies[] | IReviewType[] | IReviewType; type: string }) => void;
};
export type userDispatchType = {
  dispatch: (arg0: { payload: ISignUp; type: string }) => void;
};

export interface IApiMovies {
  setMoviesAction: () => ThunkAction;
  setMoviesScrollAction: (value: { movies: IMovies[]; page: number }) => ThunkAction;
  setMoviesGenre: (value: string) => ThunkAction;
  setMoviesScrollGenre: (value: { movies: IMovies[]; genre: string; page: number }) => ThunkAction;
  setSearchMovies: (value: string) => ThunkAction;
  setSearchScrollMovies: (value: { movies: IMovies[]; query: string; page: number }) => ThunkAction;
  getFavoriteMovie: () => ThunkAction;
  addComment: (value: {
    rating: string;
    review: string;
    spoiler: string;
    user_id: string;
    movie_id: string;
  }) => ThunkAction;
  getComments: (value: { id: string | undefined }) => ThunkAction;
  addMovieToFavorite: (value: IMovieCard & { isFavorite: boolean }) => ThunkAction;
  removeMovieFromFavorite: (value: number) => ThunkAction;
  getWatchLaterMovie: () => ThunkAction;
  addMovieToWatchLater: (value: any) => ThunkAction;
  removeMovieFromWatchLater: (value: number) => ThunkAction;
}

export interface IApiAuth {
  signUpAction: (value: ISignUp) => ThunkAction;
  loginAction: (value: { email: string; password: string }) => ThunkAction;
  getMyProfileAction: (value: string) => ThunkAction;
  updateAction: (value: { files: string; id: string }) => ThunkAction;
}
