import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import styled from 'styled-components';

import WeatherList from './weather-list/WeatherList';
import AboutDeviceInfo from './AboutDeviceInfo';
import Header from './Header';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

class Lander extends Component {
  state = {
    shoudlRefreshWeatherList: false,
    isAboutDeviceModalOpen: false,
  };
  
  render() {
    const { shoudlRefreshWeatherList, isAboutDeviceModalOpen } = this.state;

    return (
      <Wrapper>
        <Header
          onPressDeviceInfoButton={() => this.setState({ isAboutDeviceModalOpen: true })}
          onPressRefreshButton={() => this.setState({ shoudlRefreshWeatherList: true })}
        />
        <WeatherList
          onRefreshWeatherData={() => this.setState({ shoudlRefreshWeatherList: false })}
          shoudlRefreshWeatherList={shoudlRefreshWeatherList}
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
