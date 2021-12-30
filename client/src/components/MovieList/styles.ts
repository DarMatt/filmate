import styled from 'styled-components';

export const MovieLWrapperStyled = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};
  padding-right: 30px;
  overflow: hidden;

  @media (max-width: 405px) {
    padding-right: 10px;
  }
`;

export const FilmListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  justify-content: space-around;
  align-content: space-between;
  row-gap: 35px;
  margin-top: 50px;
  border-radius: 10px 10px 0px 0px;
  padding-left: 10px;

  @media (max-width: 1763px) {
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(5, 1fr);
  }

  @media (max-width: 1380px) {
    grid-template-columns: repeat(4, 200px);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 180px);
    margin-top: 40px;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }

  @media (max-width: 591px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const MovieItemStyled = styled.li`
  display: grid;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};
  list-style: none;
  border-radius: 10px 10px 0px 0px;
  width: 100%;

  @media (max-width: 850px) {
    width: 180px;
  }

  @media (max-width: 619px) {
    max-width: 250px;
    width: 100%;
    height: 350px;
  }

  @media (max-width: 457px) {
    height: 300px;
  }

  @media (max-width: 350px) {
    height: 250px;
  }
`;
