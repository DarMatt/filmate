import React, { useEffect, useState } from 'react';
import { S } from './styles';
import { getComment } from './data';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IReviewType, movieAsyncActions } from '../../redux-slices/movie-slice';
import { getCommentSelector } from '../../selectors/selectors';

type IProps = {
  moveId: string;
};

export const UserReviews: React.FC<IProps> = ({ moveId }) => {
  // const [comments, setComments] = useState<IReviewType[]>(getComment(moveId));
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getCommentSelector);
  console.log('movies', comments);
  // useEffect(() => {
  //   dispatch(movieAsyncActions.getComments({ id: moveId })).then((res) => setComments(res.payload));
  // }, [moveId, dispatch]);

  useEffect(() => {
    console.log('inside UserReviews');
    // const promise = dispatch(movieAsyncActions.getComments({ id: moveId }));
    dispatch(movieAsyncActions.getComments({ id: moveId }));
    // return () => {
    //   promise.abort();
    // };
  }, [dispatch, moveId]);

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
              {comment.spoiler === 'yes' && <S.ReviewSpoiler>{t('spoiler')}</S.ReviewSpoiler>}
              <S.ReviewRating>{`${comment.rating}/10`}</S.ReviewRating>
            </section>
          </S.BoxUser>
          <S.ReviewsText>{comment.review}</S.ReviewsText>
        </S.ReviewsWrapper>
      ))}
    </S.UserReviews>
  );
};
