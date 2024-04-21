import axios from "axios";


const userRouteInstance = axios.create({
  baseURL: `${import.meta.env.VITE_DEVELOPMENT_URL}/api/v1/user`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const postRouteInstance = axios.create({
  baseURL: `${import.meta.env.VITE_DEVELOPMENT_URL}/api/v1/post`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { userRouteInstance, postRouteInstance };
