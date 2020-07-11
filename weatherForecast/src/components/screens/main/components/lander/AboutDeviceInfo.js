import React from 'react';
import { Text, View } from 'react-native';
import { DeviceInfo } from '@youi/react-native-youi';
import styled from 'styled-components';

import BackButton from '../../../../common/ActionButton';

const CardContentWrapper = styled(View)`
  padding: 16px;
  align-self: center;
  margin-top: 48px;
  border-radius: 5px;
  background-color: white;
`;

const TextWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 18px;
`;

const KeyDeviceFeatureText = styled(Text)`
  margin-right: 12px;
  color: #000;
  font-size: 22px;
  font-weight: bold;
`;

const AboutText = styled(Text)`
  margin-bottom: 24px;
  color: #000;
  font-size: 22px;
`;

const ValueDeviceFeatureText = styled(Text)`
  color: #808080	;
  font-size: 22px;
  font-weight: bold;
`;

const AboutDeviceModalWrapper = styled(View)`
  flex: 1;
  padding: 12px;
`;

const BackButtonWrapper = styled(View)`
  top: 24px;
`;

const AboutDeviceInfo = ({ onPressBackButton }) => (
  <AboutDeviceModalWrapper>
    <BackButtonWrapper>
      <BackButton
        onPress={onPressBackButton}
        iconName="arrow-back-icon"
      />
    </BackButtonWrapper>
    <CardContentWrapper>
      <AboutText>About</AboutText>
      <TextWrapper>
        <KeyDeviceFeatureText>App version:  </KeyDeviceFeatureText>
        <ValueDeviceFeatureText>1.0</ValueDeviceFeatureText>
      </TextWrapper>
      <TextWrapper>
        <KeyDeviceFeatureText>Device name:  </KeyDeviceFeatureText>
        <ValueDeviceFeatureText>{DeviceInfo.getDeviceName()}</ValueDeviceFeatureText>
      </TextWrapper>
      <TextWrapper>
        <KeyDeviceFeatureText>Device version:  </KeyDeviceFeatureText>
        <ValueDeviceFeatureText>{DeviceInfo.getDeviceModel()}</ValueDeviceFeatureText>
      </TextWrapper>
      <TextWrapper>
        <KeyDeviceFeatureText>Device Id:  </KeyDeviceFeatureText>
        <ValueDeviceFeatureText>{DeviceInfo.getDeviceId()}</ValueDeviceFeatureText>
      </TextWrapper>
    </CardContentWrapper>
  </AboutDeviceModalWrapper>
);

export default AboutDeviceInfo;