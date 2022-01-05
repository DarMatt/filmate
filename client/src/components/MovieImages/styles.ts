import styled from 'styled-components';

export const S: any = {};

S.ImagesWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 0 70px;

  > div {
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 31px;

    @media (max-width: 510px) {
      justify-content: center;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(4, auto);
      gap: 25px;
    }

    @media (max-width: 510px) {
      grid-template-columns: repeat(2, auto);
    }
  }

  @media (max-width: 1509px) {
    padding: 0 30px;
  }

  @media (max-width: 1386px) {
    margin-top: 50px;
  }

  @media (max-width: 1375px) {
    padding: 0 30px 0 0;
  }

  @media (max-width: 405px) {
    padding: 0 10px 0 0;
  }
`;

S.Images = styled.img`
  width: 230px;
  height: 280px;
  background-color: #dddddd85;
  &:nth-child(3) {
    width: 350px;
    height: 480px;

    @media (max-width: 1828px) {
      width: 300px;
      height: 400px;
    }

    @media (max-width: 1658px) {
      width: 250px;
      height: 350px;
    }

    @media (max-width: 1367px) {
      width: 200px;
      height: 300px;
    }
  }

  @media (max-width: 1828px) {
    width: 200px;
    height: 240px;
  }

  @media (max-width: 1658px) {
    width: 160px;
    height: 200px;
  }

  @media (max-width: 1367px) {
    width: 100px;
    height: 140px;
  }

  @media (max-width: 510px) {
    /* width: 40%; */
    height: 100%;
  }
`;

S.ImagesTitle = styled.div`
  position: absolute;
  left: 115px;
  bottom: 120px;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1386px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 510px) {
    position: static;
    order: -1;
  }
`;
