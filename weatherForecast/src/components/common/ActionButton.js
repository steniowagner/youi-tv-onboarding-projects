import React, { PureComponent, createRef } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ButtonWrapper = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 6px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 3px ${({ isFocused, theme }) => isFocused ? theme.colors.selected : theme.colors.accent} solid;
`;

const ButtonIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

class ActionButton extends PureComponent {
  buttonWrapperRef = createRef();

  state = {
    isFocused: false,
  };

  onPress = () => {
    const { onPress } = this.props;

    this.buttonWrapperRef.current.focus();

    onPress();
  }

  render() {
    const { isDisabled, iconName } = this.props;
    const { isFocused } = this.state;

    return (
      <ButtonWrapper
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        ref={this.buttonWrapperRef}
        onPress={this.onPress}
        disabled={isDisabled}
        isFocused={isFocused}
      >
        <ButtonIcon
          source={{
            uri: `res://drawable/default/${iconName}.png`
          }}
        />
      </ButtonWrapper>
    );
  }
}

export default ActionButton;
