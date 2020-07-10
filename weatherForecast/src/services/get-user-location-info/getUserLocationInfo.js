import { FormFactor } from '@youi/react-native-youi';

import getMobileLocationInfo from './get-mobile-location-info/getMobileLocationInfo';
import getLocationIPBased from './get-location-ip-based/getLocationIPBased';

export const getUserLocationInfo = async () => {
  if (FormFactor.isTV) {
    return getLocationIPBased();
  }

  return getMobileLocationInfo();
}
