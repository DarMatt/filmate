import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovies } from '../../interfaces/movieList';
export const BASE_URL = 'https://api.themoviedb.org/3/';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<IMovies, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
// //[] movies 2 метода запросов на популярное и на жанры
// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi;

// https://api.themoviedb.org/3/
//  discover
// /movie?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c&with_genres=27

// https://api.themoviedb.org/3/movie/popular?api_key=be9d1bbbdf88bb1c65a5f3dbb02bbf5c
// & language=en - US & page=1
