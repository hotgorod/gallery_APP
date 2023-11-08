import React from "react";
import SettingsDetails from "../SettingsDetails/SettingsDetails";
import { Box, Divider, Heading } from "@chakra-ui/react";
import CoverImage from "../CoverImage/CoverImage";

import UploadPhotos from "../UploadPhotos/UploadPhotos";

const Details = () => {
  return (
    <Box bg="white" p="10px" height="100%">
      <Heading mb="10px">Gallery details page</Heading>

      <SettingsDetails />
      <Divider />
      <Heading as="h3" size="lg" mb="10px">
        Cover design
      </Heading>
      <CoverImage />
      <Divider />
      <Heading as="h3" size="lg" mb="10px">
        Upload photos
      </Heading>
      <UploadPhotos />
    </Box>
  );
};

export default Details;
