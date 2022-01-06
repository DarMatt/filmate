import { IMovies } from '../interfaces/movieList';
import { setMovies } from '../redux-slices/movie-slice';
import { ErrorAlertAndRedirect, Toast } from '../components/Swal';
import { HTTP_FULFILLED_STATUS, HTTP_REJECTED_STATUS } from '../CONST/http-request-status';
import { AppDispatch } from '../store/store';
import { IMovieCard } from '../interfaces/movieCard';
import allGenres from '../components/Genres/allGenres';
import { initialMovieState } from '../components/MovieDetails/MovieDetails';
import { IMoviesType } from '../api/apiTypes';
import { getFromStorage } from '../services/local-session-storage/service-localStorage';
import { STORAGE_NAME } from '../CONST/key-localStorage';
import { API_ENDPOINT_GET_FAVORITE, API_ENDPOINT_GET_WATCH_LATER } from '../CONST/api-endpoints';
import { AxiosService } from '../services/api/axios.service';

export const initialWatchLaterVal = {
  withFamily: false,
  withFriends: false,
  withTrueLove: false,
  Alone: false,
};

type IAddToMenu = {
  dispatch: AppDispatch;
  requestStatus: any;
  movies: IMovieCard[];
  movie: IMovieCard;
  key?: string;
};

const axiosService = new AxiosService();

export const isSomeKeyTrue = (obj: any) => Object.values(obj).some((v) => v === true);

export const addLikesToServerMovies = (
  favoriteMovies: IMovies[],
  watchLaterM: IMovies[],
  moviesToMap: IMovies[]
) =>
  moviesToMap.map((movie) => {
    const foundFavoriteMovie = favoriteMovies.find(
      (favoriteMovie: IMovies) => movie.id === favoriteMovie.id
    );
    const foundWatchLMovie = watchLaterM.find((WatchMovie: IMovies) => movie.id === WatchMovie.id);
    return {
      ...movie,
      isFavorite: !!foundFavoriteMovie?.isFavorite,
      isWatchLater: foundWatchLMovie?.isWatchLater || initialWatchLaterVal,
    };
  });

export const fetchMovies = async (
  dispatch: (arg0: { payload: IMovies[]; type: string }) => void,
  resImdb: IMoviesType
) => {
  const accessToken = getFromStorage(STORAGE_NAME).token;
  if (accessToken) {
    try {
      const respMongoFavorite = await axiosService.clientGet({
        url: API_ENDPOINT_GET_FAVORITE,
      });
      const respMongoWatchLater = await axiosService.clientGet({
        url: API_ENDPOINT_GET_WATCH_LATER,
      });
      dispatch(
        setMovies(
          addLikesToServerMovies(respMongoFavorite.data, respMongoWatchLater.data, resImdb.results)
        )
      );
    } catch {
      dispatch(setMovies(resImdb.results));
    }
  } else {
    dispatch(setMovies(resImdb.results));
  }
};

export const removeFromMenuReqCheck = async ({
  dispatch,
  requestStatus,
  movies,
  movie,
  key,
}: IAddToMenu) => {
  if (requestStatus === HTTP_FULFILLED_STATUS) {
    Toast.fire({
      icon: 'success',
      title: 'The movie has been removed from your collection!',
    });
    const copyMovies = JSON.parse(JSON.stringify(movies));
    for (const film of copyMovies) {
      if (film.id === movie.id) {
        key ? (film.isWatchLater = initialWatchLaterVal) : (film.isFavorite = false);
      }
    }
    dispatch(setMovies(copyMovies));
  } else if (requestStatus === HTTP_REJECTED_STATUS) {
    Toast.fire({
      icon: 'error',
      title: 'Something went wrong! Please try again later',
    });
  }
};

export const addToMenuReqCheck = async ({
  dispatch,
  requestStatus,
  movies,
  movie,
  key,
}: IAddToMenu) => {
  if (requestStatus === HTTP_FULFILLED_STATUS) {
    Toast.fire({
      icon: 'success',
      title: 'The movie was added to your favorites!',
    });
    const copyMovies = JSON.parse(JSON.stringify(movies));
    for (const film of copyMovies) {
      if (film.id === movie.id) {
        key ? (film.isWatchLater[key] = true) : (film.isFavorite = true);
      }
    }
    dispatch(setMovies(copyMovies));
  } else if (requestStatus === HTTP_REJECTED_STATUS) {
    ErrorAlertAndRedirect({
      title: 'You are not logged in!',
      text: 'Please login or register',
      onButtonText: 'Cancel',
    });
  }
};

export const ToastError = () => {
  Toast.fire({
    icon: 'error',
    title: 'You can&apos;t add this movie because it is already in your collection',
  });
};

export const getGenre = (film: IMovieCard = initialMovieState) => {
  const genres = [];
  for (const genre of allGenres) {
    if (film.genre_ids.includes(genre.id)) {
      genres.push(genre.gener);
    }
  }
  return genres;
};

export const matchExact = (param: string, obj: any) => {
  if (obj ? param === obj[0] : false) {
    console.log(param, obj[0]);
  }
  return obj ? param === obj[0] : false;
};
