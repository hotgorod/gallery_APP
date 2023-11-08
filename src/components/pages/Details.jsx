
import React from 'react';
import SettingsDetails from '../SettingsDetails/SettingsDetails';
import { Box, Heading } from '@chakra-ui/react';

const Details = () => {
  return (
    <Box bg="white" p="10px" height="100%">
      <Heading>Gallery details page</Heading>

      <SettingsDetails />
    </Box>
  );
}

export default Details;
