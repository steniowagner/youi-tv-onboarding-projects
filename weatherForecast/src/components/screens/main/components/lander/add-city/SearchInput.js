import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: 'rgba(0, 0, 0, 0.25)',
  underlineColorAndroid: 'transparent',
  returnKeyLabel: 'search',
  returnKeyType: 'search',
  numberOfLines: 1,
  autoFocus: true,
  placeholder: 'Search for a city...',
}))`
  background-color: transparent;
`;

const Wrapper = styled(View)`
  width: 240px;
  height: 28px;
  justify-content: center;
  align-items: center;
  margin-vertical: 16px;
  border-radius: 4px;
  background-color: #fff;
  border: 3px ${({ isFocused, theme }) => isFocused ? theme.colors.selected : 'transparent'} solid;
`;

class SearchInput extends Component {
  state = {
    isFocused: true,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value || this.state.isFocused !== nextState.isFocused;
  }

  render() {
    const { onChangeText, onSubmit, value } = this.props;
    const { isFocused } = this.state;

    return (
      <Wrapper
        isFocused={isFocused}
      >
        <Input
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: false })}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          value={value}
        />
      </Wrapper>
    );
  }
}

export default SearchInput;
