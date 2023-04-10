import React, { useEffect, useState } from 'react';
import { S } from './styles';
import { getComment } from './data';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IReviewType, movieAsyncActions } from '../../redux-slices/movie-slice';
import { getCommentSelector } from '../../selectors/selectors';
import { useParams } from 'react-router';

type IProps = {
  moveId: string;
};

export const UserReviews: React.FC = () => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getCommentSelector);
  const { id } = useParams<{ id?: string }>();
  console.log('id', id);

  useEffect(() => {
    dispatch(movieAsyncActions.getComments({ id: id }));
  }, []);

  console.log('comments', comments);
  return (
    <S.UserReviews>
      <S.CommentsTitle>
        {t('user_reviews')} <span>{`(${comments.length})`}</span>{' '}
      </S.CommentsTitle>
      {comments.map((comment, index) => (
        <S.ReviewsWrapper key={index}>
          <S.BoxUser>
            <div>
              <S.ReviewsImage src={comment.avatar} />
              <div>
                <S.ReviewsName>{comment.autor}</S.ReviewsName>
                <S.ReviewsAddDate>{comment.date}</S.ReviewsAddDate>
              </div>
            </div>
            <section>
              {comment.spoiler === 'Yes' && <S.ReviewSpoiler>{t('spoiler')}</S.ReviewSpoiler>}
              <S.ReviewRating>{`${comment.rating}/10`}</S.ReviewRating>
            </section>
          </S.BoxUser>
          <S.ReviewsText>{comment.review}</S.ReviewsText>
        </S.ReviewsWrapper>
      ))}
    </S.UserReviews>
  );
};
