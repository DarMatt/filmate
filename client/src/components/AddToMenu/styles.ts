import { css } from '@emotion/react';
import styled from 'styled-components';
import { UiSize } from '../../enums/UiSize';
import { IPositionProps } from '../../hooks/useCursorPosition';
export const S: any = {};

type IProps = {
  modalWidth: number;
  modalBtnWidth: number;
  cursorPosition: number;
  size: string;
  position?: string;
  disable?: boolean;
};

const szRegular = UiSize.REGULAR;
const szCompact = UiSize.COMPACT;

const styleTemplates: any = {
  [szRegular]: {
    wrapper: css`
      /* left: 320px;
      bottom: 110px; */
      @media (max-width: 1500px) {
        padding: 30px 30px;
        text-align: center;
        /* left: 290px; */
      }
      @media (max-width: 1250px) {
        padding: 25px 25px;
        text-align: center;
        /* left: 290px; */
      }
      @media (max-width: 820px) {
        padding: 15px 15px;
      } ;
    `,
    inner: css`
      /* left: 320px;
      bottom: 50px; */
      @media (max-width: 1500px) {
        width: 330px;
        height: 400px;
      }
      @media (max-width: 1250px) {
        /* left: 310px; */
        width: 305px;
        height: 340px;
      }
      @media (max-width: 820px) {
        width: 230px;
        height: 260px;
      }
      @media (max-width: 580px) {
        width: 175px;
        height: 226px;
        border-radius: 15px;
      }
    `,
    addToTitle: css`
      @media (max-width: 1500px) {
        font-size: 33px;
        line-height: 40px;
      }
      @media (max-width: 1250px) {
        font-size: 25px;
        line-height: 20px;
      }
      @media (max-width: 820px) {
        font-size: 20px;
      } ;
    `,
    addMenuBtn: css`
      @media (max-width: 1500px) {
        padding: 18px 0;
        width: 130px;
        margin-top: 30px;
      }
      @media (max-width: 1250px) {
        padding: 10px 0;
        width: 110px;
        margin-top: 15px;
      }
      @media (max-width: 820px) {
        padding: 5px 0;
        width: 90px;
        margin-top: 10px;
      } ;
    `,
    btnInner: css`
      @media (max-width: 820px) {
        gap: 8px;
      }
    `,
    watchBtn: css`
      @media (max-width: 1500px) {
        padding: 15px 25px;
        margin-bottom: 15px;
      }
      @media (max-width: 1250px) {
        padding: 10px 20px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      @media (max-width: 820px) {
        padding: 8px 10px;
      }
      @media (max-width: 580px) {
        padding: 5px 8px;
        border-radius: 8px;
      }
    `,
    contentBtnAdd: css`
      @media (max-width: 1380px) {
        padding: 12px;
        font-size: 26px;
      }
      @media (max-width: 820px) {
        padding: 7px;
        font-size: 25px;
      } ;
    `,
    watchTitle: css`
      @media (max-width: 1500px) {
        text-align: center;
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 20px;
        padding: 0;
        max-width: 280px;
        left: 320px;
      }
      @media (max-width: 1250px) {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
        padding: 0 15px;
      }
      @media (max-width: 820px) {
        font-size: 15px;
        line-height: 24px;
      }
      @media (max-width: 580px) {
        margin-bottom: 15px;
      }
    `,
    watchSubtitle: css`
      font-size: 20px;
      line-height: 24px;
      @media (max-width: 820px) {
        font-size: 12px;
        line-height: 15px;
      }
      @media (max-width: 580px) {
        font-size: 10px;
        line-height: 10px;
      }
    `,
    btnIcon: css`
      @media (max-width: 820px) {
        font-size: 20px;
      }
    `,
    btnMenuTitle: css`
      @media (max-width: 1500px) {
        display: block;
        margin-top: 10px;
        font-size: 15px;
        line-height: 20px;
      }
      @media (max-width: 820px) {
        margin-top: 5px;
        font-size: 12px;
        line-height: 14px;
      }
    `,
  },
  [szCompact]: {
    wrapper: css`
      padding: 42px 39px;
      border-radius: 12px;
      @media (max-width: 1200px) {
        padding: 15px 15px;
      }
      @media (max-width: 580px) {
        padding: 10px 10px;
        border-radius: 10px;
      }
    `,
    inner: css`
      /* right: 33px;
      bottom: 36px; */
      border-radius: 10px;
      width: 224px;
      height: 360px;
      @media (max-width: 1200px) {
        width: 165px;
        height: 260px;
      }
      @media (max-width: 580px) {
        width: 165px;
        height: 260px;
      }
    `,
    addToTitle: css`
      font-size: 23px;
      line-height: 17px;
      width: 100%;
      display: block;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 18px;
        line-height: 12px;
      }
      @media (max-width: 580px) {
        font-size: 16px;
        line-height: 10px;
      }
    `,
    addMenuBtn: css`
      margin-top: 19px;
      padding: 5px 0;
      width: 84px;
      @media (max-width: 580px) {
        border-radius: 10px;
        margin-top: 12px;
        width: 75px;
      }
    `,
    btnIcon: css`
      font-size: 25px;
      @media (max-width: 1200px) {
        font-size: 15px;
      }
      @media (max-width: 580px) {
        font-size: 15px;
      }
    `,
    btnInner: css`
      @media (max-width: 1200px) {
        gap: 10px;
      }
    `,
    btnMenuTitle: css`
      margin-top: 2px;
      font-size: 11px;
      line-height: 17px;
      @media (max-width: 580px) {
        font-size: 10px;
        line-height: 11px;
      }
    `,
    contentBtnAdd: css`
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
      color: #394c5d;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10);

      @media (max-width: 1200px) {
        padding: 8px;
        font-size: 10px;
      } ;
    `,
    watchSubtitle: css`
      font-size: 12px;
      line-height: 14px;
      @media (max-width: 1200px) {
        font-size: 10px;
        line-height: 10px;
      } ;
    `,
    watchBtn: css`
      border-radius: 16px;
      padding: 11px 14px;
      @media (max-width: 1200px) {
        padding: 8px 10px;
        border-radius: 9px;
        margin-bottom: 10px;
      } ;
    `,
    watchTitle: css`
      max-width: 177px;
      padding-bottom: 12px;
      font-size: 20px;
      line-height: 25px;
      display: block;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 14px;
        line-height: 20px;
      } ;
    `,
  },
};

