import { Weather } from '@/apis/openweather';
import { WeatherContainer } from './styles';

type WeatherOverviewProps = Partial<Omit<Weather, 'id' | 'coord'>>;

export function WeatherOverview({
  country,
  description,
  max,
  min,
  temp
}: WeatherOverviewProps) {
  return (
    <WeatherContainer>
      <div>
        <h2>Agora: {country}</h2>
        <p>Mínima: {min}ºC</p>
        <p>Máxima: {max}ºC</p>
      </div>
      <div>
        <p>{description}</p>
        <h2>{temp}ºC</h2>
      </div>
    </WeatherContainer>
  );
}