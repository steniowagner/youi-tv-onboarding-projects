import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.metrics.extraSmallSize}px;
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  padding-horizontal: ${({ theme }) => theme.metrics.smallSize}px;
  padding-vertical: ${({ theme }) => theme.metrics.extraSmallSize}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`;

const Name = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.extraSmallSize * 1.5}px;
  color: ${({ theme }) => theme.colors.text};
`;

const Tag = ({ name }) => (
  <Wrapper>
    <Name>#{name}</Name>
  </Wrapper>
);

export default Tag;
