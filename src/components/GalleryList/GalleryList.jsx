import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllGalleryListThunk } from "../../redus/galleryReducer";
import {
  selectItems,
  selectItemsError,
  selectItemsIsloading,
} from "../../redus/gallerySelectors";
import GalleryCard from "../GalleryCard/GalleryCard";

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
      <ul>
        {items.length > 0 &&
          items.map((item) => {
            return <GalleryCard key={item.id} item={item} />;
          })}
      </ul>
    </>
  );
};

export default GalleryList;
