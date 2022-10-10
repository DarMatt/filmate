import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovies } from '../interfaces/movieList';
import { asyncApiMovies } from '../services/thunk-api/async-apimovies';

export interface IReviewType {
  autor: string;
  date: string;
  avatar: string;
  movie_id: string;
  rating: string;
  spoiler: string;
  review: string;
  user_id: string;
}
interface MoviesState {
  movies: IMovies[];
  comments: IReviewType[];
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  comments: [],
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
    setComments: (state, action: PayloadAction<IReviewType[]>) => {
      state.comments = action.payload;
    },
    addToComments: (state, action: PayloadAction<IReviewType>) => {
      console.log('her addComment', state.comments.push(action.payload));
      state.comments = [...state.comments, action.payload];
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
export const { setMovies, setComments, addToComments } = MoviesSlice.actions;
export default MoviesSlice.reducer;
