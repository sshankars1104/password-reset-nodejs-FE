import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://password-reset-nodejs-be.onrender.com/api", 
  withCredentials: true, 
});

export default axiosInstance;
