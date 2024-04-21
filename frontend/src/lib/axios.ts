import axios from "axios";

const userRouteInstance = axios.create({
  baseURL: "http://localhost:8787/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const postRouteInstance = axios.create({
  baseURL: "https://backend.ahmedriyan528.workers.dev/api/v1/post",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { userRouteInstance, postRouteInstance };
