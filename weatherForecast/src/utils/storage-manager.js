import { AsyncStorage } from 'react-native';

import CONSTANTS from './constants';

export const getItemFromStorage = async (key, defaultValue) => {
  try {
    const rawValue = await AsyncStorage.getItem(`${CONSTANTS.KEYS.APP_STORAGE_KEY}:${key}`);

    if (!rawValue) {
      return defaultValue;
    }

    return JSON.parse(rawValue);
  } catch (err) {
    console.error('storage-manager/getItemFromStorage - error: ', err)
    return defaultValue;
  }
}

export const setItemOnStorage = (key, value) =>
  AsyncStorage.setItem(`${CONSTANTS.KEYS.APP_STORAGE_KEY}:${key}`, JSON.stringify(value));

export const removeItemFromStorage = async key =>
  AsyncStorage.removeItem(`${CONSTANTS.KEYS.APP_STORAGE_KEY}:${key}`);
