import { LOCALE } from '../CONST/key-localStorage';
import { DEFAULT_LOCALE } from '../CONST/locales';
import { deleted, get, post } from '../services/fetch';
import { ImagesType, IMoviesType } from './apiTypes';
import { moviesPopular, BASE_URL, withVideo, LOCAL_URL, apiUrl, API_KEY } from './URLs';

export const getPopular = (): Promise<IMoviesType> => {
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const url = `${BASE_URL}${moviesPopular}&language=${lang}&page=1`;
  return get(url);
};
// добавить глобальнаые переменные языка и страницы
export const getSearchMovies = (query: string) => {
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const url = `${BASE_URL}search/movie${API_KEY}&language=${lang}&query=${query}&page=1&include_adult=false`;
  return get(url);
};

export const getMovieDetails = (movie_id: number | string) => {
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const url = `${BASE_URL}movie/${movie_id}${API_KEY}&language=${lang}${withVideo}`;
  return get(url);
};
// 'https://api.themoviedb.org/3/'
// api  '?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c'
// https://api.themoviedb.org/3/discover/movie?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c&with_genres=27&language=en-US
export const getMovieGenre = (gener_id: number | string) => {
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const url = `${BASE_URL}discover/movie${API_KEY}&with_genres=${gener_id}&language=${lang}`;
  return get(url);
};

export const getMovieImages = (movie_id: number | string): Promise<ImagesType> => {
  const url = `${BASE_URL}movie/${movie_id}/images${API_KEY}`;
  return get(url);
};

//https://api.themoviedb.org/3/movie/438631?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c&language=en-US&append_to_response=videos

export const getUser = (user_id: number | string, token: string) => {
  const url = apiUrl + user_id;
  return get(url, {
    Authorization: `Bearer ${token}`,
  });
};

export const getMovie = (token: string) => {
  const url = `${LOCAL_URL}/api/movie`;
  return get(url, {
    Authorization: `Bearer ${token}`,
  });
};

export const addMovie = (token: string, data: any) => {
  const url = `${LOCAL_URL}/api/movie/generate`;
  return post(url, data, {
    Authorization: `Bearer ${token}`,
  });
};

export const deleteMovie = (movie_id: number | string, token: string) => {
  const url = `${LOCAL_URL}/api/movie/${movie_id}`;
  return deleted(url, {
    Authorization: `Bearer ${token}`,
  });
};

// export function getFilmById(id) {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c&with_genres=${id}`
//   )
//     .then((response) => response.json())
//     .then((result) => result.results)
// }
