import { getMovieGenre, getPopular, getSearchMovies } from '../../api/api';
import {
  API_ENDPOINT_ADD_COMMENT,
  API_ENDPOINT_DELETE_FROM_FAVORITE,
  API_ENDPOINT_DELETE_FROM_WATCH_LATER,
  API_ENDPOINT_GET_COMMENTS,
  API_ENDPOINT_GET_FAVORITE,
  API_ENDPOINT_GET_WATCH_LATER,
  API_ENDPOINT_SET_TO_FAVORITE,
  API_ENDPOINT_SET_TO_WATCH_LATER,
} from '../../CONST/api-endpoints';
import { MOVIE_TYPES_PREFIX } from '../../CONST/types-prefix-thunk/type-prefix-movie';
import { setMovies, setComments, addToComments } from '../../redux-slices/movie-slice';
import { fetchMovies } from '../../utils/helpers';
import { AxiosService } from '../api/axios.service';
import { AsyncThunkService } from '../asyncThunk-service/asyncThunk-service';

const axiosService = new AxiosService();
const asyncThunkService = new AsyncThunkService();

export const asyncApiMovies = {
  setMoviesAction: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMoviesAction,
    async (_: void, { dispatch }: any) => {
      getPopular().then(async (resImdb) => {
        fetchMovies(dispatch, resImdb.results);
      });
    }
  ),
  setMoviesScrollAction: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMoviesScrollAction,
    async (data: any, { dispatch }: any) => {
      getPopular(data.page).then(async (resImdb) => {
        fetchMovies(dispatch, [...data.movies, ...resImdb.results]);
      });
    }
  ),
  setMoviesGenre: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMoviesGenreAction,
    async (genre: any, { dispatch }: any) => {
      getMovieGenre(genre).then(async (resImdb) => {
        fetchMovies(dispatch, resImdb.results);
      });
    }
  ),
  setMoviesScrollGenre: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setMoviesScrollGenreAction,
    async (data: any, { dispatch }: any) => {
      getMovieGenre(data.genre, data.page).then(async (resImdb) => {
        fetchMovies(dispatch, [...data.movies, ...resImdb.results]);
      });
    }
  ),
  setSearchMovies: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setSearchMovieAction,
    async (query: any, { dispatch }: any) => {
      query
        ? getSearchMovies(query).then(async (resImdb) => {
            fetchMovies(dispatch, resImdb.results);
          })
        : getPopular().then(async (resImdb) => {
            fetchMovies(dispatch, resImdb.results);
          });
    }
  ),
  setSearchScrollMovies: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.setSearchScrollMovieAction,
    async (data: any, { dispatch }: any) => {
      data.query
        ? getSearchMovies(data.query, data.page).then(async (resImdb) => {
            fetchMovies(dispatch, [...data.movies, ...resImdb.results]);
          })
        : getPopular().then(async (resImdb) => {
            fetchMovies(dispatch, resImdb.results);
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
  addComment: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.addCommentAction,
    async (data: any, { dispatch }: any) => {
      console.log('before req');
      const resp = await axiosService.clientPost({
        url: API_ENDPOINT_ADD_COMMENT,
        body: data,
      });
      // return resp.data;
      console.log('resp.data', resp.data);
      dispatch(addToComments(resp.data));
    }
  ),
  getComments: asyncThunkService.launchAsyncThunk(
    MOVIE_TYPES_PREFIX.getCommentsAction,
    async (data: any, { dispatch }: any) => {
      const resp = await axiosService.clientGet({
        url: API_ENDPOINT_GET_COMMENTS + data.id,
      });
      console.log('resp.data', resp.data);
      // return resp.data;
      dispatch(setComments(resp.data));
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
