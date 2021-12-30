import styled from 'styled-components';

export const WrapperStyled = styled.div`
  background-color: ${({theme}) => theme.backgroundColors.headerColor};
  height: 105px;
  text-align: center;
  line-height: 105px;
  margin-top: 100px;
`;

export const TitleStyled = styled.span`
  font-size: 15px;
  line-height: 34px;
  color: #00b2ff;
  font-family: Montserrat;
`;
