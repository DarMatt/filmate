import styled from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';

export const S: TypeStyle = {};

S.WrapperStyle = styled.section`
  position: relative;
  max-width: 1945px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  background: #f9faff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 32%);
`;

S.Line = styled.div`
  position: absolute;
  width: 1px;
  top: 0;
  bottom: 0;
  z-index: 18;
  left: 258px;
  background: ${({ theme }) => theme.backgroundColors.lineColor};
  @media (max-width: 1380px) {
    left: 229px;
  }
  @media (max-width: 1200px) {
    left: 199px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

S.InnerStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

S.WrapperRouters = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.backgroundColors.mainColor};
  @media (max-width: 405px) {
    padding-left: 10px;
  }
`;
