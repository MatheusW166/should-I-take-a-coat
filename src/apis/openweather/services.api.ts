import { AxiosInstance } from 'axios';
import { IOpenWeatherApi } from './interface.api';

export class OpenWeatherApi implements IOpenWeatherApi {
  constructor(private readonly client: AxiosInstance) {}

  async getForecastFromCountry(country: string) {
    const response = await this.client.get('/forecast', { params: { q: country } });
    const forecasts: { dt: number, dt_txt: string, main: { temp: number } }[] = response.data.list ?? [];
    return forecasts.map((forecast) => {
      return {
        temp: forecast.main.temp,
        dt: forecast.dt,
      };
    });
  }

  async getWeatherFromCountry(country: string) {
    const response = await this.client.get('/weather', { params: { q: country } });
    const data = response.data;
    return {
      country: data.name,
      id: data.id,
      coord: data.coord,
      description: data.weather[0].main,
      temp: data.main.temp,
      min: data.main.temp_min,
      max: data.main.temp_max,
    };
  }
}
