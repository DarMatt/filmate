import { AnyAction, Dispatch, Middleware } from 'redux';
import { HTTP_FULFILLED_STATUS, HTTP_PENDING_STATUS } from '../CONST/http-request-status';
import { setAsyncActionsInState, removeAsyncActionsFromState } from '../redux-slices/loading-slice';

export const loadingMiddleware: Middleware<any, any, Dispatch<AnyAction>> =
  (api) => (next) => (action) => {
    if (action?.meta?.requestStatus === HTTP_PENDING_STATUS) {
      api.dispatch(
        setAsyncActionsInState({
          requestId: action.meta.requestId,
          typePrefix: action.type.match(/^\w+\/\w+/)[0],
        })
      );
    }

    if (action?.meta?.requestStatus === HTTP_FULFILLED_STATUS) {
      api.dispatch(removeAsyncActionsFromState({ requestId: action.meta.requestId }));
    }
    return next(action);
  };
