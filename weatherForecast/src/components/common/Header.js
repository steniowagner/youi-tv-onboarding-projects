import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

import ActionButton from './ActionButton';

const Wrapper = styled(View)`
  height: 64px;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.main};
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

const Header = ({
  onPressDeviceInfoButton,
  onPressRefreshButton,
  LeftIcon,
  title,
}) => (
  <Wrapper>
    <LeftIcon />
    <AppTitleText>{title}</AppTitleText>
    <ActionButtonsWrapper>
      <ActionButton
        iconName="sync-icon"
        onPress={onPressRefreshButton}
      />
      <ActionButton
        iconName="info-icon"
        onPress={onPressDeviceInfoButton}
      />
    </ActionButtonsWrapper>      
  </Wrapper>
);

export default Header;