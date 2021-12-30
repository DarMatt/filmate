import styled from 'styled-components';

interface MainMovieContainerProps {
  backgroundImage: string;
}

export const MainMovieContainerStyled = styled.section<MainMovieContainerProps>`
  position: relative;
  display: flex;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  margin-left: -21px;
  padding: 80px;
  height: 780px;

  @media (max-width: 1509px) {
    padding: 80px 40px;
    height: 700px;
  }

  @media (max-width: 812px) {
    padding: 80px 20px;
    height: 600px;
  }

  @media (max-width: 405px) {
    margin-left: -11px;
  }

  @media (max-width: 405px) {
    padding: 80px 10px;
  }
`;

export const MainMovieInnerStyled = styled.section`
  display: flex;
  flex: 1;
`;

export const MainMoviePosterStyled = styled.img`
  min-width: 300px;
  height: 472px;
  border-radius: 20px;
  margin: 0.5rem solid red;

  @media (max-width: 1509px) {
    min-width: 250px;
    height: 400px;
  }

  @media (max-width: 812px) {
    min-width: 200px;
    height: 320px;
  }

  @media (max-width: 672px) {
    display: none;
  }
`;

export const MainMovieMetaStyled = styled.div`
  height: 472px;
  margin-left: 40px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 1509px) {
    height: 400px;
  }

  @media (max-width: 812px) {
    margin-left: 20px;
    height: 320px;
    padding: 15px;
  }

  @media (max-width: 672px) {
    margin-left: 0;
  }
`;

export const MainMovieTitleStyled = styled.h1`
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 35px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1509px) {
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 10px;
  }

  @media (max-width: 812px) {
    font-size: 25px;
    line-height: 30px;
  }

  @media (max-width: 396px) {
    font-size: 20px;
    line-height: 33px;
  }
`;

export const MainMovieTopicStyled = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1509px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 812px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const MainMovieVoteAverageStyled = styled.div`
  margin: 20px 0;
  margin-right: 1.5rem;
  font-weight: bolder;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1509px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 812px) {
    font-size: 13px;
    line-height: 17px;
  }

  @media (max-width: 396px) {
    font-size: 11px;
    line-height: 15px;
    margin: 10px 0;
  }
`;

export const MainMovieReleaseDateStyled = styled.div`
  color: #fff;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontFamily.secondaryFontFamily};

  @media (max-width: 1509px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 812px) {
    font-size: 13px;
    line-height: 17px;
  }

  @media (max-width: 396px) {
    margin-bottom: 20px;
  }
`;

export const MainMovieDescriptionStyled = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.secondaryFontFamily};

  @media (max-width: 1509px) {
    font-size: 13px;
    line-height: 16px;
  }

  @media (max-width: 812px) {
    font-size: 11px;
    line-height: 15px;
  }
`;

export const MainMovieActionsContainerStyled = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MainVideoTitleInnerStyled = styled.div`
  position: relative;
  z-index: 8;
  margin-top: -150px;
  padding: 0 50px 0 30px;

  @media (max-width: 1509px) {
    padding: 0 25px 0 0;
  }

  @media (max-width: 396px) {
    padding: 0 10px 0 0;
  }
`;

export const MainVideoTitleStyled = styled.h2`
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  margin-bottom: 50px;
  padding-left: 20px;

  @media (max-width: 396px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const MainVideoContainerStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1828px) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }

  @media (max-width: 1386px) {
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
    grid-gap: 10px;
  }

  @media (max-width: 1169px) {
    grid-template-columns: repeat(4, 150px);
  }

  @media (max-width: 390px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 625px) {
    justify-items: center;
  }
`;

export const MovieVideoStyled = styled.iframe`
  justify-self: center;
  position: relative;
  width: 300px;
  height: 220px;
  background-color: #dddddd85;
  @media (max-width: 1828px) {
    width: 250px;
    height: 200px;
  }

  @media (max-width: 1386px) {
    width: 200px;
    height: 150px;
  }

  @media (max-width: 1169px) {
    width: 150px;
    height: 100px;
  }

  @media (max-width: 350px) {
    width: 140px;
    height: 100px;
  }
`;

export const PaginationInnerStyled = styled.div`
  padding-right: 80px;

  @media (max-width: 474px) {
    padding-right: 0;
  }
`;
