import React, { PureComponent, createRef } from 'react';
import { TimelineRef, ViewRef } from '@youi/react-native-youi';

class PlaybackControls extends PureComponent {
  playerScrollBarStartRef = createRef();

  componentWillReceiveProps(nextProps) {
     if (nextProps.duration === 0) {
      return;
    }

    this.playerScrollBarStartRef.current.seek(nextProps.currentTime / nextProps.duration);
  }

  handleShowComponents = () => {
    this.playerScrollBarStartRef.current.play();
  }

  render() {
    return (
      <ViewRef
        name="Player-Scrubber"
      >
        <ViewRef
          name="Player-ScrollBar"
        >
          <TimelineRef
            ref={this.playerScrollBarStartRef}
            name="ScrollStart"
          />
        </ViewRef>
      </ViewRef>
    );
  }
}

export default PlaybackControls;
