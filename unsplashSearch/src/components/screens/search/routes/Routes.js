import { createStackNavigator } from 'react-navigation';

import defaultOptions from '../../../../routes/defaultOptions';
import ROUTE_NAMES from './route-names';

import SearchResults from '../components/results/Results';
import Search from '../components/Search';

const SearchStack = createStackNavigator(
  {
    [ROUTE_NAMES.SEARCH]: {
      screen: Search,
    },

    [ROUTE_NAMES.RESULTS]: {
      screen: SearchResults,
    },
  },
  {
    ...defaultOptions,
    initialRouteName: ROUTE_NAMES.SEARCH,
  },
);

export default SearchStack;
