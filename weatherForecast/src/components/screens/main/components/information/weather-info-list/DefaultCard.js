import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  width: 128px;
  height: 112px;
  justify-content: space-between;
  margin-right: 24px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const Value = styled(Text)`
  align-self: ${({ withFlexStart }) => withFlexStart ? 'flex-start' : 'flex-end'};
  color: white;
  font-size: 18px;
`;

const DefaultCard = ({ property, value }) => (
  <Wrapper>
    <Value withFlexStart>{property}</Value>
    <Value>{value}</Value>
  </Wrapper>
);

export default DefaultCard;
