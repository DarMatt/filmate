import React from 'react';
import { IPaginationProps } from '../../interfaces/pagination';
import { S } from './style';

export const Pagination: React.FC<IPaginationProps> = ({
  display,
  index,
  total,
  onPageIndex,
  pageSize,
}) => {
  const pageNums = Array(5)
    .fill(0)
    .map((num: number, i: number) => Math.max(index - 1, 1) + i + Math.min(total - index - 3, 0))
    .filter((i) => i > 0 && i <= total - pageSize);
  console.log('total', total);
  console.log('pageSize', pageSize);
  console.log('index', index);
  return (
    <>
      {!(total <= pageSize) && (
        <S.PaginationWrapper display={display}>
          <S.ArrowLeftBtn disable={index === 0}>
            <span className="icon-arrows_double_left" onClick={() => onPageIndex(0)}></span>
            <span className="icon-left-arrow" onClick={() => onPageIndex(index - 1)}></span>
          </S.ArrowLeftBtn>
          {pageNums[0] > 1 && (
            <S.EllipBtn onClick={() => onPageIndex(Math.max(pageNums[0] - 4, 0))}>...</S.EllipBtn>
          )}
          <S.PagesNumberInner>
            {pageNums.map((i) => (
              <S.PagesNumber key={i} isActive={index + 1 === i}>
                {i}
              </S.PagesNumber>
            ))}
          </S.PagesNumberInner>
          {pageNums[pageNums.length - 1] < total - pageSize - 1 && (
            <S.EllipBtn
              onClick={() => onPageIndex(Math.min(pageNums[pageNums.length - 1] + 2, total - 1))}
            >
              ...
            </S.EllipBtn>
          )}
          <S.ArrowRightBtn disable={index === total - pageSize || pageSize >= total}>
            <span className="icon-right-arrow" onClick={() => onPageIndex(index + 1)}></span>
            <span
              className="icon-arrows_double"
              onClick={() => onPageIndex(total - pageSize - 1)}
            ></span>
          </S.ArrowRightBtn>
        </S.PaginationWrapper>
      )}
    </>
  );
};
