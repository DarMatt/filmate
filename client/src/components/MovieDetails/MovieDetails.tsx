import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MovieImages } from '../MovieImages/MovieImages';
// import Button from '@material-ui/core/Button';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { addMovie, deleteMovie, getMovie, getMovieDetails } from '../../api/api';
import {
  MainMovieContainerStyled,
  MainMoviePosterStyled,
  MainMovieInnerStyled,
  MainMovieMetaStyled,
  MainMovieTopicStyled,
  MainMovieTitleStyled,
  MainMovieVoteAverageStyled,
  MainMovieReleaseDateStyled,
  MainMovieDescriptionStyled,
  MainVideoTitleInnerStyled,
  MainVideoTitleStyled,
  MainVideoContainerStyled,
  MovieVideoStyled,
  PaginationInnerStyled,
} from './styles';
import { IMovieDetails } from '../../interfaces/movieList';
import { getImgUrl } from '../../api/URLs';
import { useHttp } from '../../hooks/http.hook';
import { ErrorAlertAndRedirect, Toast } from '../Swal';
import { useAuth } from '../../context/AuthContext';
import { Loader } from '../Loader/Loader';
import { AddToMenu } from '../AddToMenu/AddToMenu';
import { Pagination } from '../Pagination/Pagination';
import { Suggest } from '../Suggest/Suggest';
import { CommentsMovie } from '../CommentsMovie/CommentsMovie';
import { UiSize } from '../../enums/UiSize';
import useWindowDimensions from '../../hooks/useVieWport';
import { IPositionProps, positionInitialState } from '../../hooks/useCursorPosition';
import { getPosition } from '../../hooks/useCursorPosition';
import { ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routes/routes';
import { initialWatchLaterVal, isSomeKeyTrue } from '../../utils/helpers';
import { RemoveFromMenu } from '../RemoveFromMenu/RemoveFromMenu';

export const initialMovieState = {
  isFavorite: false,
  isWatchLater: initialWatchLaterVal,
  popularity: 0,
  vote_count: 0,
  video: false,
  poster_path: '',
  id: 0,
  adult: false,
  backdrop_path: '',
  original_language: '',
  original_title: '',
  genre_ids: [],
  title: '',
  vote_average: 0,
  overview: '',
  release_date: '',
  imdb_id: '',
  tagline: '',
  videos: {
    results: [],
  },
  homepage: '',
  genres: [],
};

interface IFavoriteId {
  favoriteId?: number | string;
}

interface IFavoriteId {
  id: number;
}

const MovieDetailsPage: React.FC = () => {
  const { id = '' } = useParams<{ id?: string | undefined }>();
  const history = useHistory();
  const { width } = useWindowDimensions();
  const { request, IsLoading } = useHttp(getMovieDetails, id);
  const { token } = useAuth();
  const [movieDetails, setMovieDetails] = React.useState<IMovieDetails>(initialMovieState);
  const [pageIndex, setPageIndex] = useState(0);
  const display = 'flex-end';
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    console.log(width);
    width < 767 ? (width < 558 ? setPageSize(2) : setPageSize(3)) : setPageSize(4);
  }, [width]);

  useEffect(() => {
    request().then(setMovieDetails);
  }, [id]);

  const onPageIndex = (index: number) => {
    setPageIndex(index);
  };
  console.log('movieDetails.videos.results', movieDetails.videos.results);
  return (
    <>
      <MainMovieContainerStyled
        // onClick={(event: any) => {
        //   searchElement(event);
        // }}
        backgroundImage={getImgUrl(`original${movieDetails.backdrop_path}`)}
      >
        {IsLoading && <Loader />}
        <MainMovieInnerStyled className="movie-details">
          {/* {IsLoading && <Loader />} */}
          <MainMoviePosterStyled src={getImgUrl(`w300${movieDetails.poster_path}`)} />
          <MainMovieMetaStyled>
            <div>
              <MainMovieTitleStyled>{movieDetails.title}</MainMovieTitleStyled>
              {/* <AddToMenu movie={movieDetails} size={UiSize.REGULAR} position={'left'} /> */}
            </div>
            <MainMovieTopicStyled>
              {movieDetails.genres
                .slice(0, 2)
                .map((genre) => genre.name)
                .join(' / ')}
            </MainMovieTopicStyled>
            <MainMovieVoteAverageStyled>{`${movieDetails.vote_average}/10`}</MainMovieVoteAverageStyled>
            <MainMovieReleaseDateStyled>
              {`Release: ${movieDetails.release_date.slice(0, 4)}`}
            </MainMovieReleaseDateStyled>
            <MainMovieDescriptionStyled>{movieDetails.overview}</MainMovieDescriptionStyled>
          </MainMovieMetaStyled>
        </MainMovieInnerStyled>
      </MainMovieContainerStyled>
      <MainVideoTitleInnerStyled>
        <MainVideoTitleStyled>Trailers and Videos</MainVideoTitleStyled>
        <MainVideoContainerStyled>
          {movieDetails.videos.results
            .slice(pageIndex, pageIndex + pageSize)
            .map(({ key, name }) => (
              <MovieVideoStyled
                key={key}
                title={name}
                src={`https://www.youtube.com/embed/${key}`}
                allowFullScreen
              />
            ))}
        </MainVideoContainerStyled>
      </MainVideoTitleInnerStyled>
      <PaginationInnerStyled>
        <Pagination
          display={width > 474 ? display : 'center'}
          index={pageIndex}
          total={movieDetails.videos.results.length}
          onPageIndex={onPageIndex}
          pageSize={pageSize}
        />
      </PaginationInnerStyled>
      <MovieImages id={id} />
      <Suggest />
      <CommentsMovie movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetailsPage;
