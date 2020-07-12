import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';

import { getItemFromStorage, setItemOnStorage } from '../../../../utils/storage-manager';
import { getUserLocationInfo } from '../../../../services';
import SpinComponent from '../../../common/SpinComponent';
import CONSTANTS from '../../../../utils/constants';
import ROUTES from '../../../../routes/route-names';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const SplashImage = styled(Image)`
  width: 180px;
  height: 180px;
  resize-mode: contain;
`;

class Splash extends Component {
  async componentDidMount() {
    const { navigation } = this.props;

    await this.handleSyncStorageInfo();

    navigation.navigate(ROUTES.MAIN);
  }

  handleSyncStorageInfo = async () => {
    return Promise.all([
      this.handleSetRegisteredCities(),
      this.handleUserLocationInfo(),
    ]);
  }

  handleUserLocationInfo = async () => {
    // for simplicity, I'm not considering that the user could move to another location (in cases of mobile devices).

    const userLocationInfoFromStorage = await getItemFromStorage(CONSTANTS.KEYS.USER_LOCATION_INFO_STORAGE_KEY, undefined);

    if (!userLocationInfoFromStorage) {
      const userLocationInfo = await getUserLocationInfo();

      await setItemOnStorage(CONSTANTS.KEYS.USER_LOCATION_INFO_STORAGE_KEY, userLocationInfo);
    }
  }

  handleSetRegisteredCities = async () => {
    const registeredCities = await getItemFromStorage(CONSTANTS.KEYS.REGISTERED_CITIES_STORAGE_KEY, undefined);

    if (!registeredCities) {
      await setItemOnStorage(CONSTANTS.KEYS.REGISTERED_CITIES_STORAGE_KEY, CONSTANTS.VALUES.DEFAULT_CITIES);
    }
  }

  render() {
    return (
      <Wrapper>
        <SpinComponent>
          <SplashImage
            source={{
              uri: 'res://drawable/default/splash.png'
            }}
          />
        </SpinComponent>
      </Wrapper>
    );
  }
}

export default Splash;