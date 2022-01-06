import { API_ENDPOINT, API_ENDPOINT_LOGIN, API_ENDPOINT_SIGN_UP } from '../../CONST/api-endpoints';
import { AUTH_TYPES_PREFIX } from '../../CONST/types-prefix-thunk/types-prefix-auth';
import { login, putUserToStore } from '../../redux-slices/auth-slice';
import { AxiosService } from '../api/axios.service';
import { AsyncThunkService } from '../asyncThunk-service/asyncThunk-service';

const axiosService = new AxiosService();
const asyncThunkService = new AsyncThunkService();

export const asyncApiAuth = {
  signUpAction: asyncThunkService.launchAsyncThunk(
    AUTH_TYPES_PREFIX.signUpAction,
    async (data: any, { dispatch }: any) => {
      const resp = await axiosService.clientPost({
        body: data,
        url: API_ENDPOINT_SIGN_UP,
      });
      return resp.data;
    }
  ),
  loginAction: asyncThunkService.launchAsyncThunk(
    AUTH_TYPES_PREFIX.loginAction,
    async (data: any, { dispatch }: any) => {
      const resp = await axiosService.clientPost({
        url: API_ENDPOINT_LOGIN,
        body: data,
      });
      dispatch(login(resp.data));
      return resp.data;
    }
  ),
  getMyProfileAction: asyncThunkService.launchAsyncThunk(
    AUTH_TYPES_PREFIX.getMyProfileAction,
    async (user_id: string, { dispatch, getState, signal }: any) => {
      const resp = await axiosService.clientGet({ url: API_ENDPOINT + user_id }, signal);
      dispatch(putUserToStore(resp.data));
      return resp.data;
    }
  ),
};
