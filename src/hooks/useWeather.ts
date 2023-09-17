import { useState } from 'react';
import { Forecast, OpenWeatherApiFactory, Weather } from '@/apis/openweather';

export function useWeather() {
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const searchForecast = async (country: string) => {
    const api = OpenWeatherApiFactory.create();
    setLoading(true);
    const [weather, forecast] = await Promise.all([
      api.getWeatherFromCountry(country),
      api.getForecastFromCountry(country)
    ]);
    setLoading(false);
    setWeather(weather);
    setForecast(forecast);
  };

  return {
    weather,
    forecast,
    loading,
    searchForecast
  };
}