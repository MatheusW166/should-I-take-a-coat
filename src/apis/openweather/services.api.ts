import { AxiosInstance } from 'axios';
import { IOpenWeatherApi } from './interface.api';

export class OpenWeatherApi implements IOpenWeatherApi {
  constructor(private readonly client: AxiosInstance) {}

  // TODO: Implement open weather services

  getForecastFromCountry(country: string) {
    console.log(this.client);
    return { country };
  }

  getWeatherFromCountry(country: string) {
    return { country };
  }
}

