import { AsyncStorage } from 'react-native';

import CONSTANTS from './constants';

export const getItemFromStorage = async (key, defaultValue) => {
  const value = (await AsyncStorage.getItem(`${CONSTANTS.APP_STORAGE_KEY}:${key}`)) || defaultValue;

  return value;
}

export const setItemOnStorage = (key, value) =>
  AsyncStorage.setItem(`${CONSTANTS.APP_STORAGE_KEY}:${key}`, value.toString());
