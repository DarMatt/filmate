import { lazy } from 'react';
import {
  ROUTE_MAIN_DETAILS_PAGE,
  ROUTE_HOME_PAGE,
} from '../../CONST/list-local-routes/list-routes-public';
import {
  ROUTE_FAVORITE_PAGE,
  ROUTE_FAVORITE_DETAILS_PAGE,
  ROUTE_WATCH_LATER_PAGE,
  ROUTE_WATCH_LATER_DETAILS_PAGE,
  ROUTE_FRIENDS_PAGE,
} from '../../CONST/list-local-routes/list-routes-protect';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('../MovieDetails/MovieDetails'));
const FavoritePage = lazy(() => import('../../pages/FavoritePage/FavoritePage'));
const WatchLater = lazy(() => import('../../pages/WatchLaterPage/WatchLaterPage'));
const Friends = lazy(() => import('../../pages/Friends/FriendsChatPage'));
const ComingSoon = lazy(() => import('../ComingSoon/ComingSoon'));
const SignIn = lazy(() => import('../SignIn/SignIn'));
const Step1 = lazy(() => import('../SignUp/Step1'));
const Step2 = lazy(() => import('../SignUp/Step2'));
const Step3 = lazy(() => import('../SignUp/Step3'));
const Result = lazy(() => import('../SignUp/result'));

export const PUBLIC_ROUTER = [
  {
    path: ROUTE_MAIN_DETAILS_PAGE.getFullUrl(),
    page: MovieDetailsPage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_HOME_PAGE.getFullUrl(),
    page: HomePage,
    hideAfterLogin: false,
  },
];

export const PROTECT_ROUTER = [
  {
    path: ROUTE_FAVORITE_DETAILS_PAGE.getFullUrl(),
    page: MovieDetailsPage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_FAVORITE_PAGE.getFullUrl(),
    page: FavoritePage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_WATCH_LATER_DETAILS_PAGE.getFullUrl(),
    page: MovieDetailsPage,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_WATCH_LATER_PAGE.getFullUrl(),
    page: WatchLater,
    hideAfterLogin: false,
  },
  {
    path: ROUTE_FRIENDS_PAGE.getFullUrl(),
    page: Friends,
    hideAfterLogin: false,
  },
];

export const MODAL_ROUTER = [
  {
    path: '/',
    page: SignIn,
    hideAfterLogin: true,
  },
  {
    path: '/',
    page: Step1,
    hideAfterLogin: true,
  },
  {
    path: '/',
    page: Step2,
    hideAfterLogin: true,
  },
  {
    path: '/',
    page: Step3,
    hideAfterLogin: true,
  },
  {
    path: '/',
    page: Result,
    hideAfterLogin: true,
  },
];
