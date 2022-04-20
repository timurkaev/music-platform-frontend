import React from 'react';
import { ITrack } from '../types/track';
import { Card } from '@material-ui/core';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return <div className={styles.track}>{track.name}</div>;
};

export default TrackItem;
