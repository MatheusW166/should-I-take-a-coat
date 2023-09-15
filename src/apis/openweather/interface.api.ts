// TODO: Implement open weather metadata
export interface IOpenWeatherApi {
  getWeatherFromCountry: (country: string) => object;
  getForecastFromCountry: (country: string) => object;
}