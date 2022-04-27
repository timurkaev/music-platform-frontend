import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TracksList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks } from '../../store/actions/tracks';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Artist 1',
      text: 'Text 1',
      listens: 5,
      audio:
        'http://localhost:5000/audio/22186045-c58d-4888-9805-9d161d605d75.mp3',
      picture:
        'http://localhost:5000/image/fe3db737-0d51-47ad-b88f-634e90241d8c.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Artist 2',
      text: 'Text 2',
      listens: 3,
      audio:
        'http://localhost:5000/audio/22186045-c58d-4888-9805-9d161d605d75.mp3',
      picture:
        'http://localhost:5000/image/fe3db737-0d51-47ad-b88f-634e90241d8c.jpg',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Artist 3',
      text: 'Text 3',
      listens: 10,
      audio:
        'http://localhost:5000/audio/22186045-c58d-4888-9805-9d161d605d75.mp3',
      picture:
        'http://localhost:5000/image/fe3db737-0d51-47ad-b88f-634e90241d8c.jpg',
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box style={{ padding: '20px' }}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchTracks());
//   },
// );
//const dispatch = store.dispatch as NextThunkDispatch;
//     await store.dispatch(await fetchTracks());
