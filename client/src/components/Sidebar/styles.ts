import styled from 'styled-components';
import { Link } from 'react-router-dom';
import day from '../../assets/images/day.png';
import backDay from '../../assets/images/backDay.png';
import night from '../../assets/images/night.png';
import backNight from '../../assets/images/backNight.png';
import logo from '../../assets/images/logo.png';

export const S: { [key: string]: any } = {};

S.SidebarWrapper = styled.nav`
  width: 300px;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};
  /* border-right: 2px solid #a3e4ff; */
  @media (max-width: 1380px) {
    width: 280px;
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
  > div {
    min-width: 259.141px;
    position: sticky;
    top: 150px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    @media (max-width: 1380px) {
      min-width: 230px;
      top: 125px;
    }
    @media (max-width: 1200px) {
      top: 105px;
      min-width: 200px;
    }
  }
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 16;
    top: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.6s;
    transform: translate(${(props: { hideMenu: string }) => props.hideMenu});
    @media (max-width: 1200px) {
      z-index: 18;
    }
  }
`;

S.LogoStyled = styled.img.attrs<string>({
  src: logo,
})`
  position: relative;
  z-index: 5;
  display: none;
  width: 167px;
  height: 54px;

  @media (max-width: 1024px) {
    position: absolute;
    top: -84px;
    display: block;
    margin-left: 28px;
    width: 147px;
    height: 45px;
  }

  @media (max-width: 369px) {
    width: 117px;
    height: 34px;
    top: -77px;
  }
`;

S.MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 15px 50px 40px;
  gap: 42px;
  overflow: hidden;
  @media (max-width: 1380px) {
    gap: 32px;
  }
  @media (max-width: 1200px) {
    padding-left: 30px;
  }
`;

S.MenuItem = styled.li`
  position: relative;
  list-style-type: none;

  &:nth-child(4) {
    margin-bottom: 40px;
    @media (max-height: 900px) {
      margin-bottom: 20px;
    }
  }

  &:last-child {
    margin-top: 40px;
    @media (max-height: 900px) {
      margin-top: 20px;
    }
  }
`;

S.MenuLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;

  > div {
    position: absolute;
    top: calc(50% - 2px);
    left: -41px;
    background: ${(props: { activediv: string; theme: any }) =>
      props.activediv ? props.theme.textColors.activeIconColor : 'transparent'};
    border-radius: 0px 5px 5px 0px;
    width: 11px;
    height: 4px;
    @media (max-width: 1200px) {
      left: -30px;
    }
  }
`;

S.MenuIcon = styled.span`
  font-size: 30px;
  color: ${(props: { activediv: string; theme: any }) =>
    props.activediv ? props.theme.textColors.activeIconColor : props.theme.textColors.iconColor};

  @media (max-width: 1380px) {
    font-size: 24px;
  }
`;

S.MenuTitle = styled.span`
  margin-left: 20px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColors.sidebarColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  text-transform: capitalize;
  @media (max-width: 1380px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

S.SwitchInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px 30px;
  gap: 20px;
`;

S.SwitchOne = styled.label`
  position: relative;
  display: inline-block;
  width: 85px;
  height: 42px;
  @media (max-width: 1380px) {
    width: 80px;
    height: 35px;
  }

  > input {
    display: none;

    &:checked + .slider {
      background-color: #dadada;
      opacity: 0.7;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #dadada;
      opacity: 0.7;
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(43px);
      -ms-transform: translateX(43px);
      transform: translateX(43px);
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #efefef;
    /* Switch - in shadow */

    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      content: '${(props: { lang: string }) => props.lang}';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      top: 7px;
      left: 7px;
      height: 28px;
      width: 28px;
      background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
      filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #18c8ff;
      font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
      @media (max-width: 1380px) {
        height: 22px;
        width: 23px;
        font-size: 11px;
        line-height: 16px;
      }
    }
  }
`;

S.SwitchTwo = styled.label`
  position: relative;
  display: inline-block;
  width: 85px;
  height: 42px;

  @media (max-width: 1380px) {
    width: 80px;
    height: 35px;
  }

  > input {
    display: none;

    &:checked + .slider {
      background-color: #dadada;
      opacity: 0.7;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #dadada;
      opacity: 0.7;
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(43px);
      -ms-transform: translateX(43px);
      transform: translateX(43px);
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    background: url(${(props: { switchColor: boolean }) =>
      props.switchColor ? backDay : backNight});
    background-position: center;
    background-size: cover;

    &:before {
      content: '';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 7px;
      left: 7px;
      height: 28px;
      width: 28px;
      background: url(${(props: { switchColor: boolean }) => (props.switchColor ? day : night)});
      background-position: center;
      background-size: cover;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      @media (max-width: 1380px) {
        height: 22px;
        width: 23px;
        font-size: 11px;
        line-height: 16px;
      }
    }
  }
`;
