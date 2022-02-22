import axios from 'axios';
import axiosRetry from 'axios-retry';
// import { store } from 'src/store';
import { NETWORK_ERROR } from 'src/constants';

const baseURL = 'http://localhost:3000';

const httpClient = axios.create({
  baseURL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
  timeout: 2500,
  timeoutErrorMessage: NETWORK_ERROR
});
axiosRetry(httpClient, { retryDelay: axiosRetry.exponentialDelay });

/**
 * Функция-перехватчик для отправки запроса
 * В ней можно изменять заголовки перед отправление запроса
 * @returns дополненый конфигурационный объект axios'a
 * @returns ошибка
 */
httpClient.interceptors.request.use(
  async (config) => {
    // const token = store.getState().authStore.token; // Это нужно переделать на токен в редаксе
    // if (token) {
    //   config.headers!['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * Функция-перехватчик для ответа запроса
 * В ней происходит предобработка ответа
 * @returns сконфигурированый объект ответа из axios'a
 * @returns ошибка
 */
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default httpClient;
