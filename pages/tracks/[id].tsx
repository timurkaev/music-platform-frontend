import { Button, Grid, Icon } from '@material-ui/core';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackForm from '../../components/TrackForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TrackPage = () => {
  const router = useRouter();
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

  return (
    <MainLayout>
      <Button
        onClick={() => router.push('/tracks')}
        variant="contained"
        color="default"
        startIcon={<ArrowBackIcon />}
      >
        К списку
      </Button>

      <Grid container style={{ margin: '20px 0' }}>
        <img width={200} height={200} src={track.picture} alt="picture" />
        <div style={{ marginLeft: '30px' }}>
          <h2>Название трека - {track.name}</h2>
          <h2>Испольнитель - {track.artist}</h2>
          <h2>Прослушиваний - {track.listens}</h2>
        </div>
      </Grid>
      <TrackForm />
    </MainLayout>
  );
};

export default TrackPage;
