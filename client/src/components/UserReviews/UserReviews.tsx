import React from 'react';
import { S } from './styles';
import data from './data.json';
import { useTranslation } from 'react-i18next';

export const UserReviews: React.FC = () => {
  const { t } = useTranslation(['common']);
  return (
    <S.UserReviews>
      <S.CommentsTitle>
        {t('user_reviews')} <span>{`(${data.length})`}</span>{' '}
      </S.CommentsTitle>
      {data.map((review) => (
        <S.ReviewsWrapper key={review.id}>
          <S.BoxUser>
            <div>
              <S.ReviewsImage src={review.avatar} />
              <div>
                <S.ReviewsName>{review.name}</S.ReviewsName>
                <S.ReviewsAddDate>{review.date}</S.ReviewsAddDate>
              </div>
            </div>
            <section>
              {review.Spoiler === 'Yes' && <S.ReviewSpoiler>{t('spoiler')}</S.ReviewSpoiler>}
              <S.ReviewRating>{`${review.rating}/10`}</S.ReviewRating>
            </section>
          </S.BoxUser>
          <S.ReviewsText>{review.reviews}</S.ReviewsText>
        </S.ReviewsWrapper>
      ))}
    </S.UserReviews>
  );
};
