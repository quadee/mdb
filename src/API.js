import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

API.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params,
      api_key: "46bdc1908097455a5672a7172ee41531",
    },
  };
});

export default API;
