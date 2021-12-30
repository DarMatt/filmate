import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StepWrapperStyle = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 25;
  background: rgba(52, 54, 74, 0.25);
  backdrop-filter: blur(5px);
`;

export const StepTwoLabelStyle = styled.label`
  position: relative;
`;

export const StepIcoonStyle = styled.span`
  position: absolute;
  top: 36px;
  right: 15px;
  z-index: 1;
  color: ${({ theme }) => theme.textColors.modalColorPlaceholder};
`;

export const StepIcoonClokStyle = styled.span`
  position: absolute;
  top: 113px;
  right: 15px;
  z-index: 1;
  color: ${({ theme }) => theme.textColors.modalColorPlaceholder};
`;

export const StepIcoonPasswordStyle = styled.span`
  position: absolute;
  top: 113px;
  right: 15px;
  z-index: 1;
  color: ${({ theme }) => theme.textColors.modalColorPlaceholder};
`;

export const PlusCloseStyle = styled.span`
  position: absolute;
  display: block;
  right: 15px;
  top: 15px;
  color: #000;
  font-size: 24px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const StepsBoxStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 20px;

  > div {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  }

  > button {
    border: none;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
    cursor: pointer;

    > span {
      position: relative;
      top: 3px;
      font-size: 22px;
    }
  }
`;

export const StepStartStyle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000;
`;

export const StepEndStyle = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #adadad;
`;

export const LinkStyledStyled = styled(Link)({
  textDecoration: 'none',
  fontFamily: 'Montserrat',
  color: '#6C6C6C',
  fontSize: '18px',
  lineHeight: '21px',
  paddingTop: '20px',
});
