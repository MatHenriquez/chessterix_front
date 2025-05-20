import React, { FC } from 'react';
import './files.css';

type FilesProps = {
  files: string[];
};

const Files: FC<FilesProps> = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file} className="file">
          {file}
        </span>
      ))}
    </div>
  );
};

export default Files;
