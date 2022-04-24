import React from 'react';
import { Pause, PlayArrow } from '@material-ui/icons';
import { Grid, IconButton } from '@material-ui/core';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Трек 1',
    artist: 'Artist 1',
    text: 'Text 1',
    listens: 5,
    audio:
      'http://localhost:5000/audio/55706a72-fae7-4523-bdb7-a2397ff2f025.mp3',
    picture:
      'http://localhost:5000/image/fe3db737-0d51-47ad-b88f-634e90241d8c.jpg',
    comments: [],
  };

  const active = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>

      <Grid className={styles.track__description} container direction="column">
        <div className={styles.track__name}>{track.name}</div>
        <div className={styles.track__artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
