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

