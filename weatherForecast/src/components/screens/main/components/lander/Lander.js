import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import styled from 'styled-components';

import SearchButton from '../../../../common/ActionButton';
import AddCity from './add-city/AddCity'
import Header from './Header';

const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ContentWrapepr = styled(View)`
  padding: 12px;
`;

class Lander extends Component {
  state = {
    isSearchCityModalOpen: true,
  };

  onAddNewCity = (cityData) => {
    console.log('city-data: ', cityData);
    this.setState({ isSearchCityModalOpen: false })
  }
  
  render() {
    const { isSearchCityModalOpen } = this.state;

    return (
      <>
        <Wrapper>
          <Header />
          <ContentWrapepr>
            <SearchButton
              onPress={() => this.setState({ isSearchCityModalOpen: true })}
              iconName="plus-icon"
            />
          </ContentWrapepr>
        </Wrapper>
        <Modal
          visible={isSearchCityModalOpen}
          animationType="slide"
          transparent={false}
        >
          <AddCity
            onPressBack={() => this.setState({ isSearchCityModalOpen: false })}
            onAddNewCity={this.onAddNewCity}
          />
        </Modal>
      </>
    );
  }
}

export default Lander;
