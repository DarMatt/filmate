import React, { useState } from 'react';
import { S } from './styles';
import { getImgUrl } from '../../api/URLs';
import { UserReviews } from '../UserReviews/UserReviews';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { getFromStorage } from '../../services/local-session-storage/service-localStorage';
import { STORAGE_NAME } from '../../CONST/key-localStorage';
import { useHistory } from 'react-router';
import { ERoutes, ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routes/routes';

const ratingNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const commentData = {
  rating: '',
  review: '',
  spoiler: '',
};

type commentType = {
  rating: string;
  review: string;
  spoiler: string;
};

export const CommentsMovie: React.FC<any> = ({ movieDetails }) => {
  const [comment, setComment] = useState<commentType>(commentData);
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const { userId } = getFromStorage(STORAGE_NAME);
  const history = useHistory();
  const createCommet = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onCommentSubmit = () => {
    if (!userId) {
      history.push(history.location.pathname + ROUTE_LOGIN_PAGE);
      return;
    }
    dispatch(
      movieAsyncActions.addComment({ ...comment, user_id: userId, movie_id: movieDetails.id })
    );
  };

  return (
    <S.CommentsWrapper>
      <S.CommentsForm>
        <S.CommentsTitle>{t('add_item')}</S.CommentsTitle>
        <S.CommentsImg src={getImgUrl(`original${movieDetails.backdrop_path}`)} alt="Photo movie" />
        <S.CommentsNameMovie>
          {`${movieDetails.title} (${movieDetails.release_date.slice(0, 4)})`}
        </S.CommentsNameMovie>
        <S.AddRating>{t('rating')}</S.AddRating>
        <S.NumberRating>
          {ratingNumber.map((num) => (
            <S.RatingInput
              isActive={+comment.rating === num}
              name="rating"
              onClick={(event: React.FormEvent<HTMLInputElement>) => {
                createCommet(event);
              }}
              value={num}
              key={num}
              type="button"
            />
          ))}
        </S.NumberRating>
        <S.ReviewTitle>{t('review')}</S.ReviewTitle>
        <S.ReviewTextarea name="review" value={comment.review} onChange={createCommet} />

        <S.SpoilersInner>
          <div>{t('spoilers')}</div>
          <div>
            <label htmlFor="">
              <input
                value="Yes"
                onChange={(event) => {
                  createCommet(event);
                }}
                type="radio"
                name="spoiler"
              />
              {t('yes')}
            </label>
            <label htmlFor="">
              <input value="No" onChange={createCommet} type="radio" name="spoiler" />
              {t('no')}
            </label>
          </div>
        </S.SpoilersInner>
        <S.ButtonSubmitComment onClick={onCommentSubmit}>{t('submit')}</S.ButtonSubmitComment>
      </S.CommentsForm>
      <UserReviews />
    </S.CommentsWrapper>
  );
};
