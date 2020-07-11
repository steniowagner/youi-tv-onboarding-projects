import { createSwitchNavigator } from 'react-navigation';

import SplashRoutes from '../components/screens/splash/routes/Routes';
import MainRoutes from '../components/screens/main/routes/Routes';
import ROUTE_NAMES from './route-names';

const routes = createSwitchNavigator({
  [ROUTE_NAMES.SPLASH]: {
    screen: SplashRoutes
  },

  [ROUTE_NAMES.MAIN]: {
    screen: MainRoutes
  },
}, {
  initialRouteName: ROUTE_NAMES.MAIN,
});

export default routes;
