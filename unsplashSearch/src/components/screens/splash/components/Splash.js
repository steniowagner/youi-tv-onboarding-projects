import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f;
`;

const SplashText = styled(Text)`
  font-size: 35px;
  color: #000;
`;

const Splash = () => (
  <Wrapper>
    <SplashText>Splash!</SplashText>
  </Wrapper>
);

export default Splash;