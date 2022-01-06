export const apiUrl = 'http://localhost:3000/api/auth/';
const img = 'https://image.tmdb.org/t/p/';

export const BASE_URL = 'https://api.themoviedb.org/3/';

export const LOCAL_URL = 'http://localhost:3000';

export const Server_URL = 'http://localhost:3000/api/movie';

export const API_KEY = '?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c';

export const moviesPopular = `movie/popular${API_KEY}`;

export const getImgUrl = (path: string | undefined) => {
  return img + path;
};

export const withVideo = `&append_to_response=videos`;
