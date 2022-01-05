import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { movieAsyncActions } from '../../redux-slices/movie-slice';
import { S } from './styles';
import { getMovieSelector } from '../../selectors/selectors';
import { MovieMenu } from '../../components/MovieMenu/MovieMenu';
import { useTranslation } from 'react-i18next';
import { tabs } from './data';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { ERoutes } from '../../CONST/list-local-routes/routes';
import { matchExact } from '../../utils/helpers';

type MatchParams = {
  chapter: string;
};

const WatchLaterPage = () => {
  const dispatch = useAppDispatch();
  const apiMovies = useAppSelector(getMovieSelector);
  const { t, i18n } = useTranslation(['common']);
  const { url, params } = useRouteMatch<MatchParams>();
  const history = useHistory();
  const [tabValue, setTabValue] = useState(tabs[0]);
  // const tabs = Object.keys(movies.isWatchLater);
  const chapter = tabs.find((el) => el.param === params.chapter);
  const movies = apiMovies.filter((m) => m.isWatchLater![chapter?.value || 'withFriends']);

  useEffect(() => {
    const promise = dispatch(movieAsyncActions.getWatchLaterMovie());
    return () => {
      promise.abort();
    };
  }, [dispatch, i18n.language]);

  return (
    <>
      <S.WatchLaterPageTitle>{t('watch_movies')}</S.WatchLaterPageTitle>
      <S.PageTabsWrapper>
        {tabs.map((tab) => {
          return (
            <S.WatchLaterPageTabs
              to={`${ERoutes.watch_later}/${tab.param}`}
              key={tab.param}
              activetab={matchExact(tab.param, params?.chapter?.match(`${tab.param}`))}
            >
              {t(tab.value)}
            </S.WatchLaterPageTabs>
          );
        })}
      </S.PageTabsWrapper>
      <MovieMenu movies={movies}></MovieMenu>
    </>
  );
};

export default WatchLaterPage;
