import React from 'react';
import styles from './StepWrapper.module.scss';
import {
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Card,
} from '@material-ui/core';

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];
const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step completed={activeStep > index} key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid className={styles.step__content}>
        <Card className={styles.step__card}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
