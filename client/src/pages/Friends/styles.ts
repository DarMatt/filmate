import { TypeStyle } from '../../interfaces/styleType';
import styled from 'styled-components';
import search from '../../assets/images/search.svg';
import logo from '../../assets/images/logo.svg';

export const S: TypeStyle = {};

S.FriendsPageWrapper = styled.section`
  display: flex;
`;

S.FriendsWrapper = styled.div``;

S.SearchStyled = styled.input`
  width: 410px;
  height: 50px;
  padding-left: 60px;
  border-radius: 11px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 10px;
  margin-right: 40px;
  outline: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.textColors.searchColor};
  align-self: flex-end;
  text-transform: capitalize;

  &::placeholder {
    outline: none;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.72);
  }
`;

S.FriendsList = styled.div``;

S.EmptyChatStyled = styled.img.attrs<string>({
  src: logo,
})``;
