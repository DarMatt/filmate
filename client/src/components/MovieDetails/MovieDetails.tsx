import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieImages } from '../MovieImages/MovieImages';
import { getMovieDetails } from '../../api/api';
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
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { Suggest } from '../Suggest/Suggest';
import { CommentsMovie } from '../CommentsMovie/CommentsMovie';
import useWindowDimensions from '../../hooks/useVieWport';
import { initialWatchLaterVal } from '../../utils/helpers';
import { FLEX_END } from '../../CONST/display';

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

const MovieDetailsPage: React.FC = () => {
  const { id = '' } = useParams<{ id?: string | undefined }>();
  const { width } = useWindowDimensions();
  const { request, IsLoading } = useHttp(getMovieDetails, id);
  const [movieDetails, setMovieDetails] = React.useState<IMovieDetails>(initialMovieState);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    width < 767 ? (width < 558 ? setPageSize(2) : setPageSize(3)) : setPageSize(4);
  }, [width]);

  useEffect(() => {
    const promise: any = request().then(setMovieDetails);
    return () => {
      promise.abort();
    };
  }, [id]);

  const onPageIndex = (index: number) => {
    setPageIndex(index);
  };

  return (
    <>
      <MainMovieContainerStyled
        backgroundImage={getImgUrl(`original${movieDetails.backdrop_path}`)}
      >
        {IsLoading && <Loader />}
        <MainMovieInnerStyled className="movie-details">
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
          display={width > 474 ? FLEX_END : 'center'}
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
