import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Accept: "text/plain,application/json",
  },
  timeout: 5000,
});

export default axiosInstance;
