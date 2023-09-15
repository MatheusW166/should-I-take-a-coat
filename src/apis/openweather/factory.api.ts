import { OpenWeatherApi } from './services.api';
import axios from 'axios';

export class OpenWeatherApiFactory {
  public static create() {
    const client = axios.create({ baseURL: process.env.REACT_APP_API_URL });

    client.interceptors.request.use((request) => {
      request.params = {
        appid: process.env.REACT_APP_API_KEY
      };
      return request;
    });

    return new OpenWeatherApi(client);
  }
}