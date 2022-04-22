import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@material-ui/core';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from '../../components/FileUpload';

const Create: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  const nextStep = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const backStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <h1>Информация о треке</h1>

            <TextField
              variant={'outlined'}
              style={{ marginTop: 20 }}
              label={'Название трека'}
            />
            <TextField
              variant={'outlined'}
              style={{ marginTop: 20 }}
              label={'Название исполнителя'}
            />
            <TextField
              variant={'outlined'}
              style={{ marginTop: 20 }}
              label={'Слова к треку'}
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload
            title={'Загрузите обложку'}
            setFile={setPicture}
            accept={'image/*'}
          />
        )}
        {activeStep === 2 && (
          <FileUpload
            title={'Загрузите аудио'}
            setFile={setAudio}
            accept={'audio/*'}
          />
        )}
      </StepWrapper>
      <Grid
        container
        style={{ width: '1086px', margin: 'auto' }}
        justifyContent="space-between"
      >
        <Button
          disabled={activeStep === 0}
          variant="contained"
          color="primary"
          onClick={backStep}
        >
          Назад
        </Button>
        <Button variant="contained" color="primary" onClick={nextStep}>
          Вперед
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
