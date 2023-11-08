import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllGalleryListThunk } from "../../redus/galleryReducer";
import {
  selectItems,
  selectItemsError,
  selectItemsIsloading,
} from "../../redus/gallerySelectors";
import GalleryCard from "../GalleryCard/GalleryCard";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

const GalleryList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  console.log(items);
  const isLoading = useSelector(selectItemsIsloading);
  const error = useSelector(selectItemsError);

  useEffect(() => {
    dispatch(FetchAllGalleryListThunk());
  }, [dispatch]);
  return (
    <>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <SimpleGrid columns={3} spacing={10}
      >
        {items.length > 0 &&
          items.map((item) => {
            return (
              <GridItem key={item.id}>
                <GalleryCard item={item} />
              </GridItem>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default GalleryList;
