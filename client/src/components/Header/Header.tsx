import React, { MutableRefObject, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Settings } from '../Settings/Settings';
import { useHistory } from 'react-router-dom';
import {
  HeaderNavStyled,
  FlexForHeaderStyled,
  LogoSearchInnerStyled,
  LogoStyled,
  MenuToggleStyle,
  HamburgerStyle,
  CrossStyle,
  SearchStyled,
  SearchBtnStyle,
  SignInBtnStyled,
  UserImgStyled,
  LinkStyled,
  ChatIconStyle,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAuthStatusSelector, getSideBarStatusSelector } from '../../selectors/selectors';
import { ERoutes, ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routes/routes';
import { useTranslation } from 'react-i18next';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { useDebounce } from '../../hooks/useDebounced';
import { setSideBarStatus } from '../../redux-slices/manager-ui-slice';

interface IHeaderProps {
  openSearch: boolean;
  setOpenSearch: Function;
}

export const Header: React.FC<IHeaderProps> = ({ openSearch, setOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const match = useLocation();
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = useAppSelector(getAuthStatusSelector);
  const openMenu = useAppSelector(getSideBarStatusSelector);
  const history = useHistory();
  const setOpenModal = () => setIsOpen(!isOpen);
  const { t } = useTranslation(['common']);
  console.log('MODAL-OPEN', isOpen);
  console.log('isAuthenticated', isAuthenticated);
  const debouncedSearchTerm = useDebounce(value, 1300);

  useEffect(() => {
    console.log('IM ISIDE debouncedSearchTerm');
    dispatch(movieAsyncActions.setSearchMovies(value));
  }, [debouncedSearchTerm]);

  return (
    <>
      <HeaderNavStyled>
        <FlexForHeaderStyled>
          <LogoSearchInnerStyled>
            <LogoStyled onClick={() => history.push(match.pathname)}></LogoStyled>
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
            <SearchStyled
              value={value}
              indent={openSearch}
              placeholder={t('search')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            />
            <SearchBtnStyle
              onClick={() => {
                setOpenSearch(!openSearch);
              }}
            ></SearchBtnStyle>
          </LogoSearchInnerStyled>
          {!isAuthenticated ? (
            <Link to={{ pathname: match.pathname, search: ROUTE_LOGIN_PAGE }}>
              <SignInBtnStyled>{t('sign_in')}</SignInBtnStyled>
            </Link>
          ) : (
            <>
              <ChatIconStyle />
              <UserImgStyled onClick={() => setIsOpen(!isOpen)} className="icon-Profile">
                <span className="path1"></span>
                <span className="path2"></span>
              </UserImgStyled>
            </>
          )}
          {isOpen && <Settings setOpenModal={setOpenModal} />}
        </FlexForHeaderStyled>
      </HeaderNavStyled>
    </>
  );
};
