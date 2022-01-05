import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTE_LOGIN_PAGE } from '../../CONST/list-local-routes/routes';
import { useAppSelector } from '../../hooks/redux';
import { getAuthStatusSelector } from '../../selectors/selectors';
import { PROTECT_ROUTER, PUBLIC_ROUTER } from './indexRouter';
import PrivateRoute from './private-router';
import { ERoutes } from '../../CONST/list-local-routes/routes';
import { Page404 } from '../../pages/404/page404';
import Step1 from '../SignUp/Step1';
import Step2 from '../SignUp/Step2';
import Step3 from '../SignUp/Step3';
import Result from '../SignUp/result';
import SignIn from '../SignIn/SignIn';

export const Router = () => {
  const isAuth = useAppSelector(getAuthStatusSelector);

  return (
    <>
      <Switch>
        {PUBLIC_ROUTER.map((router, index) => {
          if (isAuth && router.hideAfterLogin) {
            return null;
          } else {
            return (
              <Route exact={true} path={router.path} key={index}>
                <router.page />
              </Route>
            );
          }
        })}
        {PROTECT_ROUTER.map((router, key) => {
          return (
            <PrivateRoute
              path={router.path}
              key={key}
              redirectTo={ERoutes.home + ROUTE_LOGIN_PAGE}
              isAuth={isAuth}
            >
              <router.page />
            </PrivateRoute>
          );
        })}
        <Route exact path="/" render={() => <Redirect to={ERoutes.home} />} />
        <Route exact={true} path={'*'}>
          <Page404 waitBeforeShow={200} />
        </Route>
      </Switch>
      {/* {MODAL_ROUTER.map((router, key) => {
        if (isAuth && router.hideAfterLogin) {
          return null;
        } else {
          return (
            <Route path={router.path} key={key}>
              <router.page />
            </Route>
          );
        }
      })} */}
      <Route path="/" component={Step1} />
      <Route path="/" component={Step2} />
      <Route path="/" component={Step3} />
      <Route path="/" component={Result} />
      <Route path="/" component={SignIn} />
    </>
  );
};
