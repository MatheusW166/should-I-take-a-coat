import { OpenWeatherApi } from './services.api';
import axios from 'axios';

export class OpenWeatherApiFactory {
  public static create(units = 'metric') {
    const client = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

    client.interceptors.request.use((request) => {
      request.params['appid'] = import.meta.env.VITE_APP_API_KEY;
      request.params['units'] = units;
      return request;
    });

    return new OpenWeatherApi(client);
  }
}