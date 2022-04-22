import React from 'react';
import Index from '../components/Navbar';
import { Container } from '@material-ui/core';

const MainLayout = ({ children }) => {
  return (
    <>
      <Index />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
    </>
  );
};

export default MainLayout;
