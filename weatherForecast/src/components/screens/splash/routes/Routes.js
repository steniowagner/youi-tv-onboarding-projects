import { createStackNavigator } from 'react-navigation';

import defaultOptions from '../../../../routes/defaultOptions';
import Splash from '../components/Splash';
import ROUTE_NAMES from './route-names';

const SplashStack = createStackNavigator(
  {
    [ROUTE_NAMES.SPLASH]: {
      screen: Splash,
    }
  },
  {
    ...defaultOptions,
    initialRouteName: ROUTE_NAMES.SPLASH,
  },
);

export default SplashStack;
