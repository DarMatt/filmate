import React, { MutableRefObject, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from './data.json';
import { S } from './styles';
import { DEFAULT_LOCALE, EN, RU } from '../../CONST/locales';
import { LOCALE } from '../../CONST/key-localStorage';
import { getSideBarStatusSelector, getThemeSelector } from '../../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSideBarStatus, setTheme } from '../../redux-slices/manager-ui-slice';
import { signOut } from '../../redux-slices/auth-slice';
import { CrossStyle, HamburgerStyle, MenuToggleStyle } from '../Header/styles';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';

export const Sidebar: React.FC<any> = () => {
  const pathname = window.location.pathname;
  const match = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const storageTheme = useAppSelector(getThemeSelector);
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation('common');
  const openMenu = useAppSelector(getSideBarStatusSelector);
  const { innerBorderRef } = useOnOutsideClick(() => dispatch(setSideBarStatus(false)));

  const toSwitchLang = () => {
    i18n.changeLanguage(lang === EN ? RU : EN);
  };

  const toSwitchTheme = () => {
    dispatch(setTheme(!storageTheme));
  };

  const applyLink = (arg: string) => {
    if (arg === 'log-out') {
      dispatch(signOut());
      history.push('/');
    }
  };

  const findeIndex = (url: string | string[]) => {
    return url.lastIndexOf('/') === -1 ? url : url.slice(0, url.lastIndexOf('/'));
  };

  return (
    <S.SidebarWrapper ref={innerBorderRef} hideMenu={openMenu ? '0' : '-100%'}>
      <div>
        <S.LogoStyled onClick={() => history.push(match.pathname)}></S.LogoStyled>
        <MenuToggleStyle
          onClick={() => {
            dispatch(setSideBarStatus(!openMenu));
          }}
          burger={openMenu ? '170px' : '0'}
          burgerSmall={openMenu ? '148px' : '0'}
          id="menu-toggle"
        >
          <HamburgerStyle line={openMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerStyle>
          <CrossStyle arrow={openMenu}>
            <span></span>
            <span></span>
          </CrossStyle>
        </MenuToggleStyle>
        <S.MenuList>
          {data.map((el) => (
            <S.MenuItem
              onClick={() => {
                applyLink(el.link);
              }}
              key={el.link}
            >
              <S.MenuLink
                onClick={() => dispatch(setSideBarStatus(false))}
                activediv={pathname.match(`${findeIndex(el.link)}`)}
                to={`/${el.link}`}
              >
                <div></div>
                <S.MenuIcon
                  activediv={pathname.match(`${findeIndex(el.link)}`)}
                  className={el.icon}
                ></S.MenuIcon>
                <S.MenuTitle>{t(el.title)}</S.MenuTitle>
              </S.MenuLink>
            </S.MenuItem>
          ))}
        </S.MenuList>
        <S.SwitchInner>
          <S.SwitchOne onChange={toSwitchLang} lang={lang} htmlFor="switch-one">
            <input id="switch-one" type="checkbox" defaultChecked={lang === 'en'} />
            <span className="slider round"></span>
          </S.SwitchOne>
          <S.SwitchTwo onChange={toSwitchTheme} switchColor={storageTheme} htmlFor="switch-two">
            <input id="switch-two" type="checkbox" defaultChecked={storageTheme} />
            <span className="slider round"></span>
          </S.SwitchTwo>
        </S.SwitchInner>
      </div>
    </S.SidebarWrapper>
  );
};
