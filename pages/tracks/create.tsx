import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid } from '@material-ui/core';
import StepWrapper from '../../components/StepWrapper';

const Create: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

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
        {activeStep === 0 && <h1>ШАГ 1</h1>}
        {activeStep === 1 && <h1>ШАГ 2</h1>}
        {activeStep === 2 && <h1>ШАГ 3</h1>}
        <h1>Загрузка трека</h1>
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button
          disabled={activeStep === 0}
          variant={'outlined'}
          color={'primary'}
          onClick={backStep}
        >
          Назад
        </Button>
        <Button variant={'outlined'} color={'primary'} onClick={nextStep}>
          Вперед
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
