import { Input } from '@chakra-ui/react';
import React from 'react';

const UploadPhotos = () => {
  return (
    <div>
      <Input type="file" multiple="multiple"></Input>
      Upload phoros here
    </div>
  );
}

export default UploadPhotos;
