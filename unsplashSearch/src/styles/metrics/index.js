import { FormFactor } from '@youi/react-native-youi';

import helpers from './helpers';
import handset from './handset';
import tablet from './tablet';
import tv from './tv';

let metricsBasedPlatformType = {};

if (FormFactor.isTablet) {
  metricsBasedPlatformType = tablet;
}

if (FormFactor.isHandset) {
  metricsBasedPlatformType = handset;
}

if (FormFactor.isTV) {
  metricsBasedPlatformType = tv;
}

export default {
  ...metricsBasedPlatformType,
  ...helpers,
};