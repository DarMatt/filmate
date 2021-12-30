import styled from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';

export const S: TypeStyle = {};

S.FavoriteTitle = styled.h2`
  margin-left: 42px;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #18c8ff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  @media (max-width: 1500px) {
    margin-left: 30px;
  }
  @media (max-width: 650px) {
    margin-left: 20px;
    font-size: 32px;
    line-height: 41px;
  }
  @media (max-width: 557px) {
    margin-left: 40px;
    font-size: 29px;
    line-height: 30px;
  }
  @media (max-width: 427px) {
    font-size: 25px;
    line-height: 24px;
    text-align: center;
  }
`;
