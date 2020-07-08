import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Composition } from '@youi/react-native-youi';

import PlaybackControls from './PlaybackControls';
import VideoSurface from './VideoSurface';
import CurrentTime from './CurrentTime';
import Slider from './Slider';

class VideoContainer extends Component {
  state = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  };
  
  render() {
    const { currentTime, duration, isPlaying } = this.state;

    return (
      <View
        style={styles.mainContainer}
      >
        <VideoSurface
          onCurrentTimeUpdated={currentTime => this.setState({ currentTime })}
          setIsPlaying={isPlaying => this.setState({ isPlaying })}
          onLoadDuration={duration => this.setState({ duration })}
          isPlaying={isPlaying}
        />
        <Composition
          source="Player_Playback-Controls"
        >
          <CurrentTime
            currentTime={currentTime}
          />
          <Slider
            currentTime={currentTime}
            duration={duration}
          />
          <PlaybackControls
            setIsPlaying={isPlaying => this.setState({ isPlaying })}
            isPlaying={isPlaying}
          />
        </Composition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default VideoContainer;
