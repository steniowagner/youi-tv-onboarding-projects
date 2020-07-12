import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

import ActivityLoading from '../../../../../common/ActivityLoading';

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const StatusMessageText = styled(Text)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

const ActivityStatusWrapper = styled(View)`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme, hasSuccess, hasError }) => {
    if (hasSuccess) {
      return theme.colors.success;
    }

    if (hasError) {
      return theme.colors.error;
    }

    return 'white';
  }};
`;

const ActivityIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

const SearchStatus = ({
  isSearching,
  hasSuccess,
  hasError,
}) => {
  if (isSearching) {
    return (
      <Wrapper>
        <ActivityStatusWrapper>
          <ActivityLoading />
        </ActivityStatusWrapper>
        <StatusMessageText>Searching...</StatusMessageText>
      </Wrapper>
    );
  }

  if (hasSuccess) {
    return (
      <Wrapper>
        <ActivityStatusWrapper
          hasSuccess
        >
          <ActivityIcon
            source={{
              uri: 'res://drawable/default/check-icon.png'
            }}
          />
        </ActivityStatusWrapper>
        <StatusMessageText>City added!</StatusMessageText>
      </Wrapper>
    );
  }

  if (hasError) {
    return (
      <Wrapper>
        <ActivityStatusWrapper
          hasError
        >
          <ActivityIcon
            source={{
              uri: 'res://drawable/default/error-icon.png'
            }}
          />
        </ActivityStatusWrapper>
        <StatusMessageText>City not found. Try again with another city...</StatusMessageText>
      </Wrapper>
    );
  }

  return null;
}

export default SearchStatus;
