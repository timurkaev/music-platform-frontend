import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

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
        'http://localhost:5000/audio/55706a72-fae7-4523-bdb7-a2397ff2f025.mp3',
      picture:
        'http://localhost:5000/image/e25c16e5-72a2-4c62-a7a2-50667294995a.png',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Artist 2',
      text: 'Text 2',
      listens: 3,
      audio:
        'http://localhost:5000/audio/55706a72-fae7-4523-bdb7-a2397ff2f025.mp3',
      picture:
        'http://localhost:5000/image/e25c16e5-72a2-4c62-a7a2-50667294995a.png',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Artist 3',
      text: 'Text 3',
      listens: 10,
      audio:
        'http://localhost:5000/audio/55706a72-fae7-4523-bdb7-a2397ff2f025.mp3',
      picture:
        'http://localhost:5000/image/e25c16e5-72a2-4c62-a7a2-50667294995a.png',
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={5}>
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
