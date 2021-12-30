import React from 'react';
import { Link } from 'react-router-dom';
import Text404 from '../../assets/images/404Text.svg';
import { ROUTE_HOME_PAGE } from '../../CONST/list-local-routes/list-routes-public';
import { S } from './styles';

const Content404 = () => {
  return (
    <>
      <S.MainWrapperContent404>
        <S.WrapperImage404>
          <S.Img src={Text404} />
        </S.WrapperImage404>
        <S.Typography>Oh, no! It seems like this page doesn’t exist</S.Typography>
        <S.Typography className={'request'}>
          {' '}
          The page you requested could not be found.
        </S.Typography>
        <Link to={ROUTE_HOME_PAGE.path}>
          <S.BackToHome>Back to Homepage</S.BackToHome>
        </Link>
      </S.MainWrapperContent404>
    </>
  );
};

export default Content404;
