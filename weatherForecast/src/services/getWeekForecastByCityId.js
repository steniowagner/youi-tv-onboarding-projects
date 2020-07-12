import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const parseWeekForecast = ({ list }) => list.map(listItem => ({
  temperature: `${Math.ceil(listItem.main.temp)}°c`,
  weather: listItem.weather[0].description,
  weatherIcon: listItem.weather[0].icon,
  windDirection: `${listItem.wind.deg}°`,
  clouds: `${listItem.clouds.all}%`,
  humidity: listItem.main.humidity,
  windSpeed: listItem.wind.speed,
  date: listItem.dt_txt,
}));

const reduceWeekWeatherForecastItems = weekWeatherForecast => {
  const daysAnalysed = {};

  const reducedWeekWeatherForecastItems = weekWeatherForecast.reduce((previous, current) => {
    const [analysisKey] = current.date.split(' ');

    if (daysAnalysed[analysisKey]) {
      return previous;
    }

    daysAnalysed[analysisKey] = true;

    return [...previous, current];
  }, []);

  return reducedWeekWeatherForecastItems;
}

export const getWeekForecastByCityId = async cityId => {
  const result = await fetch(`${BASE_URL}?units=metric&id=${cityId}&appid=${OPEN_WEATHER_API_KEY}`);

  if (!result.ok) {
    return undefined;
  }

  const parsedItems = parseWeekForecast(JSON.parse(result._bodyText));

  const weekForecast = reduceWeekWeatherForecastItems(parsedItems);
  
  return weekForecast;
};
