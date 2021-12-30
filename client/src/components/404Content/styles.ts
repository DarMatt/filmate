import styled from 'styled-components';
import bc404 from '../../assets/images/bg-404.svg';
import mobile404 from '../../assets/images/mobile-bc-404.svg';
import { Link } from 'react-router-dom';
import { TypeStyle } from '../../interfaces/styleType';

type IProps = {
  isHidden: boolean;
};

export const S: TypeStyle = {};

export const WrapperContent = styled.div<IProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;

S.MainWrapperContent404 = styled.section`
  background-image: url(${bc404});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  margin-bottom: -20px;
  @media (max-width: 720px) {
    background-image: url(${mobile404});
  }
`;

S.WrapperImage404 = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 200px;
  margin-bottom: 40px;
  @media (max-width: 720px) {
    width: 400px;
  }
  @media (max-width: 720px) {
    width: auto;
  }
`;

S.Img = styled.img`
  width: 100%;
`;

S.Typography = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: #fff;
  font-size: 19px;
  margin-bottom: 10px;

  &.request {
    color: #73839a;
    font-size: 16px;
  }
  @media (max-width: 550px) {
    overflow-wrap: break-word;
    margin: 0 40px 10px;
  }
`;

S.BackToHome = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 10px;
  background: #73839a;
  border: none;
  font-family: Montserrat;
  font-size: 18px;
  line-height: 22px;
  color: #dde3f9;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.1);
`;
