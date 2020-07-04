import React from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: 'rgba(0, 0, 0, 0.25)',
  selectionColor: '#6b4aff',
  underlineColorAndroid: 'transparent',
  returnKeyLabel: 'search',
  returnKeyType: 'search',
  numberOfLines: 1,
  autoFocus: true,
  placeholder: 'Search for a subject...',
}))`
  background-color: transparent;
`;

const Wrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  height: ${({ theme }) => theme.metrics.extraLargeSize}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.mediumSize}px;
  margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

const SearchInput = ({ onChangeText, value }) => (
  <Wrapper>
    <Input value={value} onChangeText={onChangeText} />
  </Wrapper>
);

export default SearchInput;
