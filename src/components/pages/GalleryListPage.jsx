import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import CreateGalleryCard from "../CreateGalleryCard/CreateGalleryCard";
import GalleryList from "../GalleryList/GalleryList";

const GalleryListPage = () => {
  return (
    <Flex gap="10">
      <CreateGalleryCard />
      <GalleryList />
    </Flex>
  );
};

export default GalleryListPage;
