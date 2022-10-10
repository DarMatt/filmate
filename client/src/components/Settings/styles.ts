import styled from 'styled-components';

export const S: any = {};

S.WrapperSettingsStyled = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  top: 40px;
  right: 39px;
  z-index: 4;
  border-radius: 8px;
  padding: 30px 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  @media (max-width: 1025px) {
    padding: 20px 30px;
  }
  @media (max-width: 500px) {
    padding: 20px 25px;
  }
  @media (max-width: 500px) {
    right: 10px;
  }
`;

S.PersonalInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
`;

S.PhotoInner = styled.div`
  text-align: center;

  @media (max-width: 500px) {
    width: 100px;
  }
`;

S.Photo = styled.img`
  position: relative;
  margin-right: 25px;
  width: 140px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

S.ChangePhotoInput = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
`;

S.ChangePhoto = styled.span`
  position: absolute;
  bottom: -37px;
  left: 15px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: #6c6c6c;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 13px;
    bottom: -20px;
    left: 6px;
  }
`;

S.TitleInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

S.Title = styled.span`
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.textColors.popupColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

S.SubTitle = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #6c6c6c;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 15px;
  }
`;

S.PlusClose = styled.span`
  position: absolute;
  display: block;
  right: -18px;
  top: -8px;
  color: #2e2e2e;
  font-size: 30px;
  transform: rotate(45deg);
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

S.AddedFavoriteMovies = styled.div`
  margin-top: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1025px) {
    margin-top: 55px;
  }
  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;

S.AddedWatchLaterMovies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 96px;

  @media (max-width: 1025px) {
    margin-bottom: 45px;
  }
  @media (max-width: 500px) {
    margin-bottom: 25px;
  }
`;

S.AddedMoviesTitle = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.textColors.popupColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 1025px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

S.AddedMoviesBtn = styled.button`
  cursor: pointer;
  margin-left: 32px;
  border: none;
  background: #515151;
  color: #fff;
  border-radius: 10px;
  width: 164px;
  height: 40px;

  @media (max-width: 1025px) {
    width: 115px;
    height: 35px;
  }
  @media (max-width: 500px) {
    width: 110px;
  }
`;

S.LogOut = styled.div`
  cursor: pointer;

  @media (max-width: 500px) {
    margin-right: 25px;
    font-size: 13px;
  }
`;

S.LogOutIcon = styled.span`
  margin-right: 35px;
  color: #6c6c6c;
  width: 20px;
  height: 20px;
  position: relative;
  top: 1px;
`;
S.LogOutTitle = styled.span`
  color: #606060;
  font-size: 16px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 14px;
  }
`;
