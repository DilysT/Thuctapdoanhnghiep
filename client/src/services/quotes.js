// client/src/services/quotes.js
import http from "./http";

/**
 * payload: { name, company, email, phone, message, product_ids? }
 * trả về: { message, quote }
 */
export async function createQuote(payload) {
    const res = await http.post("/api/quotes", payload);
    return res.data;
}
