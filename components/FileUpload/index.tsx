import React from 'react';
import { Button } from '@material-ui/core';
import styles from './FileUpload.module.scss';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  title: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, title }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.file__upload}>
      <Button variant="contained" component="label">
        {title}
        <input accept={accept} type="file" hidden onChange={onChange} />
      </Button>
    </div>
  );
};

export default FileUpload;
