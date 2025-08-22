import http from "./http";

// ... các hàm khác

export const getProductsByCategory = async (categoryId) => {
    const res = await http.get(`/api/products/categories/${categoryId}`);
    return res.data; // mảng sản phẩm
};
