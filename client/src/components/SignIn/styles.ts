import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperSignInStyled = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 24;
  background: rgba(52, 54, 74, 0.25);
  backdrop-filter: blur(5px);
`;

export const InnerSignInStyled = styled.div`
  position: fixed;
  top: calc(50% - 351.5px);
  left: calc(50% - 243px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 486px;
  height: 703px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColors.modalColor};
  z-index: 25;

  @media (max-width: 500px) {
    left: calc(50% - 180px);
    width: 360px;
    height: 600px;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    > label {
      position: relative;
      > span {
        position: absolute;
        top: 22.5px;
        left: 11px;
        z-index: 1;
        color: ${({ theme }) => theme.textColors.modalColorPlaceholder};
      }
    }
  }
`;

export const TitleStyled = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 500px) {
    margin-top: 60px;
  }
`;

export const CloseBtnStyled = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 15px;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  border: none;
  outline: none;
  z-index: 5;
  cursor: pointer;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    transform: rotate(45deg);
    background-color: #2e2e2e;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 2px;
    height: 30px;
    transform: rotate(45deg);
    background-color: #2e2e2e;
  }
`;

export const EmailInputStyled = styled.input`
  display: block;
  width: 358px;
  height: 60px;
  padding-left: 40px;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  @media (max-width: 500px) {
    width: 300px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.backgroundColors.modalColorPlaceholder};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SubmitBtnStyled = styled.button`
  display: block;
  width: 358px;
  height: 60px;
  margin-top: 10px;
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.095em;
  color: #fff;
  background: #2e2e2e;
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const SubTitleStyled = styled.div`
  margin-top: 20px;
  color: white;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.03em;
`;

export const TitleBtnStyled = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
`;

export const LinkClickStyled = styled(Link)`
  display: block;
  width: 358px;
  height: 60px;
  margin-top: 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.textColors.popupColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-size: 18px;
  line-height: 60px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.095em;
  color: ${({ theme }) => theme.textColors.popupColor};
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const InputValidationStyledStyled = styled.div`
  position: absolute;
  bottom: -18px;
  width: 370px;
  font-size: 14px;
  color: #cc4e5c;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
`;
