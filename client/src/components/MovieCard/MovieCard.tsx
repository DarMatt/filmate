import React, { useState } from 'react';
import _ from 'lodash';
import noImg from '../../assets/images/NoImage_Available.png';
import {
  MovieImgStyled,
  ButtonTextInnerStyled,
  TextInnerStyled,
  TitleStyled,
  RatingStyled,
  MovieCardWrapperStyled,
  DescFilmOpacityStyled,
  DescFilmInnerStyled,
  DescTitleStyled,
  DescDescriptionStyled,
  LinkStyledStyled,
  MovieGenre,
  MovieDesc,
  RemoveFromMenuInner,
  MovieGenreInner,
} from './styles';
import { IMovieCard } from '../../interfaces/movieCard';
import { getImgUrl } from '../../api/URLs';
import { AddToMenu } from '../AddToMenu/AddToMenu';
import { UiSize } from '../../enums/UiSize';
import { RemoveFromMenu } from '../RemoveFromMenu/RemoveFromMenu';
import { getGenre, isSomeKeyTrue } from '../../utils/helpers';
import { useHistory, useRouteMatch } from 'react-router';
import { ERoutes } from '../../CONST/list-local-routes/routes';
import { useTranslation } from 'react-i18next';
interface IMovieType {
  film: IMovieCard;
  size: UiSize;
  setServerMovies?: any;
}

export const MovieCard: React.FC<IMovieType> = ({ film, size, setServerMovies }) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const descVar = film.overview.replace(/^(.{121}).{2,}/, '$1...');
  const titleVar = film.title.split(' ').slice(0, 4).join(' ');
  const history = useHistory();
  const { url } = useRouteMatch();
  const { t } = useTranslation(['common']);
  const poster = getImgUrl(`w200${film.poster_path}`);
  const findeIndex = (url: string | string[]) => {
    return url.lastIndexOf('/') === 0 ? url : url.slice(0, url.lastIndexOf('/'));
  };

  return (
    <>
      <LinkStyledStyled
        onClick={() => history.push(`${findeIndex(url)}/movie/${film.id}`)}
        onMouseLeave={() => {
          setVisibleDetails(false);
        }}
        onMouseEnter={() => {
          setVisibleDetails(true);
        }}
      >
        <MovieCardWrapperStyled>
          <MovieImgStyled
            src={film.poster_path ? poster : noImg}
            alt={`${film.title} Poster`}
            size={size}
          />
        </MovieCardWrapperStyled>
        <RemoveFromMenuInner>
          {film?.isFavorite && <RemoveFromMenu type="favorite" movie={film} />}
          {film?.isWatchLater && isSomeKeyTrue(film?.isWatchLater) && (
            <RemoveFromMenu type="watchLater" movie={film} />
          )}
        </RemoveFromMenuInner>
        {visibleDetails && size === UiSize.REGULAR && (
          <DescFilmOpacityStyled size={size}>
            <DescFilmInnerStyled>
              <DescTitleStyled>{titleVar}</DescTitleStyled>
              <DescDescriptionStyled>{descVar}</DescDescriptionStyled>
            </DescFilmInnerStyled>
          </DescFilmOpacityStyled>
        )}
      </LinkStyledStyled>
      <ButtonTextInnerStyled size={size}>
        <TextInnerStyled>
          <TitleStyled size={size}>{titleVar}</TitleStyled>
          <RatingStyled>{`${film.vote_average} / 10`}</RatingStyled>
        </TextInnerStyled>

        {url.match(ERoutes.home) && <AddToMenu movie={film} size={UiSize.COMPACT} />}
      </ButtonTextInnerStyled>
      {size === UiSize.LARGE && (
        <>
          <MovieGenreInner>
            {getGenre(film).map((el) => (
              <MovieGenre key={el}>{t(el) + ' '}</MovieGenre>
            ))}
          </MovieGenreInner>
          <MovieDesc>{film.overview}</MovieDesc>
        </>
      )}
    </>
  );
};
