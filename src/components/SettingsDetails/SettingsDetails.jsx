import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import React from 'react';

const SettingsDetails = () => {
  return (
    <Box w="100%" bg="white">
      <form action="">
        <FormControl>
          <FormLabel>
            Gallery name:
            <Input
              
              type="text"
              placeholder="For example, Lilia 8 days"
            />
          </FormLabel>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>
            Date of photoshoot
            <Input
             
              type="date"
              placeholder="Select Date and Time"
              size="md"
            />
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
      </form>
    </Box>
  );
}

export default SettingsDetails;
