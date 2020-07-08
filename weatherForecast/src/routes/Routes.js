import { createSwitchNavigator } from 'react-navigation';

import SplashRoutes from '../components/screens/splash/routes/Routes';
import ROUTE_NAMES from './route-names';

const routes = createSwitchNavigator({
  [ROUTE_NAMES.SPLASH]: {
    screen: SplashRoutes
  },
});

export default routes;
