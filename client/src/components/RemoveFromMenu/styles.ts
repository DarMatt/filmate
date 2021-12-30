import styled from 'styled-components';
import { TypeStyle } from '../../interfaces/styleType';
import flag from '../../assets/images/flag.svg';
import favorite from '../../assets/images/favorite.svg';
import remove from '../../assets/images/remove.svg';
import watchLater from '../../assets/images/WatchLater.svg';

export const S: TypeStyle = {};

S.RemoveFromFavoriteBtn = styled.div`
  cursor: pointer;
`;
S.RemoveFromWatchLBtn = styled.div`
  cursor: pointer;
`;

S.RemoveFromWatchLBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${flag});
  width: 44px;
  height: 64px;
  @media (max-width: 1350px) {
    width: 42px;
  }
`;

S.RemoveFromWatchLImg = styled.div`
  position: absolute;
  background: url(${watchLater});
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  width: 44px;
  height: 64px;
  &:hover {
    background: url(${remove});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

S.RemoveFromFavoriteBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${flag});
  width: 44px;
  height: 64px;
  @media (max-width: 1350px) {
    width: 42px;
  }
`;

S.RemoveFromFavoriteImg = styled.div`
  position: absolute;
  background: url(${favorite});
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  width: 44px;
  height: 64px;
  &:hover {
    background: url(${remove});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
