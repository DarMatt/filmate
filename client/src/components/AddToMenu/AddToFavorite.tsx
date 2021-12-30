import React from 'react';
import { useTranslation } from 'react-i18next';
import { HTTP_FULFILLED_STATUS, HTTP_REJECTED_STATUS } from '../../CONST/http-request-status';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IMovieCard } from '../../interfaces/movieCard';
import { movieAsyncActions, setMovies } from '../../redux-slices/movie-slice';
import { getMovieSelector } from '../../selectors/selectors';
import { addToMenuReqCheck, ToastError } from '../../utils/helpers';
import { ErrorAlertAndRedirect, Toast } from '../Swal';
import data from './data.json';
import { S } from './styles';
type IFavorite = {
  size: string;
  movie: IMovieCard;
  onCloseAddToModal: Function;
};

export const AddToFavorite: React.FC<IFavorite> = ({ size, movie, onCloseAddToModal }) => {
  const btn = data.favorite;
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMovieSelector);
  const { t } = useTranslation(['common']);

  const onBtnClick = async () => {
    if (movie.isFavorite) {
      ToastError();
    } else {
      const {
        meta: { requestStatus },
      } = await dispatch(movieAsyncActions.addMovieToFavorite({ ...movie, isFavorite: true }));
      addToMenuReqCheck({ dispatch, requestStatus, movies, movie });
    }
    onCloseAddToModal();
  };

  return (
    <S.AddMenuBtn size={size} disable={movie.isFavorite} key={btn.id} onClick={onBtnClick}>
      <S.BtnIcon className={btn.icon} size={size}></S.BtnIcon>
      <S.BtnMenuTitle size={size}>{t(btn.title)}</S.BtnMenuTitle>
    </S.AddMenuBtn>
  );
};
