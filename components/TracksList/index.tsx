import React from 'react';
import { ITrack } from '../../types/track';
import { Grid, Box } from '@material-ui/core';
import Index from '../TracksItem';
import styles from './TracksList.module.scss';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackLists: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid className={styles.tracks__list}>
      {tracks.map((track) => (
        <Index key={track._id} track={track} />
      ))}
    </Grid>
  );
};

export default TrackLists;
