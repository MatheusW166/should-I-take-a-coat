export type Weather = {
  country: string;
  id: number;
  coord: { lon: number, lat: number };
  description: string;
  temp: number;
  min: number;
  max: number;
}

export type Forecast = {
  temp: number;
  dt: number;
}

export interface IOpenWeatherApi {
  getWeatherFromCountry: (country: string) => Promise<Weather>;
  getForecastFromCountry: (country: string) => Promise<Forecast[]>;
}