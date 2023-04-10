import React, { useCallback, useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieLWrapperStyled, FilmListStyled, MovieItemStyled } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { getMovieSelector, getTokenSelector } from '../../selectors/selectors';
import { useRouteMatch } from 'react-router';
import { MatchParams } from '../Genres/Genres';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '../Skeleton/Skeleton';
import { UiSize } from '../../enums/UiSize';
import { IPromise } from '../../interfaces/promiseType';
import { useDidUpdateEffect } from '../../hooks/useDidUpdate';

export const MovieList: React.FC = () => {
  const movies = useAppSelector(getMovieSelector);
  const accessToken = useAppSelector(getTokenSelector);
  const { params } = useRouteMatch<MatchParams>();
  const { i18n } = useTranslation('common');
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const param = new URLSearchParams(location.search);
  const search = param.get('search');
  const dispatch = useAppDispatch();

  useEffect(() => {
    let promise: IPromise;
    if (params.genre) {
      promise = dispatch(movieAsyncActions.setMoviesGenre(params.genre));
    } else if (search) {
      promise = dispatch(movieAsyncActions.setSearchMovies(search));
    } else {
      promise = dispatch(movieAsyncActions.setMoviesAction());
    }
    return () => {
      promise.abort();
    };
  }, [accessToken, i18n.language]);

  useDidUpdateEffect(() => {
    if (fetching) {
      if (params.genre) {
        dispatch(
          movieAsyncActions.setMoviesScrollGenre({ movies, genre: params.genre, page: currentPage })
        );
      } else if (search) {
        dispatch(
          movieAsyncActions.setSearchScrollMovies({ movies, query: search, page: currentPage + 1 })
        );
      } else {
        dispatch(movieAsyncActions.setMoviesScrollAction({ movies, page: currentPage + 1 }));
      }
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = useCallback((e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }, []);

  return (
    <MovieLWrapperStyled>
      <FilmListStyled>
        {!movies.length ? (
          <Skeleton type={'feed'} />
        ) : (
          movies.map((film, i) => (
            <MovieItemStyled key={i}>
              <MovieCard film={film} size={UiSize.REGULAR} />
            </MovieItemStyled>
          ))
        )}
      </FilmListStyled>
    </MovieLWrapperStyled>
  );
};
