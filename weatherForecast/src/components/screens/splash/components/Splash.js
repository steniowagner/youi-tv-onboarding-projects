import React, { Component } from 'react';
import { Easing, Animated, View } from 'react-native';
import styled from 'styled-components';

import { removeItemFromStorage, getItemFromStorage, setItemOnStorage } from '../../../../utils/storage-manager';
import { getUserLocationInfo } from '../../../../services';
import CONSTANTS from '../../../../utils/constants';
import ROUTES from '../../../../routes/route-names';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const SplashImage = styled(Animated.Image)`
  width: 180px;
  height: 180px;
  resize-mode: contain;
`;

class Splash extends Component {
  splinAnimatedValue = new Animated.Value(0);
  
  spinInterpolationValue = this.splinAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  async componentDidMount() {
    const { navigation } = this.props;

    Animated.loop(
      Animated.timing(
        this.splinAnimatedValue,
        {
         toValue: 1,
         duration: 7000,
         easing: Easing.linear,
         useNativeDriver: true,
        }
      )
    ).start();

    await removeItemFromStorage(CONSTANTS.KEYS.USER_LOCATION_INFO_STORAGE_KEY);

    await removeItemFromStorage(CONSTANTS.KEYS.REGISTERED_CITIES_STORAGE_KEY);

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
        <SplashImage
          style={{transform: [{ rotate: this.spinInterpolationValue }] }}
          source={{
            uri: 'res://drawable/default/splash.png'
          }}
        />
      </Wrapper>
    );
  }
}

export default Splash;