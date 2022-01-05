import React, { useEffect, useRef, useState } from 'react';
import { IWatchLaterProps } from '../../interfaces/AddToMenu';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';
import { S } from './styles';
import data from './data.json';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMovieSelector } from '../../selectors/selectors';
import { movieAsyncActions, setMovies } from '../../redux-slices/movie-slice';
import { HTTP_FULFILLED_STATUS, HTTP_REJECTED_STATUS } from '../../CONST/http-request-status';
import { ErrorAlertAndRedirect, Toast } from '../Swal';
import { addToMenuReqCheck } from '../../utils/helpers';

export const AddToWatchLater: React.FC<IWatchLaterProps> = ({
  onCloseWatchLModal,
  onCloseAddToModal,
  cursorPosition,
  modalBtnWidth,
  size,
  position,
  movie,
}) => {
  const { innerBorderRef } = useOnOutsideClick(() => onCloseWatchLModal());
  const btn = data.watch_later;
  const { title, actions } = btn.config;
  const [modalWidth, setModalWidth] = useState(0);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMovieSelector);

  const onBtnClick = async (key: string) => {
    const {
      meta: { requestStatus },
    } = await dispatch(
      movieAsyncActions.addMovieToWatchLater(
        JSON.parse(JSON.stringify(movie), (k, value) => (k === key ? true : value))
      )
    );
    onCloseWatchLModal();
    onCloseAddToModal();
    addToMenuReqCheck({ dispatch, requestStatus, movies, movie, key });
  };

  useEffect(() => {
    const modalElement = innerBorderRef.current;
    if (modalElement) {
      setModalWidth(modalElement.offsetWidth);
    }
  }, []);

  return (
    <>
      <S.WatchLaterInner
        cursorPosition={cursorPosition}
        modalBtnWidth={modalBtnWidth}
        modalWidth={modalWidth}
        size={size}
        ref={innerBorderRef}
        position={position}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <S.WatchTitle size={size}>{title}</S.WatchTitle>
        {actions.map((btn) => (
          <S.WatchLaterBtn size={size} key={btn.id} onClick={() => onBtnClick(btn.id)}>
            <S.WatchLaterTitle size={size}>{btn.title}</S.WatchLaterTitle>
          </S.WatchLaterBtn>
        ))}
      </S.WatchLaterInner>
    </>
  );
};
