import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import WeatherList from './weather-list/WeatherList';
import Header from './Header';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

class Lander extends Component {
  state = {
    shoudlRefreshWeatherList: false,
  };
  
  render() {
    const { shoudlRefreshWeatherList } = this.state;

    return (
      <>
        <Wrapper>
          <Header
            onPressRefreshButton={() => this.setState({ shoudlRefreshWeatherList: true })}
          />
          <WeatherList
            onRefreshWeatherData={() => this.setState({ shoudlRefreshWeatherList: false })}
            shoudlRefreshWeatherList={shoudlRefreshWeatherList}
          />
        </Wrapper>       
      </>
    );
  }
}

export default Lander;
