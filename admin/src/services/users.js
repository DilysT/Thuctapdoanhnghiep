import http from "./http";

// GET /api/users/profile/:id  (Bearer token đã gắn sẵn qua interceptor)
export const getUserProfile = async (id) => {
    const res = await http.get(`/api/users/profile/${id}`);
    return res.data; // { id, name, email, ... }
};
