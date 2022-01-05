import styled from 'styled-components';

export const GenerWrapperStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.backgroundColors.mainColor};

  > label {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 24px;
    line-height: 29px;
    color: #6c6c6c;
    font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
    @media (max-width: 1200px) {
      font-size: 22px;
      line-height: 25px;
    }

    @media (max-width: 619px) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (max-width: 412px) {
      font-size: 12px;
      line-height: 18px;
    }

    > span {
      position: absolute;
      right: 10px;
      transform: rotate(89deg);
      font-size: 30px;

      @media (max-width: 1200px) {
        font-size: 22px;
        line-height: 25px;
      }

      @media (max-width: 619px) {
        font-size: 16px;
        line-height: 20px;
      }

      @media (max-width: 412px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  @media (max-width: 1200px) {
    padding-top: 40px;
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  height: 100%;
  line-height: 29px;
  color: #6c6c6c;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  text-transform: capitalize;
  margin-left: 25px;

  > span {
    color: ${({ theme }) => theme.textColors.genreColor};
    font-weight: 700;
    margin-left: 10px;
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 25px;
  }

  @media (max-width: 619px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 412px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ListOfGenresStyled = styled.select`
  height: 30px;
  margin-left: 15px;
  margin-right: 30px;
  border: none;
  background: transparent;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.textColors.genreListColor};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 25px;
  }

  @media (max-width: 619px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 412px) {
    font-size: 12px;
    line-height: 18px;
  }

  &:active {
    border: none;
  }
`;

export const GenerItemStyled = styled.option`
  /* display: flex;
  list-style: none;
  padding-left: 25%;
  background-color: '#fff';
  border: none;

  @media (max-width: 1152px) {
    padding-left: 0;
  }
  @media (max-width: 896px) {
    padding-left: 25%;
  }
  @media (max-width: 822px) {
    padding-left: 0;
  } */
`;
