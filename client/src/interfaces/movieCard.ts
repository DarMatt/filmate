export type IWatchLater = {
  withFamily: boolean;
  withFriends: boolean;
  withTrueLove: boolean;
  Alone: boolean;
};
export interface IMovieCard {
  id: number;
  poster_path?: string;
  backdrop_path: string;
  title: string;
  release_date: string;
  genre_ids: number[];
  vote_average?: number;
  overview: string;
  isFavorite?: boolean;
  isWatchLater?: IWatchLater;
}