// S.AddedSpan = styled.span`
//   align-self: flex-end;
// `;

S.AddMenuInner = styled.div`
  align-self: flex-end;
`;
S.ContentBtnAdd = styled.div<any>`
  position: relative;
  cursor: pointer;
  padding: 15px;
  background-color: ${({ theme }) => theme.backgroundColors.btnAddColor};
  margin-left: 30px;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.textColors.addPlusColor};

  > span {
    display: inline-block;
    transition: transform 0.6s;
    transform: rotate(
      ${(props: { isOpen: boolean; isOpenWatchLater: boolean }) =>
        (!props.isOpen && props.isOpenWatchLater) || (props.isOpen && !props.isOpenWatchLater)
          ? '45deg'
          : '90deg'}
    );
  }
  ${({ size }) => styleTemplates[size]?.contentBtnAdd?.styles}
`;
S.AddMenuWrapper = styled.div<IProps & IPositionProps>`
  position: absolute;
  z-index: 15;
  padding: 60px 80px;
  background: rgba(208, 241, 255, 0.45);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  left: ${({ cursorPosition, modalWidth, modalBtnWidth, position }) =>
    modalWidth < cursorPosition ? modalBtnWidth : -(modalWidth - cursorPosition + 27)}px;
  bottom: ${({ position }) => (position ? '-180px' : '40px')};
  ${({ size }) => styleTemplates[size]?.wrapper?.styles}
`;

S.AddToTitle = styled.span<IProps>`
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.popupColor};
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  ${({ size }) => styleTemplates[size]?.addToTitle?.styles}
`;

S.BtnInner = styled.div<IProps>`
  display: flex;
  gap: 40px;
  ${({ size }) => styleTemplates[size]?.btnInner?.styles}
`;

S.AddMenuBtn = styled.button<IProps>`
  display: block;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  padding: 33px 0;
  width: 140px;
  text-align: center;
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  transition: transform 0.6s;

  &:hover {
    transform: ${({ disable }) => (disable ? 'scale(1)' : 'scale(1.1)')};
  }
  ${({ size }) => styleTemplates[size]?.addMenuBtn?.styles}
`;

S.BtnIcon = styled.span<IProps>`
  font-size: 30px;
  color: ${({ theme }) => theme.textColors.iconColor};
  ${({ size }) => styleTemplates[size]?.btnIcon?.styles}
`;

S.BtnMenuTitle = styled.span<IProps>`
  display: block;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.popupBtnColor};
  font-size: 20px;
  line-height: 24px;
  ${({ size }) => styleTemplates[size]?.btnMenuTitle?.styles}
`;

S.WatchLaterInner = styled.div<IProps>`
  position: absolute;
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 538px;
  height: 604px;
  background: rgba(208, 241, 255, 0.45);
  backdrop-filter: blur(10px);
  left: ${({ cursorPosition, modalWidth, modalBtnWidth }) =>
    modalWidth < cursorPosition ? modalBtnWidth : -(modalWidth - cursorPosition + 27)}px;
  bottom: ${({ position }) => (position ? '-345px' : '40px')};
  ${({ size }) => styleTemplates[size]?.inner?.styles}
`;

S.WatchTitle = styled.h4<IProps>`
  max-width: 251px;
  padding-bottom: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 44px;
  color: #2e2e2e;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  ${({ size }) => styleTemplates[size]?.watchTitle?.styles}
`;

S.WatchLaterBtn = styled.button<IProps>`
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px 40px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.6s;

  &:hover {
    transform: scale(1.1);
  }
  &:last-child {
    margin-bottom: 0;
  }
  ${({ size }) => styleTemplates[size]?.watchBtn?.styles}
`;

S.WatchLaterTitle = styled.span<IProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  ${({ size }) => styleTemplates[size]?.watchSubtitle?.styles}
`;
