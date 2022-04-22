import React from 'react';
import { ITrack } from '../../types/track';
import styles from './TracksItem.module.scss';

import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TracksItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  const onActivePlayAudio = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const onRemoveAudio = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Card
      onClick={() => router.push('/tracks/' + track._id)}
      className={styles.track}
    >
      <IconButton onClick={onActivePlayAudio} className={styles.track__btn}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className={styles.track__img} src={track.picture} alt="picture" />
      <Grid className={styles.track__description} container direction="column">
        <div className={styles.track__name}>{track.name}</div>
        <div className={styles.track__artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 3:22</div>}
      <IconButton onClick={onRemoveAudio}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TracksItem;
