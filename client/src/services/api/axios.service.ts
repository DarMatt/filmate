//@ts-nocheck
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import { BASE_LOCAL_URL } from '../../CONST/baseURLs';
import { getFromStorage, setToStorage } from '../local-session-storage/service-localStorage';
import { STORAGE_NAME } from '../../CONST/key-localStorage';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  withCredentials: true,
});

// export const createClient = (baseURL?: string = BASE_LOCAL_URL) => {
//   return axios.create({
//     baseURL: baseURL,
//     responseType: 'json',
//     withCredentials: true,
//   });
// }

export class AxiosService {
  constructor(url = '') {
    client.interceptors.request.use(this.reqInterceptors, (error) => Promise.reject(error));
    client.interceptors.response.use(this.responseInterceptors, this.responseInterceptorsError);
  }

  reqInterceptors = async (config) => {
    const accessToken = getFromStorage(STORAGE_NAME).token;
    if (accessToken) {
      config.headers['authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  };

  // saveTokenPair(tokensPair) {
  //   setToStorage(ACCESS_TOKEN, tokensPair.accessToken);
  //   setToStorage(REFRESH_TOKEN, tokensPair.refreshToken);
  // }

  responseInterceptors = async (response: any) => {
    return response;
  };

  responseInterceptorsError = (error: unknown) => {
    return Promise.reject(error);
  };

  async clientPost({ url, body }: any) {
    return await client.post(url, body);
  }

  async clientGet({ url }: { url: string }, signal = {}, options = {}) {
    let source: CancelTokenSource | null = null;
    const configForMethod = options;
    if (signal.constructor.name === 'AbortSignal') {
      source = axios.CancelToken.source();
      signal.addEventListener('abort', () => {
        source.cancel();
      });
      configForMethod.cancelToken = source.token;
    }
    return await client.get(url, configForMethod);
  }

  async clientPut({ url, body }: any, options: AxiosRequestConfig<any> | undefined) {
    return await client.put(url, body, options);
  }

  async clientDelete(urlObj: { url: string }, options?: AxiosRequestConfig<any> | undefined) {
    return await client.delete(urlObj.url, options);
  }
}
function ACCESS_TOKEN(ACCESS_TOKEN: any, accessToken: any) {
  throw new Error('Function not implemented.');
}
