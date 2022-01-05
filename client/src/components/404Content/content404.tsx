import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Text404 from '../../assets/images/404Text.svg';
import { ROUTE_HOME_PAGE } from '../../CONST/list-local-routes/list-routes-public';
import { S } from './styles';

const Content404 = () => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <S.MainWrapperContent404>
        <S.WrapperImage404>
          <S.Img src={Text404} />
        </S.WrapperImage404>
        <S.Typography>{t('oh_no')}</S.Typography>
        <S.Typography className={'request'}> {t('no_found')}.</S.Typography>
        <Link to={ROUTE_HOME_PAGE.path}>
          <S.BackToHome>{t('back_home')}</S.BackToHome>
        </Link>
      </S.MainWrapperContent404>
    </>
  );
};

export default Content404;
