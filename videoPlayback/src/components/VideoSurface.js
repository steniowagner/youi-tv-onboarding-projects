import React, { Component, createRef } from "react";
import { StyleSheet } from "react-native";
import { Composition, VideoRef } from '@youi/react-native-youi';

const VIDEO_SOURCE = {
  uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
  type: "HLS"
};

class VideoSurface extends Component {
  videoSurfaceViewRef = createRef();

  shouldComponentUpdate(nextProps) {
    return nextProps.isPlaying !== this.props.isPlaying;
  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isPlaying) {
      this.videoSurfaceViewRef.current.pause();
    }

    if (nextProps.isPlaying) {
      this.videoSurfaceViewRef.current.play();
    }
  }

  onReady = () => {
    const { setIsPlaying } = this.props;

    setIsPlaying(true);

    this.videoSurfaceViewRef.current.play();
  };

  render() {
    return (
        <Composition
          source="Player_VideoRef"
          style={styles.video}
        >
          <VideoRef
            onCurrentTimeUpdated={currentTime => this.props.onCurrentTimeUpdated(currentTime)}
            onDurationChanged={duration => this.props.onLoadDuration(duration)}
            ref={this.videoSurfaceViewRef}
            name="Video-Surface-View"
            onReady={this.onReady}
            source={VIDEO_SOURCE}
            muted
          />
        </Composition>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
  },
});

export default VideoSurface;
