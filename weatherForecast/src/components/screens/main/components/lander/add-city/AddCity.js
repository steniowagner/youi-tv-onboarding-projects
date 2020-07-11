import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import { getWeatherByCityName } from '../../../../../../services';
import ActionButton from '../../../../../common/ActionButton';
import SearchStatus from './SearchStatus';
import SearchInput from './SearchInput';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  justify-content: flex-end;
`;

const ContentWrapper = styled(View)`
  margin-left: 8px;
`;

const AddCityText = styled(Text)`
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 36px;
`;

const AddCityHeadlineText = styled(Text)`
  margin-vertical: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
`;

const ActivityWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

class AddCity extends PureComponent {
  state = {
    isSearching: false,
    hasSuccess: false,
    hasError: false,
    cityName: '',
  };  

  onFindCity = cityData => {
    const { onAddNewCity } = this.props;

    setTimeout(() => {
      onAddNewCity(cityData);  
    }, 2000);
  };

  onSearchCity = async () => {
    try {
      const { cityName } = this.state;

      if (!cityName) {
        return;
      }

      this.setState({
        isSearching: true,
        hasSuccess: false,
        hasError: false,
      });

      const result = await getWeatherByCityName(cityName.trim());

      if (!result) {
        this.setState({
          isSearching: false,
          hasError: true,
        });

        return;
      }

      this.setState({
        isSearching: false,
        hasSuccess: true,
      });

      this.onFindCity(result);
    } catch (err) {
      console.error(err);
    }
  }

  onTypeCityName = cityName => {
    this.setState({
      isSearching: false,
      hasSuccess: false,
      hasError: false,
      cityName,
    });
  }

  render() {
    const {
      isSearching,
      hasSuccess,
      hasError,
      cityName,
    } = this.state;

    const { onPressBack } = this.props;

    const hasStatus = isSearching || hasSuccess || hasError;

    return (
      <Wrapper>
        <ContentWrapper>
          <ActionButton
            iconName="arrow-back-icon"
            onPress={onPressBack}
          />
          <AddCityText>Add new City</AddCityText>
          <AddCityHeadlineText>Search and add new cities to stay up to date on their weather</AddCityHeadlineText>
          <ActivityWrapper>
            <SearchInput
              onChangeText={this.onTypeCityName}
              onSubmit={this.onSearchCity}
              value={cityName}
            />
            {hasStatus && (
              <SearchStatus
                isSearching={isSearching}
                hasSuccess={hasSuccess}
                hasError={hasError}
              />
            )}
          </ActivityWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default AddCity;
