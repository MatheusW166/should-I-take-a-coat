import { Weather } from '@/apis/openweather';
import { WeatherContainer } from './styles';

type WeatherOverviewProps = Partial<Omit<Weather, 'id' | 'coord'>>;

function mapDescription(description = 'Tempo') {
  const weather: { [key: string]: string } = {
    Clear: 'Céu aberto',
    Clouds: 'Nublado',
    Rain: 'Chovendo',
    Snow: 'Nevando',
    Thunderstorm: 'Tempestade',
    Drizzle: 'Chuviscando',
    Mist: 'Neblina'
  };
  return weather[description] ?? description;
}

function mapColor(description = 'Tempo') {
  const colors: { [key: string]: string } = {
    Clear: '#aba91f',
    Clouds: '#808080',
    Rain: '#0b40a1',
    Snow: '#a6a6a6',
    Thunderstorm: '#5b0ba1',
    Drizzle: '#06949c',
    Mist: '#a6a6a6'
  };
  return colors[description] ?? '#808080';
}

export function WeatherOverview({
  country,
  description,
  max,
  min,
  temp
}: WeatherOverviewProps) {
  return (
    <WeatherContainer overviewBackground={mapColor(description)}>
      <div>
        <h2>Agora: {country}</h2>
        <p>Mínima: {min}ºC</p>
        <p>Máxima: {max}ºC</p>
      </div>
      <div>
        <p>{mapDescription(description)}</p>
        <h2>{temp}ºC</h2>
      </div>
    </WeatherContainer>
  );
}