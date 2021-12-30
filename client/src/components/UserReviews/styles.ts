import styled from 'styled-components';

export const S: any = {};

S.UserReviews = styled.div`
  width: 100%;
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

S.ReviewsWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 30px 22px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

S.BoxUser = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
    }
  }

  > section {
    display: flex;
  }
`;

S.ReviewsImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

S.ReviewsName = styled.h3`
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #24292e;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
`;

S.ReviewsAddDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: #24292e;
`;

S.ReviewSpoiler = styled.div`
  margin-left: 5px;
`;

S.ReviewRating = styled.div`
  margin-left: 5px;
`;
S.ReviewsText = styled.p`
  padding-top: 16px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;
