import { css } from '@emotion/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boxArrow from '../../assets/images/box-arrow-up-right.svg';
import { UiSize } from '../../enums/UiSize';
import { STORAGE_THEME } from '../../CONST/key-localStorage';
import { getFromStorage } from '../../services/local-session-storage/service-localStorage';

type IProps = {
  size: string;
};

const szLarge = UiSize.LARGE;
const szRegular = UiSize.REGULAR;
const szCompact = UiSize.COMPACT;

const titleColor = getFromStorage(STORAGE_THEME) ? '#09244b' : '#A42E27';
const styleTemplates: any = {
  [szRegular]: {
    image: css`
      height: 490px;
      @media (max-width: 1763px) {
        height: 350px;
      }

      @media (max-width: 1380px) {
        height: 300px;
      }
      @media (max-width: 1200px) {
        height: 250px;
      }

      @media (max-width: 619px) {
        height: 300px;
      }

      @media (max-width: 457px) {
        height: 250px;
      }

      @media (max-width: 350px) {
        height: 200px;
      }
    `,
    btnTextInner: css`
      display: grid;
      grid-template-columns: 6fr 1fr;
      grid-template-rows: 1fr;
      justify-content: space-between;
      margin-bottom: 10px;
      @media (max-width: 1200px) {
        margin-bottom: 5px;
      }
    `,
    hoverDeck: css`
      height: 490px;
      @media (max-width: 1763px) {
        height: 350px;
      }

      @media (max-width: 1380px) {
        height: 300px;
      }

      @media (max-width: 1200px) {
        height: 250px;
      }
    `,
    title: css`
      font-size: 24px;
      line-height: 29px;
      text-transform: uppercase;
      @media (max-width: 1763px) {
        font-size: 16px;
        line-height: 18px;
      }

      @media (max-width: 1380px) {
        font-size: 12px;
        line-height: 16px;
      }

      @media (max-width: 442px) {
        font-size: 10px;
        line-height: 12px;
      }
    `,
  },
  [szLarge]: {
    image: css`
      /* height: 490px; */
      cursor: pointer;
    `,
    title: css`
      color: ${titleColor};
      margin-top: 15px;
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
      @media (max-width: 1200px) {
        font-size: 24px;
      }
    `,
  },
  [szCompact]: {
    image: css`
      cursor: pointer;
    `,
    title: css`
      color: ${titleColor};
      margin-top: 10px;
      font-weight: 500;
      font-size: 22px;
      line-height: 24px;
      text-transform: uppercase;
      @media (max-width: 1300px) {
        font-size: 19px;
      }
      @media (max-width: 860px) {
        font-size: 16px;
    `,
  },
};

export const MovieCardWrapperStyled = styled.div`
  /* position: relative; */
  width: 100%;
  display: grid;
`;

export const MovieImgStyled = styled.img<IProps>`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  ${({ size }) => styleTemplates[size]?.image?.styles}
`;

export const ButtonTextInnerStyled = styled.div<IProps>`
  ${({ size }) => styleTemplates[size]?.btnTextInner?.styles}
  > span {
    align-self: end;
    font-size: 30px;
  }
`;

export const TextInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 20px;

  @media (max-width: 1763px) {
    margin-top: 10px;
  }
  @media (max-width: 1200px) {
    margin-top: 5px;
  }
`;

export const TitleStyled = styled.div<IProps>`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.cardTitleColor};
  ${({ size }) => styleTemplates[size]?.title?.styles}
`;

export const RatingStyled = styled.span`
  display: inline-block;
  font-size: 18px;
  line-height: 130%;
  color: ${({ theme }) => theme.textColors.ratingTitleColor};
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1763px) {
    font-size: 15px;
    line-height: 18px;
  }
  @media (max-width: 860px) {
    font-size: 13px;
    line-height: 15px;
  }
  @media (max-width: 442px) {
    font-size: 10px;
    line-height: 12px;
  }

  @media (max-width: 350px) {
    margin-top: 0;
  }
`;

export const DescFilmOpacityStyled = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 50%);
  border-radius: 10px 10px 0px 0px;
  opacity: 0.8;
  ${({ size }) => styleTemplates[size]?.hoverDesk?.styles}
`;

export const DescFilmInnerStyled = styled.section`
  position: absolute;
  top: 280px;
  margin: 0 10px;

  @media (max-width: 1763px) {
    top: 220px;
  }

  @media (max-width: 1380px) {
    top: 180px;
  }

  @media (max-width: 1200px) {
    top: 130px;
  }
`;

export const DescTitleStyled = styled.h2`
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  cursor: pointer;

  @media (max-width: 1763px) {
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: 1380px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const DescDescriptionStyled = styled.p`
  margin-top: 10px;
  font-family: Montserrat;
  font-size: 18px;
  line-height: 130%;
  color: #fff;
  letter-spacing: 0.01em;

  @media (max-width: 1763px) {
    font-size: 13px;
    line-height: 15px;
  }

  @media (max-width: 1380px) {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const DescFilmBtnInnerStyled = styled.div`
  align-self: flex-end;
`;

export const DescFilmOpenStyled = styled.button`
  background-image: url(${boxArrow});
  background-size: contain;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  outline: none;
`;

interface MainMovieContainerProps {
  backgroundImage: string;
}

export const DescFilmWachedStyled = styled.button<MainMovieContainerProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: contain;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const RemoveFromMenuInner = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  cursor: pointer;
  top: -1px;
  right: 10px;
  z-index: 10;
`;

export const DescFilmFavoriteStyled = styled.button<MainMovieContainerProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: contain;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const LinkStyledStyled = styled.div`
  text-decoration: none;
  transition: transform 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
`;

export const MovieGenreInner = styled.div`
  margin: 10px 0;
  margin-left: 10px;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const MovieGenre = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`;
export const MovieDesc = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  margin-left: 10px;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
