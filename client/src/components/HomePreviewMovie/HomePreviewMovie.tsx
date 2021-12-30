import React, { useCallback, useEffect, useState } from 'react';
import { S } from './style';
import data from './data.json';
import { AddToMenu } from '../AddToMenu/AddToMenu';
import { UiSize } from '../../enums/UiSize';
import { getPosition, IPositionProps, positionInitialState } from '../../hooks/useCursorPosition';
import { useAppSelector } from '../../hooks/redux';
import { getMovieSelector } from '../../selectors/selectors';
import { getImgUrl } from '../../api/URLs';
import { IMovieCard } from '../../interfaces/movieCard';
import { initialMovieState } from '../MovieDetails/MovieDetails';
import { useTranslation } from 'react-i18next';
import { RemoveFromMenu } from '../RemoveFromMenu/RemoveFromMenu';
import { isSomeKeyTrue } from '../../utils/helpers';
import { Skeleton } from '../Skeleton/Skeleton';

export const HomePreviewMovie: React.FC = () => {
  // const [cursorPosition, setCursorPosition] = useState<IPositionProps>(positionInitialState);
  const movies = useAppSelector<IMovieCard[]>(getMovieSelector);
  // const [movie, setMovie] = useState<IMovieCard>(movies[0]);
  const [index, setIndex] = useState(0);
  const movie = movies ? movies[index] : initialMovieState;
  const { t } = useTranslation(['common']);
  const img = getImgUrl(`original${movie?.backdrop_path}`);
  // const searchElement = useCallback((event: any) => {
  //   setCursorPosition(getPosition(event));
  // }, []);
  // useEffect(() => {
  //   // const background = movies[index] && getImgUrl(`original${movies[index]?.backdrop_path}`);
  //   // movies[index] && setMovie({ ...movies[index], backdrop_path: background });
  //   const timeToShowComponent = setTimeout(() => {
  //     setIndex((prev) => (prev === movies.length ? 0 : prev + 1));
  //   }, 30000);
  //   return () => {
  //     clearTimeout(timeToShowComponent);
  //   };
  // }, [index, movies]);
  const setMainImg = () => {
    setIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };
  console.log('HomePreviewMovieMOVIE', movies[index]);
  console.log('INDEX', index);
  return (
    <>
      {!movies.length ? (
        <Skeleton type={'preview'} />
      ) : (
        <S.PreviewWrapper
          url={img}
          // onClick={(event: any) => {
          //   searchElement(event);
          // }}
          className="preview"
        >
          <S.RemoveFromMenuInner>
            {movie?.isFavorite && <RemoveFromMenu type="favorite" movie={movie} />}
            {movie?.isWatchLater && isSomeKeyTrue(movie?.isWatchLater) && (
              <RemoveFromMenu type="watchLater" movie={movie} />
            )}
          </S.RemoveFromMenuInner>
          <S.PreviewArrow
            position={'top'}
            className="icon-next-right-arrow"
            onClick={setMainImg}
          ></S.PreviewArrow>
          <S.PreviewInner>
            <S.PreviewContent>
              <S.ContentTitle>{movie?.title}</S.ContentTitle>
              <S.BtnsInner>
                <S.ContentBtnWatch>{t('watch')}</S.ContentBtnWatch>
                <AddToMenu movie={movie} size={UiSize.REGULAR} />
              </S.BtnsInner>
            </S.PreviewContent>
            {/* <S.PreviewSwap>
              {data.map((el) => (
                <div key={el.title}>
                  <S.ContentImg src={el.img}></S.ContentImg>
                  <S.ContentText>{el.title}</S.ContentText>
                </div>
              ))}
            </S.PreviewSwap> */}
            <S.PreviewArrow position={'bottom'} className="icon-next-right-arrow"></S.PreviewArrow>
          </S.PreviewInner>
        </S.PreviewWrapper>
      )}
    </>
  );
};
