import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { StylesProvider } from '@material-ui/core';

const Index = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <MainLayout>
          <div className="center">
            <h1>Добро пожаловать!</h1>
            <h3>Здесь собраны лучшие треки!</h3>
          </div>
        </MainLayout>
      </StylesProvider>
    </>
  );
};

export default Index;
