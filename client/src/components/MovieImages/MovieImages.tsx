import React, { useEffect, useState } from 'react';
import { getMovieImages } from '../../api/api';
import { getImgUrl } from '../../api/URLs';
import { IMovieImages } from '../../interfaces/movieImages';
import { Pagination } from '../Pagination/Pagination';
import { S } from './styles';
import useWindowDimensions from '../../hooks/useVieWport';

export const MovieImages: React.FC<{ id: string }> = (id) => {
  const [images, setImages] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const { width } = useWindowDimensions();
  const display = 'center';
  console.log(pageSize);
  useEffect(() => {
    console.log(width);
    width < 767
      ? width < 650
        ? width <= 510
          ? setPageSize(2)
          : setPageSize(3)
        : setPageSize(4)
      : setPageSize(5);
  }, [width]);

  useEffect(() => {
    getMovieImages(id.id).then((res) => {
      setImages(
        res.posters
          .filter((el: IMovieImages) => el.iso_639_1 === 'en')
          .map((el) => getImgUrl(`original${el.file_path}`))
      );
    });
  }, [id]);

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
      <S.ImagesTitle>Photos</S.ImagesTitle>
      <Pagination
        display={display}
        index={pageIndex}
        total={images.length}
        onPageIndex={onPageIndex}
        pageSize={pageSize}
      />
    </S.ImagesWrapper>
  );
};
