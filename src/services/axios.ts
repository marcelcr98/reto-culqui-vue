import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/dev/token",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;