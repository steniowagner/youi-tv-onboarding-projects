import { createStackNavigator } from 'react-navigation';

import defaultOptions from '../../../../routes/default-options';
import Lander from '../components/Lander';
import ROUTE_NAMES from './route-names';

const LanderStack = createStackNavigator(
  {
    [ROUTE_NAMES.LANDER]: {
      screen: Lander,
    }
  },
  {
    ...defaultOptions,
    initialRouteName: ROUTE_NAMES.LANDER,
  },
);

export default LanderStack;
