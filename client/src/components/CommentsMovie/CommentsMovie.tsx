import React, { useState } from 'react';
import { S } from './styles';
import { getImgUrl } from '../../api/URLs';
import { UserReviews } from '../UserReviews/UserReviews';
import { useTranslation } from 'react-i18next';

const ratingNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const commentData = {
  rating: '',
  review: '',
  spoilers: false,
};

type commentDataType = {
  rating: string;
  review: string;
  spoilers: boolean;
};

export const CommentsMovie: React.FC<any> = ({ movieDetails }) => {
  const [comment, setComment] = useState<commentDataType>(commentData);
  const { t } = useTranslation(['common']);
  const createCommet = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            <input
              name="rating"
              onClick={(event) => {
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
                name="spoilers"
              />
              {t('yes')}
            </label>
            <label htmlFor="">
              <input value="No" onChange={createCommet} type="radio" name="spoilers" />
              {t('no')}
            </label>
          </div>
        </S.SpoilersInner>
        <S.ButtonSubmitComment>{t('submit')}</S.ButtonSubmitComment>
      </S.CommentsForm>
      <UserReviews />
    </S.CommentsWrapper>
  );
};
