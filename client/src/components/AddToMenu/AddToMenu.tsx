import React, { useCallback, useEffect, useRef, useState } from 'react';
import { S } from './styles';
import data from './data.json';
import { AddToWatchLater } from './AddToWatchLater';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';
import { UiSize } from '../../enums/UiSize';
import { IMovieCard } from '../../interfaces/movieCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMovieSelector } from '../../selectors/selectors';
import { useHistory } from 'react-router';
import { AddToFavorite } from './AddToFavorite';
import { isSomeKeyTrue, ToastError } from '../../utils/helpers';
import done from '../../assets/images/done.svg';
import { useTranslation } from 'react-i18next';

interface IProps {
  movie: IMovieCard;
  size: UiSize;
  position?: string;
}

// eslint-disable-next-line react/display-name
export const AddToMenu: React.FC<IProps> = React.memo(({ movie, size, position }) => {
  const [isOpenAddTo, setIsOpenAddTo] = useState(false);
  const [isOpenWatchLater, setOpenWatchLater] = useState<boolean>(false);
  const { innerBorderRef } = useOnOutsideClick(() => setIsOpenAddTo(false));
  const [modalWidth, setModalWidth] = useState(0);
  const [modalBtnWidth, setModalBtnWidth] = useState(0);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const btnWL = data.watch_later;
  const isWL = movie?.isWatchLater && isSomeKeyTrue(movie?.isWatchLater);
  const modalRef = useRef<HTMLElement>();
  const btnRef = useRef<HTMLElement>();
  const isAdded = isWL && movie.isFavorite;
  const { t } = useTranslation(['common']);

  useEffect(() => {
    const modalElement = modalRef.current;
    const btnElement = btnRef.current;
    if (modalElement) {
      setModalWidth(modalElement.offsetWidth);
    }
    setModalBtnWidth(btnElement?.offsetWidth!);
  }, [isOpenAddTo]);

  const getClickPosition = useCallback((event: { clientX: any }) => {
    const { clientX } = event;
    const { innerWidth } = window;
    setCursorPosition(innerWidth - clientX);
  }, []);
  const onCloseAddToModal = () => {
    setIsOpenAddTo(false);
  };
  const onWatchLModal = () => {
    setIsOpenAddTo(!isOpenAddTo);
    if (isWL) {
      ToastError();
      return;
    }
    setOpenWatchLater(!isOpenWatchLater);
  };

  return (
    <>
      {isAdded ? (
        <span className="icon-done">
          <span className="path1"></span>
          <span className="path2"></span>
        </span>
      ) : (
        <S.AddMenuInner ref={innerBorderRef} onClick={getClickPosition}>
          <S.ContentBtnAdd
            id={`btn-modal${movie?.id}`}
            isOpen={isOpenAddTo}
            ref={btnRef}
            isOpenWatchLater={isOpenWatchLater}
            size={size}
            onClick={(e: any) => {
              setIsOpenAddTo(!isOpenAddTo);
            }}
          >
            {isOpenAddTo && (
              <S.AddMenuWrapper
                ref={modalRef}
                cursorPosition={cursorPosition}
                size={size}
                modalWidth={modalWidth}
                modalBtnWidth={modalBtnWidth}
                position={position}
                onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
              >
                <S.AddToTitle size={size}>{t('add_movie_to')}</S.AddToTitle>
                <S.BtnInner size={size}>
                  <AddToFavorite size={size} movie={movie} onCloseAddToModal={onCloseAddToModal} />
                  <S.AddMenuBtn size={size} disable={isWL} onClick={onWatchLModal}>
                    <S.BtnIcon className={btnWL.icon} size={size}></S.BtnIcon>
                    <S.BtnMenuTitle size={size}>{t(btnWL.title)}</S.BtnMenuTitle>
                  </S.AddMenuBtn>
                </S.BtnInner>
              </S.AddMenuWrapper>
            )}
            {isOpenWatchLater && (
              <AddToWatchLater
                size={size}
                cursorPosition={cursorPosition}
                modalBtnWidth={modalBtnWidth}
                onCloseWatchLModal={onWatchLModal}
                onCloseAddToModal={onCloseAddToModal}
                position={position}
                movie={movie}
              />
            )}
            <span className="icon-add-plus"></span>
          </S.ContentBtnAdd>
        </S.AddMenuInner>
      )}
    </>
  );
});
