import React, { PureComponent } from 'react';
import { Easing, Animated } from 'react-native';

class SpinComponent extends PureComponent {
  spinAnimatedValue = new Animated.Value(0);
  
  spinInterpolationValue = this.spinAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.spinAnimatedValue,
        {
         toValue: 1,
         duration: 7000,
         easing: Easing.linear,
         useNativeDriver: true,
        }
      )
    ).start();
  }

  render() {
    const { children } = this.props;

    return (
      <Animated.View
        style={{transform: [{ rotate: this.spinInterpolationValue }] }}
      >
        {children}
      </Animated.View>
    );
  }
}

export default SpinComponent;