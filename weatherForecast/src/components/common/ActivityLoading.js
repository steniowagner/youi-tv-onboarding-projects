import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

import SpinComponent from './SpinComponent';

const LoadingImage = styled(Image)`
  width: 36px;
  height: 36px;
  resize-mode: contain;
`;

const ActivityLoading = () => (
  <SpinComponent>
    <LoadingImage
      source={{
        uri: 'res://drawable/default/loading-icon.png'
      }}
    />
  </SpinComponent>
);

export default ActivityLoading;
