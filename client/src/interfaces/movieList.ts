import { IWatchLater } from './movieCard';

export interface IMovies {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  isFavorite?: boolean;
  isWatchLater?: IWatchLater;
}

export interface IMovieDetails extends IMovies {
  isFavorite?: boolean;
  imdb_id: string;
  tagline: string;
  videos: {
    results: MovieVideoProps[];
  };
  homepage: string;
  genres: MovieGenre[];
}

interface MovieVideoProps {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface MovieGenre {
  id: number;
  name: string;
}
