import axios from "axios";

const galleryInstance = axios.create({
  baseURL: "http://192.168.1.207/api",
});

export const setToken = (token) => {
  galleryInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// ==================== login ========================
export const requestLogin = async (FormData) => {
  const { data } = await galleryInstance.post("/auth/token", FormData);
  setToken(data.token);
  return data;
};

// ==================== frefresh user ========================
export const requestRefreshUser = async () => {
  const { data } = await galleryInstance.get("/auth/current");

  return data;
};

// ==================== fetch all galleries ========================
export const requestGalleryList = async () => {
  const { data } = await galleryInstance.get("/photoshoots");

  return data;
};

// ==================== add gallery ========================
export const requestAddGalleryItem = async (newGallery) => {
  const { data } = await galleryInstance.post("/photoshoots", newGallery);
  console.log("Response from backend add:", data);
  return data;
};

// ==================== delete gallery ========================
export const requestDeleteGallery = async galleryId => {
  const { data } = await galleryInstance.delete(`/photoshoots/${galleryId}`);
   console.log("Response from backend:", data);
  return data;
};