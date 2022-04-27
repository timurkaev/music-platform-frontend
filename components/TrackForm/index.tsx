import React from 'react';
import styles from './TrackForm.module.scss';
import { Button, TextField } from '@material-ui/core';

const TrackForm = () => {
  return (
    <form className={styles.form}>
      <h1>Комментарии</h1>
      <TextField label="Ваше имя" fullWidth variant="outlined" />
      <TextField
        label="Комментарий"
        fullWidth
        multiline
        variant="outlined"
        minRows={4}
      />
      <Button className={styles.form__btn} variant="contained" color="primary">
        Отправить
      </Button>
    </form>
  );
};

export default TrackForm;
