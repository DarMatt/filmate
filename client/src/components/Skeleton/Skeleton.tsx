import React from 'react';
import { S } from './styles';

type iProps = {
  type: string;
};
export const Skeleton: React.FC<iProps> = ({ type }) => {
  const counter = 20;
  const FeedSkeleton = () => (
    <S.MovieSK>
      <S.MovieSKImg></S.MovieSKImg>
      <S.MovieSKInfo>
        <S.MovieSKDetail>
          <S.MovieSKText></S.MovieSKText>
          <S.MovieSKRating></S.MovieSKRating>
        </S.MovieSKDetail>
        <S.MovieSKBtn></S.MovieSKBtn>
      </S.MovieSKInfo>
    </S.MovieSK>
  );
  const PreviewSkeleton = () => (
    <S.PreviewSKWrapper>
      <S.PreviewSKContent>
        <S.PreviewSKTitle></S.PreviewSKTitle>
        <S.PreviewSKInner>
          <S.PreviewSKBtn></S.PreviewSKBtn>
          <S.PreviewSKBtn sm={'sm'}></S.PreviewSKBtn>
        </S.PreviewSKInner>
      </S.PreviewSKContent>
    </S.PreviewSKWrapper>
  );

  if (type === 'feed') return [...Array(counter).keys()].map((el) => <FeedSkeleton key={el} />);
  if (type === 'preview') return <PreviewSkeleton />;
};
