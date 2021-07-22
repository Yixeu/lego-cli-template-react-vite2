import axios from 'axios';
import { message } from 'antd';
import { AxiosResponse } from 'axios';

interface IAxiosConfig {
  method:
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'PUT'
  | 'put'
  | 'DELETE'
  | 'delete';
  params?: any;
  data?: any;
  headers?: { [index: string]: string };
}

const BASE_URL: string = import.meta.env.MODE === 'development' ? '/api' : 'https://xxx.xxx.xxx';

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  (res) => {
    const { data } = res;
    // 统一处理response data ，适用于错误封装
    if (data && data.code === 'success') {
      return data.obj;
    }
    message.error(`${data.message ? data.message : '网络错误！'}`, 2);
    return Promise.reject(data);
  },
  (error) => Promise.reject(error),
);

export function request<T>(
  url: string,
  config: IAxiosConfig,
): Promise<
  AxiosResponse<{
    code: string;
    errcode: string;
    message: string;
    obj: T;
  }>
  > {
  const headers = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    crossDomain: 'true',
    // "Access-Control-Expose-Headers": "Content-Disposition"
  };
  config.params = config.params || {};
  return axios.request<{
    code: string;
    errcode: string;
    message: string;
    obj: T;
  }>({
    url: BASE_URL + url,
    headers,
    ...config,
  });
}
