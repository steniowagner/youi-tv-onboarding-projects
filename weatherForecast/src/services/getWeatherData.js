import { getItemFromStorage } from '../utils/storage-manager';
import { getWeatherByCityName } from './getWeatherByCityName'
import CONSTANTS from '../utils/constants';

const getRequiredDataFromStorage = async () => {
  return Promise.all([
    getItemFromStorage(CONSTANTS.KEYS.USER_LOCATION_INFO_STORAGE_KEY, undefined),
    getItemFromStorage(CONSTANTS.KEYS.REGISTERED_CITIES_STORAGE_KEY, CONSTANTS.VALUES.DEFAULT_CITIES),
  ]);
};

const getRequests = (userLocation, citiesRegistered) => {
  const userCityData = `${userLocation.city}, ${userLocation.state}`;

  const citiesToQuery = [userCityData, ...citiesRegistered];

  return citiesToQuery.map(cityToQuery => getWeatherByCityName(cityToQuery));
};

const parseWeatherData = weatherData => weatherData.map(data => ({
  temperature: `${Math.ceil(data.main.temp)} °c`,
  description: data.weather[0].description,
  icon: data.weather[0].icon,
  city: data.name,
  id: data.id,
}));

export const getWeatherData = async () => {
  const [userLocation, citiesRegistered] = await getRequiredDataFromStorage();

  const requests = getRequests(userLocation, citiesRegistered);

  const result = await Promise.all(requests);

  return parseWeatherData(result);
};
