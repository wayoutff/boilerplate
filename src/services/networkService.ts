import httpClient from 'src/config/httpClient';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
type RequestConfig = AxiosRequestConfig & ModifyType<AxiosRequestConfig, { url: string }>;

const networkRequest = async <T>(config: RequestConfig): Promise<AxiosResponse<T>>  => {
  try {
    const { data } = await httpClient.request(config);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default networkRequest;

