import { AsyncThunkOptions, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../../store/store';
// import { REFRESH_TOKEN } from '../../CONST/keys-localStorage';
// import { API_ENDPOINT_RENEWAL_PAIR_TOKENS } from '../../CONST/api-endpoints';
// import { getFromStorage } from '../local-session-storage/service-localStorage';
import { AxiosService } from '../api/axios.service';

export class AsyncThunkService extends AxiosService {
  constructor() {
    super();
  }

  launchErrorMiddleware = (thunkAPI: any, error: any) => {
    switch (true) {
      case error.isAxiosError:
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          info: Object.keys(error.response.data).length ? error.response.data : error.message,
        });
      case axios.isCancel(error):
        return thunkAPI.rejectWithValue(error.message);
      default:
        return thunkAPI.rejectWithValue({ info: error.message });
    }
  };

  // refreshToken = async (refreshToken, executedFunction, thunkAPI, dataFromThunk) => {
  //   try {
  //     const { data } = await this.clientPut({
  //       url: API_ENDPOINT_RENEWAL_PAIR_TOKENS,
  //       body: { refreshToken: refreshToken },
  //     });
  //     this.saveTokenPair(data);
  //     let resp = await executedFunction(dataFromThunk, { ...thunkAPI });
  //     return resp;
  //   } catch (error) {
  //     return this.launchErrorMiddleware(thunkAPI, error);
  //   }
  // };

  launchAsyncThunk = (
    typePrefix: string,
    executesFunction: any,
    options?: AsyncThunkOptions<void, {}> | undefined
  ) => {
    return createAsyncThunk(
      typePrefix,
      async (data: any, thunkAPI): Promise<any> => {
        try {
          const resp = await executesFunction(data, { ...thunkAPI });
          return resp;
        } catch (error) {
          // const refreshToken = getFromStorage(REFRESH_TOKEN);
          // if (error?.response?.status === 403 && refreshToken) {
          //   return this.refreshToken(refreshToken, executesFunction, thunkAPI, data);
          // }
          return this.launchErrorMiddleware(thunkAPI, error);
        }
      },
      options
    );
  };
}
