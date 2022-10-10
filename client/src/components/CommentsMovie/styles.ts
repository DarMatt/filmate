import styled from 'styled-components';

export const S: any = {};

S.CommentsWrapper = styled.section`
  display: flex;
  padding: 0 80px;

  @media (max-width: 1386px) {
    padding: 0 30px 0 0;
  }

  @media (max-width: 672px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 405px) {
    padding: 0 10px 0 0;
  }
`;

S.CommentsForm = styled.div`
  max-width: 450px;
  padding-bottom: 40px;
  margin-right: 169px;

  @media (max-width: 1169px) {
    margin-right: 40px;
    width: 300px;
  }

  @media (max-width: 672px) {
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
`;

S.CommentsTitle = styled.div`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1386px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

S.CommentsImg = styled.img`
  height: 244px;
  border-radius: 10px 10px 0px 0px;

  @media (max-width: 1169px) {
    height: 200px;
    width: 300px;
  }

  @media (max-width: 672px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

S.CommentsNameMovie = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  text-align: end;
`;

S.AddRating = styled.h4`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
`;

S.NumberRating = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

S.RatingInput = styled.input<{ isActive: boolean }>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.6s;

  &:hover {
    background-color: rgb(24, 200, 255);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    transform: scale(1.1);
  }
  ${({ isActive }) => isActive && 'background-color:rgb(24, 200, 255);'}
`;

S.ReviewTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};
`;

S.ReviewTextarea = styled.textarea.attrs({
  placeholder: 'Write your review here ',
})`
  width: 100%;
  height: 60px;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  resize: none;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: ${({ theme }) => theme.backgroundColors.headerColor};

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #787878;
    font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  }
`;

S.SpoilersInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColors.detailsTitleColor};

  > div {
    display: flex;
    gap: 13px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
    color: ${({ theme }) => theme.textColors.detailsTitleColor};

    > label {
      > input {
        margin-right: 5px;
      }
    }
  }
`;

S.ButtonSubmitComment = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  background: #2e2e2e;
  border-radius: 10px;
  height: 61px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
`;
