import React from 'react';
import { Container } from '@material-ui/core';
import Player from '../components/Player';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
