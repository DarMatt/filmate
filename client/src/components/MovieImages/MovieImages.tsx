import React, { useEffect, useState } from 'react';
import { getMovieImages } from '../../api/api';
import { getImgUrl } from '../../api/URLs';
import { IMovieImages } from '../../interfaces/movieImages';
import { Pagination } from '../Pagination/Pagination';
import { S } from './styles';
import useWindowDimensions from '../../hooks/useVieWport';
import { CENTER } from '../../CONST/display';
import { useTranslation } from 'react-i18next';

export const MovieImages: React.FC<{ id: string }> = (id) => {
  const [images, setImages] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const { width } = useWindowDimensions();
  const { t } = useTranslation(['common']);

  useEffect(() => {
    width < 767
      ? width < 650
        ? width <= 510
          ? setPageSize(2)
          : setPageSize(3)
        : setPageSize(4)
      : setPageSize(5);
  }, [width]);

  useEffect(() => {
    console.log('inside movieImg');
    getMovieImages(id.id).then((res) => {
      setImages(
        res.posters
          .filter((el: IMovieImages) => el.iso_639_1 === 'en')
          .map((el) => getImgUrl(`original${el.file_path}`))
      );
    });
  }, []);

  const onPageIndex = (index: number) => {
    setPageIndex(index);
  };

  return (
    <S.ImagesWrapper>
      <div>
        {images.slice(pageIndex, pageIndex + pageSize).map((el) => (
          <S.Images src={el} key={el} />
        ))}
      </div>
      <S.ImagesTitle>{t('photos')}</S.ImagesTitle>
      <Pagination
        display={CENTER}
        index={pageIndex}
        total={images.length}
        onPageIndex={onPageIndex}
        pageSize={pageSize}
      />
    </S.ImagesWrapper>
  );
};
