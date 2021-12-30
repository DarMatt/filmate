import React from 'react';
import { Pagination } from '../Pagination/Pagination';
import { S } from './styles';

const data = [1, 2, 3, 4];

export const Suggest: React.FC = () => {
  const display = 'space-between';
  return (
    <S.SuggestWrapper>
      <S.SuggestTitle>You may also like</S.SuggestTitle>
      <S.SuggestInnerCard></S.SuggestInnerCard>
      <S.SuggestPaginationInner>
        <Pagination data={data} display={display} />
      </S.SuggestPaginationInner>
    </S.SuggestWrapper>
  );
};
