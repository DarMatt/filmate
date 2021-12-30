import { IMovieImages } from '../interfaces/movieImages';
import { IMovies } from '../interfaces/movieList';

export interface IMoviesType {
  results: IMovies[];
}

export interface ImagesType {
  backdrops: IMovieImages[];
  id: number;
  logos: IMovieImages[];
  posters: IMovieImages[];
}
