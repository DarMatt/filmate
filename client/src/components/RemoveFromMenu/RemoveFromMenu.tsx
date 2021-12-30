import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IMovieCard } from '../../interfaces/movieCard';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { getMovieSelector } from '../../selectors/selectors';
import { removeFromMenuReqCheck } from '../../utils/helpers';
import { S } from './styles';

type IProps = {
  movie: IMovieCard;
  type: string;
};

export const RemoveFromMenu = ({ movie, type }: IProps) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMovieSelector);

  const onBtnClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (type === 'favorite') {
      const {
        meta: { requestStatus },
      } = await dispatch(movieAsyncActions.removeMovieFromFavorite(movie.id));
      removeFromMenuReqCheck({ dispatch, requestStatus, movies, movie });
    } else if (type === 'watchLater') {
      const {
        meta: { requestStatus },
      } = await dispatch(movieAsyncActions.removeMovieFromWatchLater(movie.id));
      removeFromMenuReqCheck({ dispatch, requestStatus, movies, movie, key: 'key' });
    }
  };

  const RemoveFromFavorite = () => {
    return (
      <S.RemoveFromFavoriteBtn onClick={onBtnClick}>
        <S.RemoveFromFavoriteBackground></S.RemoveFromFavoriteBackground>
        <S.RemoveFromFavoriteImg></S.RemoveFromFavoriteImg>
      </S.RemoveFromFavoriteBtn>
    );
  };

  const RemoveFromWatchLater = () => {
    return (
      <S.RemoveFromWatchLBtn onClick={onBtnClick}>
        <S.RemoveFromWatchLBackground></S.RemoveFromWatchLBackground>
        <S.RemoveFromWatchLImg></S.RemoveFromWatchLImg>
      </S.RemoveFromWatchLBtn>
    );
  };

  if (type === 'favorite') {
    return <RemoveFromFavorite />;
  } else {
    return <RemoveFromWatchLater />;
  }
};
