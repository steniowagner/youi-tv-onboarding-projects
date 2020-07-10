import { NativeModules } from 'react-native';

import handleAndroidLocationPermission from './handleAndroidLocationPermission';
import getLocationIPBased from '../get-location-ip-based/getLocationIPBased';

const getMobileLocationInfo = async () => {
  if (NativeModules.PlatformConstants.platform === 'android') {
    const isLocationPermissionGranted = await handleAndroidLocationPermission();

    if (isLocationPermissionGranted) {
      return getLocationIPBased();
    }

    return undefined;
  }

  if (NativeModules.PlatformConstants.platform === 'ios') {
    return getLocationIPBased();
  }
};

export default getMobileLocationInfo;
