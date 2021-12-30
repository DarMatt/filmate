import { getMovieGenre, getPopular, getSearchMovies } from '../../api/api';
import { IMoviesType } from '../../api/apiTypes';
import {
  API_ENDPOINT_DELETE_FROM_FAVORITE,
  API_ENDPOINT_DELETE_FROM_WATCH_LATER,
  API_ENDPOINT_GET_FAVORITE,
  API_ENDPOINT_GET_WATCH_LATER,
  API_ENDPOINT_SET_TO_FAVORITE,
  API_ENDPOINT_SET_TO_WATCH_LATER,
} from '../../CONST/api-endpoints';
import { STORAGE_NAME } from '../../CONST/key-localStorage';
import { MOVIE_TYPES_PREFIX } from '../../CONST/types-prefix-thunk/type-prefix-movie';
import { IMovieCard } from '../../interfaces/movieCard';
import { IMovies } from '../../interfaces/movieList';
import { setMovies } from '../../redux-slices/movie-slice';
import { AppDispatch } from '../../store/store';
import { addLikesToServerMovies, fetchMovies } from '../../utils/helpers';
import { AxiosService } from '../api/axios.service';
import { AsyncThunkService } from '../asyncThunk-service/asyncThunk-service';
import { getFromStorage } from '../local-session-storage/service-localStorage';

const axiosService = new AxiosService();
const asyncThunkService = new AsyncThunkService();

export const asyncApiMovies = {
  setMoviesAction: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMoviesAction,
    async (_: void, { dispatch }: any) => {
      getPopular().then(async (resImdb) => {
        fetchMovies(dispatch, resImdb);
      });
    }
  ),
  setMoviesGenre: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMovieGenreAction,
    async (genre: any, { dispatch }: any) => {
      const accessToken = getFromStorage(STORAGE_NAME).token;
      console.log('accessToken', accessToken);
      getMovieGenre(genre).then(async (resImdb) => {
        fetchMovies(dispatch, resImdb);
      });
    }
  ),
  setSearchMovies: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setSearchMovieAction,
    async (query: any, { dispatch }: any) => {
      const accessToken = getFromStorage(STORAGE_NAME).token;
      console.log('accessToken', accessToken);
      query
        ? getSearchMovies(query).then(async (resImdb) => {
            fetchMovies(dispatch, resImdb);
          })
        : getPopular().then(async (resImdb) => {
            fetchMovies(dispatch, resImdb);
          });
    }
  ),
  getFavoriteMovie: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.getFavoriteMovieAction,
    async (data: any, { dispatch }: any) => {
      const resp = await axiosService.clientGet({
        url: API_ENDPOINT_GET_FAVORITE,
      });
      dispatch(setMovies(resp.data));
    }
  ),
  addMovieToFavorite: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.addMovieToFavoriteAction,
    async (data: any, { dispatch }: any) => {
      await axiosService.clientPost({
        url: API_ENDPOINT_SET_TO_FAVORITE,
        body: data,
      });
    }
  ),
  removeMovieFromFavorite: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.removeMovieFromFavoriteAction,
    async (movie_id: any, { dispatch }: any) => {
      await axiosService.clientDelete({
        url: API_ENDPOINT_DELETE_FROM_FAVORITE + movie_id,
      });
    }
  ),
  getWatchLaterMovie: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.getWatchLaterMovieAction,
    async (data: any, { dispatch }: any) => {
      const resp = await axiosService.clientGet({
        url: API_ENDPOINT_GET_WATCH_LATER,
      });
      dispatch(setMovies(resp.data));
    }
  ),
  addMovieToWatchLater: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.addMovieToWatchLaterAction,
    async (data: any, { dispatch }: any) => {
      await axiosService.clientPost({
        url: API_ENDPOINT_SET_TO_WATCH_LATER,
        body: data,
      });
    }
  ),
  removeMovieFromWatchLater: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.removeMovieFromWatchLaterAction,
    async (movie_id: any, { dispatch }: any) => {
      await axiosService.clientDelete({
        url: API_ENDPOINT_DELETE_FROM_WATCH_LATER + movie_id,
      });
    }
  ),
};
