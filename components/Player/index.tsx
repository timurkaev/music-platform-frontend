import React from 'react';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import { Grid, IconButton } from '@material-ui/core';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

let audio;

const Player = () => {
  const { pause, volume, duration, currentTime, active } = useTypedSelector(
    (state) => state.player,
  );
  const {
    playTrack,
    pauseTrack,
    setVolume,
    setActiveTrack,
    setDuration,
    setCurrentTime,
  } = useActions();

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active?.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const volumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>

      <Grid className={styles.track__description} container direction="column">
        <div className={styles.track__name}>{active?.name}</div>
        <div className={styles.track__artist}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={volumeChange} />
    </div>
  );
};

export default Player;
