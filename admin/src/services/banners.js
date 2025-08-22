// admin/src/services/banners.js
import http from "./http";

// GET /api/banners
export async function listBanners() {
    const res = await http.get("/api/banners");
    return res.data;
}

// GET /api/banners/:id
export async function getBanner(id) {
    const res = await http.get(`/api/banners/${id}`);
    return res.data;
}

// POST /api/banners
export async function createBanner(payload) {
    const res = await http.post("/api/banners", payload);
    return res.data;
}

// PUT /api/banners/:id
export async function updateBanner(id, payload) {
    const res = await http.put(`/api/banners/${id}`, payload);
    return res.data;
}

// DELETE /api/banners/:id
export async function deleteBanner(id) {
    const res = await http.delete(`/api/banners/${id}`);
    return res.data;
}
