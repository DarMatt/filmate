import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovies } from '../interfaces/movieList';
import { asyncApiMovies } from '../services/thunk-api/async-apimovies';

interface MoviesState {
  movies: IMovies[];
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: '',
};

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovies[]>) => {
      state.movies = action.payload;
    },
  },
  // extraReducers: {
  //   [asyncApiMovies.setMoviesAction.fulfilled.type]: (state, action: PayloadAction<IMovies[]>) => {
  //     state.isLoading = false;
  //   },
  //   [asyncApiMovies.setMoviesAction.pending.type]: (state) => {
  //     state.isLoading = true;
  //     state.error = '';
  //   },
  //   [asyncApiMovies.setMoviesAction.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const movieAsyncActions = asyncApiMovies;
export const { setMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
