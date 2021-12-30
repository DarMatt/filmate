import styled from 'styled-components';

export const S: any = {};

S.SuggestWrapper = styled.section`
  padding: 100px 80px;

  @media (max-width: 1386px) {
    padding: 50px 80px;
  }
`;
S.SuggestTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  text-align: center;

  @media (max-width: 1386px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
S.SuggestInnerCard = styled.div``;
S.SuggestPaginationInner = styled.div`
  width: 100%;
`;
