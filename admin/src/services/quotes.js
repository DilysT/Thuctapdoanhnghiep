// đơn giản: lấy toàn bộ quotes
import http from "./http";

export const getQuotes = async () => {
    const res = await http.get("/api/quotes");
    return res.data; // mảng [{id, name, phone, message, created_at, ...}]
};
export const deleteQuote = async (id) => {
    const res = await http.delete(`/api/quotes/${id}`);
    return res.data;               // { message: "Xoá thành công" }
};