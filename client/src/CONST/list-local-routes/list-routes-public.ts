import { formatterPathConcatPath } from '../../formatters/formatter-local-router';
import { ERoutes } from './routes';

export const ROUTE_HOME_PAGE = {
  path: ERoutes.home,
  params: ['genre?'],
  getFullUrl: formatterPathConcatPath,
};

export const ROUTE_MAIN_DETAILS_PAGE = {
  path: ERoutes.main_details,
  params: ['id', 'genre?'],
  getFullUrl: formatterPathConcatPath,
};
