import { Button, Image, Input, Stack } from '@chakra-ui/react';
import React from 'react';

const CoverImage = () => {
  return (
    <Stack spacing={8} direction="row" mb='10px'>
      <Input type="file"></Input>
      <Image
        src="gibbresh.png"
        fallbackSrc="http://via.placeholder.com/640x260
"
      />
    </Stack>
  );
}

export default CoverImage;
