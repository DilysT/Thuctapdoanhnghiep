import http from "./http";

export const getProducts = async (params = {}) => {
    const res = await http.get("/api/products", { params });
    return res.data; // BE của bạn trả mảng sản phẩm
};
// BE của bạn đang nhận JSON: {name, description, sku, image_url, category_id}
export const createProductJson = async (payload) => {
    const res = await http.post("/api/products", payload);
    return res.data;
};

export const updateProduct = async (id, payload) => {
    const res = await http.put(`/api/products/${id}`, payload);
    return res.data;
};

export const deleteProduct = async (id) => {
    const res = await http.delete(`/api/products/${id}`);
    return res.data;
};
// Nếu sau này BE nhận upload file: field "image"
export const createProductMultipart = async (payload) => {
    const fd = new FormData();
    Object.entries(payload).forEach(([k, v]) => v !== undefined && v !== null && fd.append(k, v));
    const res = await http.post("/api/products", fd, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
};
