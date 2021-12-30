import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { S } from './styles';

export const RouterLayout = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <S.WrapperStyle className="main-wrapper">
        <Header openSearch={openSearch} setOpenSearch={setOpenSearch} />
        <S.Line></S.Line>
        <S.InnerStyle>
          <Sidebar />
          <S.WrapperRouters>
            <Router />
          </S.WrapperRouters>
        </S.InnerStyle>
      </S.WrapperStyle>
    </BrowserRouter>
  );
};
