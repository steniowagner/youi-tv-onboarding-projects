import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(TouchableOpacity)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-right: 14px;
  padding: 12px;
  border-radius: 5px;
  background-color: ${({ isFirst, theme }) => isFirst ? theme.colors.main : theme.colors.accent};
  border: 3px ${({ isFocused, theme }) => isFocused ? theme.colors.selected : 'transparent'} solid;
`;

const BigText = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const DescriptionText = styled(Text).attrs(() => ({
  textTransform: 'capitalize'
}))`
  margin-top: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  textTransform: capitalize;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 16px;
`

const Icon = styled(Image)`
  width: 46px;
  height: 46px;
`;

class WeatherListItem extends PureComponent {
  state = {
    isFocused: false,
  };

  render() {
    const {
      temperature,
      description,
      height,
      index,
      width,
      icon,
      city,
    } = this.props;

    const { isFocused } = this.state;

    return (
      <Wrapper
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        isFocused={isFocused}
        isFirst={index === 0}
        height={height}
        width={width}
      >
        <BigText>{city}</BigText>
        <Row>
          <Icon
            source={{
              uri: `res://drawable/default/${icon}.png`
            }}
          />
          <BigText>{temperature}</BigText>
        </Row>
        <DescriptionText>{description.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase())}</DescriptionText>
      </Wrapper>
    );
  }
}

export default WeatherListItem;
