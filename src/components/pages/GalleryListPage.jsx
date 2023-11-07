import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import CreateGalleryCard from "../CreateGalleryCard/CreateGalleryCard";
import GalleryList from "../GalleryList/GalleryList";

const GalleryListPage = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="30px">
      <CreateGalleryCard />
      <GalleryList />
      {/* <GalleryCard/> */}
      {/* <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>

        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>

        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box>
        <Box bg="white" h="200px" w="200px" border="1px solid"></Box> */}
    </Grid>
  );
};

export default GalleryListPage;
