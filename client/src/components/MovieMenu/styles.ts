import styled from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';

export const S: TypeStyle = {};

S.MenuWrapper = styled.section`
  position: relative;
  /* padding-right: 30px; */
  overflow: hidden;
  min-height: calc(100vh - 120px);
`;
S.MenuList = styled.ul`
  display: grid;
  grid-template-columns: 480px 300px 300px 300px;
  justify-content: space-around;
  align-content: space-between;
  row-gap: 35px;
  margin-top: 50px;
  border-radius: 10px 10px 0px 0px;
  padding-left: 10px;

  @media (max-width: 1763px) {
    grid-template-columns: 390px 280px 280px 280px;
  }

  @media (max-width: 1630px) {
    grid-template-columns: 350px 230px 230px 230px;
  }

  @media (max-width: 1420px) {
    margin-top: 40px;
    grid-template-columns: 320px 200px 200px 200px;
  }

  @media (max-width: 1250px) {
    grid-template-columns: 280px 180px 180px 180px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 230px 150px 150px 150px;
  }

  @media (max-width: 766px) {
    grid-template-columns: 210px 150px 150px;
  }

  @media (max-width: 557px) {
    grid-template-columns: 180px 180px;
  }

  @media (max-width: 430px) {
    grid-template-columns: 140px 140px;
  }
`;
S.MenuItem = styled.li`
  position: relative;
  list-style: none;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  /* height: 320px; */
`;
S.PaginationInner = styled.div`
  position: absolute;
  bottom: 64px;
  right: 54px;
`;
