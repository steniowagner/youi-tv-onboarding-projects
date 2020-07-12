import { createStackNavigator } from 'react-navigation';

import defaultOptions from '../../../../routes/default-options';
import Information from '../components/information/Information';
import Lander from '../components/lander/Lander';
import ROUTE_NAMES from './route-names';

const LanderStack = createStackNavigator(
  {
    [ROUTE_NAMES.LANDER]: {
      screen: Lander,
    },

    [ROUTE_NAMES.INFORMATION]: {
      screen: Information,
    }
  },
  {
    ...defaultOptions,
    initialRouteName: ROUTE_NAMES.LANDER,
  },
);

export default LanderStack;
