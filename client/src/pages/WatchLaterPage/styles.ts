import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TypeStyle } from '../../interfaces/styleType';

export const S: TypeStyle = {};

S.WatchLaterPageTitle = styled.h2`
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColors.menuTitleColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  @media (max-width: 1400px) {
    font-size: 34px;
  }
  @media (max-width: 1090px) {
    font-size: 31px;
    margin-bottom: 20px;
  }
`;

S.PageTabsWrapper = styled.div`
  margin-left: 30px;
`;

S.WatchLaterPageTabs = styled(Link)`
  margin-right: 31px;
  text-decoration: none;
  font-size: 24px;
  line-height: 29px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${(props: { activetab: string }) => (props.activetab ? '#18C8FF' : '#000')};
  font-weight: ${(props: { activetab: string }) => (props.activetab ? 'bold' : 'normal')};
  text-transform: ${(props: { activetab: string }) => (props.activetab ? 'uppercase' : 'normal')};
  @media (max-width: 1400px) {
    font-size: 23px;
  }
  @media (max-width: 1090px) {
    font-size: 21px;
  }
`;
