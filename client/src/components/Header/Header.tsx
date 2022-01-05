import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings } from '../Settings/Settings';
import { useHistory } from 'react-router-dom';
import {
  HeaderNavStyled,
  FlexForHeaderStyled,
  LogoSearchInnerStyled,
  LogoStyled,
  SearchStyled,
  SearchBtnStyle,
  SignInBtnStyled,
  UserImgStyled,
  ChatIconStyle,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAuthStatusSelector } from '../../selectors/selectors';
import { ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routes/routes';
import { useTranslation } from 'react-i18next';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { useDebounce } from '../../hooks/useDebounced';

interface IHeaderProps {
  openSearch: boolean;
  setOpenSearch: Function;
}

export const Header: React.FC<IHeaderProps> = ({ openSearch, setOpenSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const match = useLocation();
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(getAuthStatusSelector);
  const history = useHistory();
  const setOpenModal = () => setIsOpen(!isOpen);
  const { t } = useTranslation(['common']);
  const debouncedSearchTerm = useDebounce(value, 1300);

  useEffect(() => {
    dispatch(movieAsyncActions.setSearchMovies(value));
  }, [debouncedSearchTerm]);

  return (
    <>
      <HeaderNavStyled>
        <FlexForHeaderStyled>
          <LogoSearchInnerStyled>
            <LogoStyled onClick={() => history.push(match.pathname)}></LogoStyled>
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
