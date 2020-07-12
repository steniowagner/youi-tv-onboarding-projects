import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components';

import WeatherInfoList from './weather-info-list/WeatherInfoList';
import ActivityLoading from '../../../../common/ActivityLoading';
import {getWeekForecastByCityId} from '../../../../../services';
import ActionButton from '../../../../common/ActionButton';
import CONSTANTS from '../../../../../utils/constants';
import Header from '../../../../common/Header';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const LoadingWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class Information extends Component {
  state = {
    weatherForecastWeek: [],
    isLoading: false,
  }

  async componentDidMount() {
   await this.getWeekForecasData();
  }

  getWeekForecasData = async () => {
    const { params } = this.props.navigation.state;
    const { id } = params[CONSTANTS.KEYS.CITY_DATA_INFORMATION_PARAM];

    this.setState({
      isLoading: true,
    });

    const weatherForecastWeek = await getWeekForecastByCityId(id);

    this.setState({
      weatherForecastWeek,
      isLoading: false,
    });
  };

  render() {
    const { params } = this.props.navigation.state;
    const { weatherForecastWeek, isLoading } = this.state;

    if (isLoading) {
      return (
        <Wrapper>
          <LoadingWrapper>
            <ActivityLoading />
          </LoadingWrapper>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header
          onPressDeviceInfoButton={() => {}}
          onPressRefreshButton={this.getWeekForecasData}
          title={params[CONSTANTS.KEYS.CITY_DATA_INFORMATION_PARAM].city}
          LeftIcon={() => (
            <ActionButton
              onPress={() => this.props.navigation.goBack()}
              iconName="arrow-back-icon"
            />
          )}
        />
        <ScrollView>
          {weatherForecastWeek.map((weatherForecastWeekItem, index) => (
            <WeatherInfoList
              weatherData={weatherForecastWeekItem}
              key={weatherForecastWeekItem.date}
              index={index}
            />
          ))}
        </ScrollView>
      </Wrapper>
    );
  }
}

export default Information;
