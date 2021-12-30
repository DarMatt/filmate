import { formatterPathConcatPath } from '../../formatters/formatter-local-router';
import { ERoutes } from './routes';

export const ROUTE_FAVORITE_PAGE = {
  path: ERoutes.favorite,
  params: [],
  getFullUrl: formatterPathConcatPath,
};

export const ROUTE_FAVORITE_DETAILS_PAGE = {
  path: ERoutes.favorite_details,
  params: ['id'],
  getFullUrl: formatterPathConcatPath,
};

export const ROUTE_WATCH_LATER_PAGE = {
  path: ERoutes.watch_later,
  params: ['chapter?'],
  getFullUrl: formatterPathConcatPath,
};

export const ROUTE_WATCH_LATER_DETAILS_PAGE = {
  path: ERoutes.watch_later_details,
  params: ['id'],
  getFullUrl: formatterPathConcatPath,
};
