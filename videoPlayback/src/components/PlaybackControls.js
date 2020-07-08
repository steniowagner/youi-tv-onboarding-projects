import React, { Fragment, Component, createRef } from 'react';
import {
  TimelineRef,
  ButtonRef,
  ViewRef,
  Input,
} from '@youi/react-native-youi';

const mediaKeys = ['Space'];

class PlaybackControls extends Component {
  btnPlayPauseTimelineToggleOffRef = createRef();
  btnPlayPauseTimelineToggleOnRef = createRef();
  playPauseContainerTimelineOutRef = createRef();
  playPauseContainerTimelineInRef = createRef();
  playbackControlsTimelineOutRef = createRef();
  playbackControlsTimelineInRef = createRef();
  btnBackContaineTimelineInRef = createRef();
  btnBackContaineTimelineOutRef = createRef();
  showPlaybackControlsRef = createRef();
  hidePlaybackControlsRef = createRef();
  btnPlayPauseRef = createRef();
  backButtonRef = createRef();

  state = {
    isControlsVisible: false,
  };

  componentDidMount() {
    mediaKeys.forEach((key) => Input.addEventListener(key, this.onPressKey));
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isPlaying !== nextProps.isPlaying;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaying && !nextProps.isPlaying) {
      this.btnPlayPauseTimelineToggleOnRef.current.play();
      this.btnPlayPauseTimelineToggleOffRef.current.play();
    }

    if (!this.props.isPlaying && nextProps.isPlaying) {
      this.btnPlayPauseTimelineToggleOffRef.current.play();
      this.btnPlayPauseTimelineToggleOnRef.current.play();
    }
  }

  handleShowComponents = () => {
    this.playbackControlsTimelineInRef.current.play();
    this.btnBackContaineTimelineInRef.current.play();
    this.playPauseContainerTimelineInRef.current.play();
  }

  handleHideComponents = () => {
    this.playbackControlsTimelineOutRef.current.play();
    this.btnBackContaineTimelineOutRef.current.play();
    this.playPauseContainerTimelineOutRef.current.play();
  }

  onPressKey = ({ eventType }) => {
    if (eventType !== "down") {
      return;
    }

    this.setState(({ isControlsVisible }) => {
      if (isControlsVisible) {
        this.handleHideComponents();
      }
  
      if (!isControlsVisible) {
        this.handleShowComponents();
      }

      return {
        isControlsVisible: !isControlsVisible,
      }
    });
  }

  handlePressPlayPauseWhenIsPlaying = () => {
    const { setIsPlaying } = this.props;

    setIsPlaying(false);

    this.btnPlayPauseTimelineToggleOnRef.current.play();
  }

  handlePressPlayPauseWhenIsPaused = () => {
    const { setIsPlaying } = this.props;

    setIsPlaying(true);

    this.btnPlayPauseTimelineToggleOffRef.current.play();
  }

  onPressPlayPauseButton = () => {
    const { isPlaying } = this.props;

    if (isPlaying) {
      this.handlePressPlayPauseWhenIsPlaying();
    }

    if (!isPlaying) {
      this.handlePressPlayPauseWhenIsPaused();
    }
  }

  onPressBtnBack = () => {
    console.log('navigate back to the previous screen');
  }

  render() {
    return (
      <Fragment> 
        <TimelineRef
          ref={this.playbackControlsTimelineInRef}
          name="In"
        />
        <TimelineRef
          ref={this.playbackControlsTimelineOutRef}
          name="Out"
        />
        <ViewRef
          name="Btn-Back-Container"
        >
          <TimelineRef
            ref={this.btnBackContaineTimelineInRef}
            name="In"
          />
          <TimelineRef
            ref={this.btnBackContaineTimelineOutRef}
            name="In"
          />
          <ButtonRef
            onPress={this.onPressBtnBack}
            name="Btn-Back"
          />
        </ViewRef>
        <ViewRef
          name="PlayPause-Container"
        >
          <TimelineRef
            ref={this.playPauseContainerTimelineInRef}
            name="In"
          />
          <TimelineRef
            ref={this.playPauseContainerTimelineOutRef}
            name="Out"
          />
          <ButtonRef
            onPress={this.onPressPlayPauseButton}
            ref={this.btnPlayPauseRef}
            name="Btn-PlayPause"
          >
            <TimelineRef
              ref={this.btnPlayPauseTimelineToggleOnRef}
              name="Toggle-On"
            />
            <TimelineRef
              ref={this.btnPlayPauseTimelineToggleOffRef}
              name="Toggle-Off"
            />
          </ButtonRef>
        </ViewRef>
      </Fragment>
    );
  }
}

export default PlaybackControls;
