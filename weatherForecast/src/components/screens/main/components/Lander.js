import React, { Component } from 'react';
import { View } from 'react-native';

import { getItemFromStorage } from '../../../../utils/storage-manager';
import CONSTANTS from '../../../../utils/constants';

class Lander extends Component {
  async componentDidMount() {
    const registeredCities = await getItemFromStorage(CONSTANTS.KEYS.REGISTERED_CITIES_STORAGE_KEY, undefined);
    const userLocationInfo = await getItemFromStorage(CONSTANTS.KEYS.USER_LOCATION_INFO_STORAGE_KEY, {});

    console.log('registeredCities: ', registeredCities);
    console.log('userLocationInfo: ', userLocationInfo.city, userLocationInfo.state, userLocationInfo.country);
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f0f',
        }}
      />
    );
  }
}

export default Lander;
