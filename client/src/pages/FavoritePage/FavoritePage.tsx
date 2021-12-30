import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { S } from './styles';
import { getMovieSelector, getTokenSelector } from '../../selectors/selectors';
import { MovieMenu } from '../../components/MovieMenu/MovieMenu';
import { useTranslation } from 'react-i18next';

const FavoritePage = () => {
  const dispatch = useAppDispatch();
  const apiMovies = useAppSelector(getMovieSelector);
  const movies = apiMovies.filter((m) => m.isFavorite);
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    const promise = dispatch(movieAsyncActions.getFavoriteMovie(null));
    return () => {
      promise.abort();
    };
  }, [dispatch, i18n.language]);

  return (
    <>
      <S.FavoriteTitle>{t('favorite_movies')}</S.FavoriteTitle>
      <MovieMenu movies={movies}></MovieMenu>
    </>
  );
};

export default FavoritePage;
