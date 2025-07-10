import axios from "axios";

// Use VITE_API_URL from your .env file or fallback to localhost
//const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api" , // ✅ make sure to include /api here because your backend uses /api/auth, /api/messages
  withCredentials: true,      // send cookies with requests
});

// Optional: interceptors for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("[Axios Request]", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("[Axios Response]", response);
    return response;
  },
  (error) => {
    console.error("[Axios Error]", error.response || error);
    return Promise.reject(error);
  }
);
