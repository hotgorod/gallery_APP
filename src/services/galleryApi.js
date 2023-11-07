import axios from "axios";

const galleryInstance = axios.create({
  baseURL: "http://192.168.1.207/api",
});

export const setToken = (token) => {
  galleryInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestLogin = async (FormData) => {
  const { data } = await galleryInstance.post("/auth/token", FormData);
  setToken(data.token);
  return data;
};
export const requestRefreshUser = async () => {
  const { data } = await galleryInstance.get("/auth/current");
  
  return data;
};


export const requestGalleryList = async () => {
    const { data } = await galleryInstance.get("/photoshoots");
    
  return data;
}; 

export const requestAddGalleryItem = async newGallery => {
  const { data } = await galleryInstance.post("/photoshoots", newGallery);
console.log(data);
  return data;
}; 