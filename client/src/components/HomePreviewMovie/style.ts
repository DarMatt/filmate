import styled, { keyframes } from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';

type IProps = {
  position: string;
};

export const S: TypeStyle = {};

S.PreviewWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 671px;
  background: url(${(props: { url: string }) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-left: -20px;
  padding: 0 30px;
  transition: background 0.2s ease-in-out;
  -webkit-transition: background 0.3s ease-in-out;
  @media (max-width: 1380px) {
    height: 490px;
    padding: 0 15px;
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }
`;

S.RemoveFromMenuInner = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  cursor: pointer;
  top: -1px;
  z-index: 10;
`;

S.PreviewInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 50px 50px;
`;

S.PreviewContent = styled.div`
  width: 100%;
`;

S.ContentTitle = styled.h2`
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.04em;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  text-transform: uppercase;
  font-weight: bold;
  @media (max-width: 1380px) {
    font-size: 33px;
    line-height: 41px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 39px;
  }
  @media (max-width: 820px) {
    font-size: 27px;
    line-height: 26px;
  } ;
`;

S.BtnsInner = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  > span {
    font-size: 60px;
    align-self: end;
    margin-left: 20px;
  }
`;

S.ContentBtnWatch = styled.button`
  padding: 19px 60px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  @media (max-width: 1380px) {
    padding: 14px 50px;
  }
  @media (max-width: 1200px) {
    padding: 10px 40px;
  }
`;
S.ContentBtnAdd = styled.button`
  padding: 15px;
  background-color: rgba(255, 255, 255, 20%);
  margin-left: 30px;
  border: none;
  border-radius: 10px;
`;

S.PreviewSwap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  > div {
    padding-right: 30px;
    @media (max-width: 1200px) {
      padding-right: 15px;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media (max-width: 732px) {
    display: none;
  }
`;

S.ContentImg = styled.img`
  width: 180px;
  height: 120px;
  border-radius: 5px;
  @media (max-width: 1380px) {
    width: 160px;
    height: 110px;
  }
  @media (max-width: 1200px) {
    width: 125px;
    height: 90px;
  }
`;

S.ContentText = styled.div`
  padding-top: 10px;
  color: #d9d9d9;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  line-height: 21px;
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

S.PreviewArrow = styled.span<IProps>`
  position: absolute;
  display: inline-block;
  font-size: 45px;
  right: 28px;
  bottom: 17px;
  cursor: pointer;
  transition: transform 0.6s;
  color: white;
  top: ${({ position }) => (position === 'top' ? '17px' : 'auto')};
  bottom: ${({ position }) => (position === 'bottom' ? '17px' : 'auto')};
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    font-size: 35px;
  }

  @media (max-width: 732px) {
    display: none;
  }
`;
