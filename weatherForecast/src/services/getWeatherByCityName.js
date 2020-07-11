import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

const OPEN_WEATHER_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCityName = async city => {
  const result = await fetch(`${OPEN_WEATHER_API_BASE_URL}?units=metric&q=${city}&appid=${OPEN_WEATHER_API_KEY}`);

  if (!result.ok) {
    return undefined;
  }

  return JSON.parse(result._bodyText);
};
