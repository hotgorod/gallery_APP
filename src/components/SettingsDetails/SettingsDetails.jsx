import { Box, Divider, FormControl, FormLabel, Input, Select, Switch } from '@chakra-ui/react';
import React from 'react';

const SettingsDetails = () => {
  return (
    <Box w="100%" bg="white" mb="10px">
      <form action="">
        <FormControl>
          <FormLabel>
            Gallery name:
            <Input type="text" placeholder="For example, Lilia 8 days" />
          </FormLabel>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>
            Date of photoshoot
            <Input type="date" placeholder="Select Date and Time" size="md" />
          </FormLabel>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>
            Storage life
            <Select placeholder="Pick the duration">
              <option value="option1">Forever</option>
              <option value="option2">1 month</option>
              <option value="option3">3 months</option>
              <option value="option3">1 year</option>
            </Select>
          </FormLabel>
        </FormControl>

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="access" mb="0">
            Allow the client to download photos
          </FormLabel>
          <Switch id="access" size="lg" />
        </FormControl>

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="access" mb="0">
            Water mark
          </FormLabel>
          <Switch id="access" size="lg" />
        </FormControl>
      </form>
    </Box>
  );
}

export default SettingsDetails;
