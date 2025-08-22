// src/services/banners.js
import http from "./http";

/** GET /api/banners -> [{ id, title, image_url, link_url, position, is_active, ...}] */
export async function fetchBanners() {
    const res = await http.get("/api/banners");
    return res.data;
}
