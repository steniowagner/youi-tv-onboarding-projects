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
    shoudUpdateWeatherList: false,
  };
  
  render() {
    const { shoudUpdateWeatherList } = this.state;

    return (
      <>
        <Wrapper>
          <Header />
          <WeatherList />
        </Wrapper>       
      </>
    );
  }
}

export default Lander;
