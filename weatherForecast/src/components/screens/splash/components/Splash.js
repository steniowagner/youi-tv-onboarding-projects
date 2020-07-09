import React, { Component } from 'react';
import { Easing, Animated, View } from 'react-native';
import styled from 'styled-components';

import { getItemFromStorage, setItemOnStorage } from '../../../../utils/storage-manager';
import CONSTANTS from '../../../../utils/constants';

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

const DEFAULT_CITIES = ['Ottawa, Canada', 'Los Angeles, California'];

class Splash extends Component {
  splinAnimatedValue = new Animated.Value(0);
  
  spinInterpolationValue = this.splinAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  async componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.splinAnimatedValue,
        {
         toValue: 1,
         duration: 7000,
         easing: Easing.linear,
         useNativeDriver: true
        }
      )
    ).start();
    
    await this.handleLoadRegisteredCities();
  }

  handleLoadRegisteredCities = async () => {
    const registeredCities = await this.getRegisteredCitiesList();

    navigation.navigate('', {
      registeredCities,
    });
  }

  getRegisteredCitiesList = async () => {
    const registeredCities = await getItemFromStorage(CONSTANTS.KEYS.APP_STORAGE_KEY, undefined);

    if (!registeredCities) {
      await setItemOnStorage(CONSTANTS.KEYS.APP_STORAGE_KEY, DEFAULT_CITIES);
    }

    return registeredCities || DEFAULT_CITIES;
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