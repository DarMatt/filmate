import React, { useState } from 'react';
import { S } from './style';
import { AddToMenu } from '../AddToMenu/AddToMenu';
import { UiSize } from '../../enums/UiSize';
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
  const movies = useAppSelector<IMovieCard[]>(getMovieSelector);
  const [index, setIndex] = useState(0);
  const movie = movies ? movies[index] : initialMovieState;
  const { t } = useTranslation(['common']);
  const img = getImgUrl(`original${movie?.backdrop_path}`);

  const setMainImg = () => {
    setIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {!movies.length ? (
        <Skeleton type={'preview'} />
      ) : (
        <S.PreviewWrapper url={img} className="preview">
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
            {/* <S.PreviewArrow position={'bottom'} className="icon-next-right-arrow"></S.PreviewArrow> */}
          </S.PreviewInner>
        </S.PreviewWrapper>
      )}
    </>
  );
};
