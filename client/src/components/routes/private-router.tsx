import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { STORAGE_NAME } from '../../CONST/key-localStorage';
import { IPrivateRoute } from '../../interfaces/routesType';
import { getFromStorage } from '../../services/local-session-storage/service-localStorage';

const PrivateRoute: React.FC<IPrivateRoute> = ({ path, children, redirectTo, isAuth, ...rest }) => {
  const accessToken = getFromStorage(STORAGE_NAME).token;

  const renderRouter = () => {
    return (
      <>
        <Route
          exact={true}
          path={path}
          {...rest}
          render={() => (accessToken ? children : <Redirect to={redirectTo} />)}
        />
      </>
    );
  };
  return <>{renderRouter()}</>;
};
export default PrivateRoute;
