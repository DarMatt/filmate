import React from 'react';
import { S } from './styles';

const FriendsChatPage = () => {
  return (
    <S.FriendsPageWrapper>
      <S.FriendsWrapper>
        <S.SearchStyled></S.SearchStyled>
        <S.FriendsList></S.FriendsList>
      </S.FriendsWrapper>
      <S.EmptyChatStyled></S.EmptyChatStyled>
    </S.FriendsPageWrapper>
  );
};

export default FriendsChatPage;
