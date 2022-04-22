import React from 'react';
import { Button } from '@material-ui/core';

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
    <div>
      <Button variant="contained" component="label">
        {title}
        <input accept={accept} type="file" hidden onChange={onChange} />
      </Button>
    </div>
  );
};

export default FileUpload;
