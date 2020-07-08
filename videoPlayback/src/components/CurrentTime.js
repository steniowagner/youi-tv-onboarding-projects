import React from 'react';
import { TextRef } from '@youi/react-native-youi';

const CurrentTime = ({ currentTime }) => {
  const parseCurrentTime = rawCurrentTime => {
    const currentTime = Math.ceil(rawCurrentTime / 1000);

    const currentTimeInMinutes = Math.floor(currentTime / 60);
    const currentTimeInSeconds = currentTime % 60;

    let minutes = '00';
    let seconds = '00';

    if (currentTimeInMinutes > 9) {
      minutes = currentTimeInMinutes;
    }

    if (currentTimeInMinutes >= 0 && currentTimeInMinutes <= 9) {
      minutes = `0${currentTimeInMinutes}`;
    }

    if (currentTimeInSeconds > 9 && currentTimeInSeconds <= 59) {
      seconds = currentTimeInSeconds;
    }

    if (currentTimeInSeconds >= 0 && currentTimeInSeconds <= 9) {
      seconds = `0${currentTimeInSeconds}`;
    }

    if (currentTimeInSeconds === 60) {
      seconds = '00';
    }

    return `${minutes}:${seconds}`;
  }

  return (
    <TextRef
      text={parseCurrentTime(currentTime)}
      name="Placeholder-Time"
    />
  );
}

export default CurrentTime;
