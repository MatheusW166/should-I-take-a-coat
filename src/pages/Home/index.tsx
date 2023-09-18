import {
  CountryForm,
  PageContainer,
  TitleH1,
  WeatherChart,
  WeatherOverview
} from '@/components';
import { useWeather } from '@/hooks/useWeather';
import { FormEvent } from 'react';

type FormEventProps = FormEvent<HTMLFormElement> & { target: { country: HTMLInputElement } };

export default function Home() {
  const { forecast, weather, loading, searchForecast } = useWeather();

  const onSubmit = (event: FormEventProps) => {
    event.preventDefault();
    const country = event.target['country'].value.trim();
    if (!country) return;
    searchForecast(country);
  };

  return (
    <PageContainer>
      <TitleH1>Levo um casaquinho?</TitleH1>
      <CountryForm loading={loading} onSubmit={onSubmit} />
      <WeatherOverview
        country={weather?.country}
        description={weather?.description}
        max={weather?.max}
        min={weather?.min}
        temp={weather?.temp}
      />
      <WeatherChart forecast={forecast} />
    </PageContainer>
  );
}