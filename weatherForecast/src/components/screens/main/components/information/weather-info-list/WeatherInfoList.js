import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import WeatherCard from './WeatherCard';
import DefaultCard from './DefaultCard';

const Wrapper = styled(View)`
  margin-vertical: 24px;
  padding-horizontal: 24px;
`;

const WeekdayText = styled(Text)`
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 24px;
`;

const ListWrapper = styled(View)`
  flex-direction: row;
`;

const getWeekDayName = (index, weatherDate) => {
  if (index === 0) {
    return 'Today';
  }

  if (index === 1) {
    return 'Tomorrow';
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date(weatherDate);

  return days[date.getDay()];
}

const WeatherInfoList = ({ weatherData, index }) => (
  <Wrapper>
    <WeekdayText>{getWeekDayName(index, weatherData.date)}</WeekdayText>
    <ListWrapper>
      <WeatherCard
        description={weatherData.weather.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase())}
        temperature={weatherData.temperature}
        icon={weatherData.weatherIcon}
      />
      <DefaultCard
        value={weatherData.humidity}
        property="Humidity"
      />
      <DefaultCard
        value={weatherData.clouds}
        property="Clouds"
      />
      <DefaultCard
        value={weatherData.windDirection}
        property="Wind Direction"
      />
      <DefaultCard
        value={weatherData.windSpeed}
        property="Wind Speed"
      />
    </ListWrapper>
  </Wrapper>
);

export default WeatherInfoList;
