import React, { Component } from 'react';
import { View } from 'react-native';

import { getItemFromStorage } from '../../../../utils/storage-manager';
import CONSTANTS from '../../../../utils/constants';

class Lander extends Component {
  async componentDidMount() {
    const registeredCities = await getItemFromStorage(CONSTANTS.KEYS.APP_STORAGE_KEY, undefined);

    console.log(registeredCities);
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
