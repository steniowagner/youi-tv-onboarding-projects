import React, { PureComponent, createRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components';

const LoadingImage = styled(Animated.Image)`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

class ActivityLoading extends PureComponent {
  splinAnimatedValue = new Animated.Value(0);
  
  spinInterpolationValue = this.splinAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.splinAnimatedValue,
        {
         toValue: 1,
         duration: 2000,
         easing: Easing.linear,
         useNativeDriver: true,
        }
      )
    ).start();
  }

  render() {
    return (
      <LoadingImage
        style={{transform: [{ rotate: this.spinInterpolationValue }] }}
        source={{
          uri: 'res://drawable/default/loading-icon.png'
        }}
      />
    );
  }
}

export default ActivityLoading;
