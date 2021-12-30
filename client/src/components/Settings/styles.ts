import styled from 'styled-components';

export const S: any = {};

S.WrapperSettingsStyled = styled.div`
  /* display: flex;
  flex-direction: column; */
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  top: 40px;
  right: 39px;
  z-index: 4;
  border-radius: 8px;
  padding: 30px 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

S.PersonalInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
`;

S.PhotoInner = styled.div`
  text-align: center;
`;

S.Photo = styled.img`
  position: relative;
  margin-right: 25px;
`;

S.ChangePhoto = styled.span`
  position: absolute;
  bottom: -37px;
  left: 15px;
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
  color: #6c6c6c;
  cursor: pointer;
`;

S.TitleInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
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
`;

S.AddedFavoriteMovies = styled.div`
  margin-top: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;

S.AddedWatchLaterMovies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 96px;
`;

S.AddedMoviesTitle = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.textColors.popupColor};
  font-family: ${({ theme }) => theme.fontFamily.mainFontFamily};
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
`;

S.LogOut = styled.div`
  cursor: pointer;
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
`;
