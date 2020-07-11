import React, { PureComponent } from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

import ActionButton from '../../../../common/ActionButton';

const Wrapper = styled(View)`
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.main};
`;

const AppIcon = styled(Image)`
  width: 48px;
  height: 48px;
`;

const ActionButtonsWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const AppTitleText = styled(Text)`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

class Header extends PureComponent {
  render() {
    const { onPressRefreshButton } = this.props;

    return (
      <Wrapper>
        <AppIcon
          source={{
            uri: 'res://drawable/default/app-icon.png'
          }}
        />
        <AppTitleText>Weather Now</AppTitleText>
        <ActionButtonsWrapper>
          <ActionButton
            iconName="sync-icon"
            onPress={onPressRefreshButton}
          />
          <ActionButton
            iconName="info-icon"
            onPress={() => console.log('info')}
          />
        </ActionButtonsWrapper>
      </Wrapper>
    );
  }
}

export default Header;