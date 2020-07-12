import React, { Component } from 'react';
import { Modal, Image, View } from 'react-native';
import styled from 'styled-components';

import WeatherList from './weather-list/WeatherList';
import AboutDeviceInfo from './AboutDeviceInfo';
import Header from '../../../../common/Header';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const AppIcon = styled(Image)`
  width: 48px;
  height: 48px;
`;

class Lander extends Component {
  state = {
    shoudlRefreshWeatherList: false,
    isAboutDeviceModalOpen: false,
  };
  
  render() {
    const { shoudlRefreshWeatherList, isAboutDeviceModalOpen } = this.state;
    const { navigation } = this.props;

    return (
      <Wrapper>
        <Header
          onPressDeviceInfoButton={() => this.setState({ isAboutDeviceModalOpen: true })}
          onPressRefreshButton={() => this.setState({ shoudlRefreshWeatherList: true })}
          LeftIcon={() => (
            <AppIcon
              source={{
                uri: 'res://drawable/default/app-icon.png'
              }}
            />
          )}
          title="Weather App" 
        />
        <WeatherList
          onRefreshWeatherData={() => this.setState({ shoudlRefreshWeatherList: false })}
          shoudlRefreshWeatherList={shoudlRefreshWeatherList}
          navigation={navigation}
        />
        <Modal
          visible={isAboutDeviceModalOpen}
          animationType="slide"
          transparent={false}
        >
          <AboutDeviceInfo
            onPressBackButton={() => this.setState({ isAboutDeviceModalOpen: false })}
          />
        </Modal>
      </Wrapper>       
    );
  }
}

export default Lander;
