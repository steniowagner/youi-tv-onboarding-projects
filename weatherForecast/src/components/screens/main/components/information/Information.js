import React, { Component } from 'react';
import { ScrollView, Modal, View } from 'react-native';
import styled from 'styled-components';

import WeatherInfoList from './weather-info-list/WeatherInfoList';
import AboutDeviceInfo from '../../../../common/AboutDeviceInfo';
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
    isAboutDeviceModalOpen: false,
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
    const { isAboutDeviceModalOpen, weatherForecastWeek, isLoading } = this.state;
    const { params } = this.props.navigation.state;

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
          onPressDeviceInfoButton={() => this.setState({ isAboutDeviceModalOpen: true })}
          title={params[CONSTANTS.KEYS.CITY_DATA_INFORMATION_PARAM].city}
          onPressRefreshButton={this.getWeekForecasData}
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

export default Information;
