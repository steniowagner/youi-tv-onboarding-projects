import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  width: 264px;
  height: 112px;
  justify-content: space-between;
  margin-right: 24px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.main};
`;

const IconImage = styled(Image)`
  width: 46px;
  height: 46px;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const DefaultText = styled(Text)`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`;

const DescriptionText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  align-self: flex-end;
  font-size: 24px;
`;
 
const DefaultCard = ({ icon, temperature, description }) => (
  <Wrapper>
    <Row>
      <IconImage
        source={{
          uri: `res://drawable/default/${icon}.png`
        }}
      />
      <DefaultText>{temperature}</DefaultText>
    </Row>
    <DescriptionText>{description}</DescriptionText>
  </Wrapper>
);

export default DefaultCard;
