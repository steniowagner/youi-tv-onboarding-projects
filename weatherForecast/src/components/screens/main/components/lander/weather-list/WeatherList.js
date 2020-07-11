import React, { PureComponent } from 'react';
import { FlatList, Modal, View } from 'react-native';
import styled from 'styled-components';

import ActivityLoading from '../../../../../common/ActivityLoading';
import AddCityButton from '../../../../../common/ActionButton';
import { getWeatherData } from '../../../../../../services';
import WeatherListItem from './WeatherListItem';
import AddCity from '../add-city/AddCity';

const LIST_ITEM_HEIGHT = 220;
const LIST_ITEM_WIDTH = 180;

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding-vertical: 48px;
  padding-left: 12px;
`;

const LoadingWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class WeatherList extends PureComponent {
  state = {
    isAddCityModalOpen: false,
    isLoading: true,
    weatherList: [],
  };

  async componentDidMount() {
    await this.onStartGetWeatherRequest();
  }

  onStartGetWeatherRequest = async () => {
    this.setState({
      isLoading: true,
    });

    const weatherList = await getWeatherData();

    this.setState({
      isLoading: false,
      weatherList,
    });
  }

  onAddNewCity = async () => {
    this.setState({ isAddCityModalOpen: false });

    await this.onStartGetWeatherRequest();
  }

  render() {
    const { isAddCityModalOpen, weatherList, isLoading } = this.state;

    if (isLoading) {
      return (
        <LoadingWrapper>
          <ActivityLoading />
        </LoadingWrapper>
      );
    }

    return (
      <>
        <Wrapper>
          <AddCityButton
            onPress={() => this.setState({ isAddCityModalOpen: true })}
            iconName="plus-icon"
          />
          <FlatList
          style={{
            marginTop: 48,
          }}
            data={weatherList}
            horizontal
            getItemLayout={(_, index) => ({
              length: LIST_ITEM_WIDTH,
              offset: LIST_ITEM_WIDTH * index,
              index,
            })}
            keyExtractor={({ id }) => `${id}`}
            renderItem={({ item, index }) => (
              <WeatherListItem
                temperature={item.temperature}
                description={item.description}
                height={LIST_ITEM_HEIGHT}
                width={LIST_ITEM_WIDTH}
                icon={item.icon}
                city={item.city}
                index={index}
              />
            )}
          />
        </Wrapper>
        <Modal
          visible={isAddCityModalOpen}
          animationType="slide"
          transparent={false}
        >
          <AddCity
            onPressBack={() => this.setState({ isAddCityModalOpen: false })}
            onAddNewCity={this.onAddNewCity}
          />
        </Modal>
      </>
    );
  }
}

export default WeatherList;
