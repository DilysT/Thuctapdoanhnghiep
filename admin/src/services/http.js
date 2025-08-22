import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 15000,
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

http.interceptors.response.use(
    (res) => res,
    (err) => {
        const msg =
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Request error";
        return Promise.reject(new Error(msg));
    }
);

export default http;
