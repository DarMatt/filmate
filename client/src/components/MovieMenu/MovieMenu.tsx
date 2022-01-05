import React, { useEffect, useState } from 'react';
import { S } from './styles';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { IMovieCard } from '../../interfaces/movieCard';
import { UiSize } from '../../enums/UiSize';
import { Pagination } from '../../components/Pagination/Pagination';
import useWindowDimensions from '../../hooks/useVieWport';
import { CENTER, FLEX_END } from '../../CONST/display';

type IProps = {
  children?: React.ReactNode;
  movies: IMovieCard[];
};

export const MovieMenu: React.FC<IProps> = ({ children, movies }) => {
  const { width } = useWindowDimensions();
  const [pageSize, setPageSize] = useState<number>(4);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    width < 767 ? (width < 558 ? setPageSize(2) : setPageSize(3)) : setPageSize(4);
  }, [width]);

  const onPageIndex = (index: number) => {
    setPageIndex(index);
  };

  return (
    <S.MenuWrapper>
      {children}
      <S.MenuList>
        {movies.slice(pageIndex, pageIndex + pageSize).map((movie, i) => (
          <S.MenuItem key={movie.id}>
            <MovieCard film={movie} size={i === 0 ? UiSize.LARGE : UiSize.COMPACT} />
          </S.MenuItem>
        ))}
      </S.MenuList>
      <S.PaginationInner>
        <Pagination
          display={width > 474 ? FLEX_END : CENTER}
          index={pageIndex}
          total={movies.length}
          onPageIndex={onPageIndex}
          pageSize={pageSize}
        />
      </S.PaginationInner>
    </S.MenuWrapper>
  );
};
