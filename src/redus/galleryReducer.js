import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestAddGalleryItem,
  requestDeleteGallery,
  requestGalleryList,
} from "../services/galleryApi";

export const FetchAllGalleryListThunk = createAsyncThunk(
  "gallery/fetchAll",
  async (_, thunkAPI) => {
    try {
      const galleryList = await requestGalleryList();

      return galleryList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addGalleryItemThunk = createAsyncThunk(
  "gallery/addGalleryItem",
  async (newGallery, thunkAPI) => {
    try {
      console.log("Thunk action called with data:", newGallery);
      const galleryItem = await requestAddGalleryItem(newGallery);
      console.log("Response from the network request:", galleryItem);
      return galleryItem;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteGalleryItemThunk = createAsyncThunk(
  "gallery/deleteGalleryItem",
  async (galleryId, thunkAPI) => {
    try {
      console.log("DeleteThunk action called with data:", galleryId);
      const deleteGallery = await requestDeleteGallery(galleryId);
      console.log("Response from the network delete request:", deleteGallery);
      return deleteGallery;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  gallery: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(FetchAllGalleryListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(FetchAllGalleryListThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gallery.items = action.payload;
      })
      .addCase(FetchAllGalleryListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addGalleryItemThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addGalleryItemThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.gallery.items)) {
          state.gallery.items.unshift(action.payload);
        } else {
          state.gallery.items = [action.payload];
        }
      })
      .addCase(addGalleryItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteGalleryItemThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteGalleryItemThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gallery.items = state.gallery.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteGalleryItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const galleryReducer = gallerySlice.reducer;
