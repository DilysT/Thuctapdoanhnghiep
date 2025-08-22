// Bỏ thẻ HTML (CKEditor) để hiển thị tóm tắt
export const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();
