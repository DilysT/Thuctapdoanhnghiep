import http from "./http";

export const loginApi = async ({ email, password }) => {
    const res = await http.post("/api/auth/login", { email, password });
    const d = res.data || {};
    return {
        token: d.access_token ?? d.token ?? d.data?.access_token ?? d.data?.token,
        // BE của bạn có thể trả user trong response -> map luôn nếu có
        user: d.user ?? d.data?.user ?? null,
    };
};

export const getMeApi = async () => {
    const res = await http.get("/api/auth/me");
    return res.data;
};
