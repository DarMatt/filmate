import React from 'react';
import { useTranslation } from 'react-i18next';
import { SPACE_BETWEEN } from '../../CONST/display';
import { Pagination } from '../Pagination/Pagination';
import { S } from './styles';

const data = [1, 2, 3, 4];

export const Suggest: React.FC = () => {
  const { t } = useTranslation(['common']);

  return (
    <S.SuggestWrapper>
      <S.SuggestTitle>{t('also_like')}</S.SuggestTitle>
      <S.SuggestInnerCard></S.SuggestInnerCard>
      <S.SuggestPaginationInner>
        <Pagination data={data} display={SPACE_BETWEEN} />
      </S.SuggestPaginationInner>
    </S.SuggestWrapper>
  );
};
