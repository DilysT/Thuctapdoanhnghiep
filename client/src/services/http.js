import axios from "axios";

// Ưu tiên Vite env, sau đó CRA env, cuối cùng localhost
const baseURL =
    import.meta?.env?.VITE_API_BASE_URL ||
    process.env.REACT_APP_API_BASE_URL ||
    "https://be-ttdn.onrender.com";

const http = axios.create({
    baseURL,
});

// Nếu BE yêu cầu token, tự gắn từ localStorage
http.interceptors.request.use((config) => {
    const t = localStorage.getItem("access_token");
    if (t) config.headers.Authorization = `Bearer ${t}`;
    return config;
});

export default http;
