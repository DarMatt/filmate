import React, { useEffect } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieLWrapperStyled, FilmListStyled, MovieItemStyled } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import {
  getMovieLoadingSelector,
  getMovieSelector,
  getTokenSelector,
} from '../../selectors/selectors';
import { useRouteMatch } from 'react-router';
import { MatchParams } from '../Genres/Genres';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '../Skeleton/Skeleton';
import { UiSize } from '../../enums/UiSize';

export const MovieList: React.FC = () => {
  const movies = useAppSelector(getMovieSelector);
  const accessToken = useAppSelector(getTokenSelector);
  const { params } = useRouteMatch<MatchParams>();
  const { i18n } = useTranslation('common');

  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = params.genre
      ? dispatch(movieAsyncActions.setMoviesGenre(params.genre))
      : dispatch(movieAsyncActions.setMoviesAction());
    return () => {
      promise.abort();
    };
  }, [accessToken, i18n.language]);

  return (
    <MovieLWrapperStyled>
      <FilmListStyled>
        {!movies.length ? (
          <Skeleton type={'feed'} />
        ) : (
          movies.map((film) => (
            <MovieItemStyled key={film.id}>
              <MovieCard film={film} size={UiSize.REGULAR} />
            </MovieItemStyled>
          ))
        )}
      </FilmListStyled>
    </MovieLWrapperStyled>
  );
};
