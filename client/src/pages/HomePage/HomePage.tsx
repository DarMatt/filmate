import React from 'react';
import { Genres } from '../../components/Genres/Genres';
import { HomePreviewMovie } from '../../components/HomePreviewMovie/HomePreviewMovie';
import { MovieList } from '../../components/MovieList/MovieList';

const HomePage: React.FC = () => {
  return (
    <>
      <HomePreviewMovie />
      <Genres />
      <div className="film-list">
        <MovieList />
      </div>
    </>
  );
};
export default HomePage;
