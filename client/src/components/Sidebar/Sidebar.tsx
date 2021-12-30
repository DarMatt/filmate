import React, { MutableRefObject, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from './data.json';
import { S } from './styles';
import { DEFAULT_LOCALE, EN, RU } from '../../CONST/locales';
import { LOCALE } from '../../CONST/key-localStorage';
import { getSideBarStatusSelector, getThemeSelector } from '../../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTheme } from '../../redux-slices/manager-ui-slice';
import { signOut } from '../../redux-slices/auth-slice';

export const Sidebar: React.FC<any> = () => {
  const [switchTwo, setSwitchTwo] = useState<boolean>(true);
  const [link, setLink] = useState<string>('');
  const pathname = window.location.pathname;
  const match = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const storageTheme = useAppSelector(getThemeSelector);
  const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation('common');
  const openMenu = useAppSelector(getSideBarStatusSelector);
  const toSwitchLang = () => {
    i18n.changeLanguage(lang === EN ? RU : EN);
  };
  const toSwitchTheme = () => {
    dispatch(setTheme(!storageTheme));
  };
  const applyLink = (arg: string) => {
    setLink(arg);
    console.log('arg', arg);
    if (arg === 'log-out') {
      dispatch(signOut());
      history.push('/');
    }
  };
  console.log('LANGUAGE', lang);
  return (
    <S.SidebarWrapper hideMenu={openMenu ? '0' : '-100%'}>
      <div>
        <S.LogoStyled onClick={() => history.push(match.pathname)}></S.LogoStyled>
        <S.MenuList>
          {data.map((el) => (
            <S.MenuItem
              onClick={() => {
                applyLink(el.link);
              }}
              key={el.link}
            >
              <S.MenuLink activediv={pathname.match(`${el.link}`)} to={`/${el.link}`}>
                <div></div>
                <S.MenuIcon
                  activediv={pathname.match(`${el.link}`)}
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
