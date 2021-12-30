import React, { useCallback, useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieLWrapperStyled, FilmListStyled, MovieItemStyled } from './styles';
import { getPosition, IPositionProps, positionInitialState } from '../../hooks/useCursorPosition';
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
  const isLoading = useAppSelector(getMovieLoadingSelector);
  const accessToken = useAppSelector(getTokenSelector);
  const { params } = useRouteMatch<MatchParams>();
  const { i18n } = useTranslation('common');
  console.log('isLoading:', isLoading);
  console.log('movies', movies);
  console.log('accessToken', accessToken);

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('IM INSIDE MOVIELIST-USEEFFECT');
    const promise = params.genre
      ? dispatch(movieAsyncActions.setMoviesGenre(params.genre))
      : dispatch(movieAsyncActions.setMoviesAction(null));
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
