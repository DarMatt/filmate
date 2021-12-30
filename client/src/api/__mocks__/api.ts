import {
  testPopular,
  testFavoriteFilm,
  testMovieMongo,
} from '../../../config/helpers/movies';

export const getPopular = jest.fn().mockResolvedValue({results: testPopular});
export const getMovieDetails = jest
  .fn()
  .mockImplementation(() => Promise.resolve(testFavoriteFilm));

export const getMovie = jest.fn().mockResolvedValue(testMovieMongo);

export const deleteMovie = jest.fn();
