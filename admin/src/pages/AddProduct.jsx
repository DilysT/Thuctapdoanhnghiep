// admin/src/pages/AddProduct.jsx
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createProductJson } from "../services/products";
import ImagePickerModal from "../components/ImagePickerModal"; // 👈 import modal

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category_id: "",
    description: "",
    image_url: "",   // dùng URL ảnh (chọn từ thư viện sẽ set vào đây)
    // image: null,  // nếu sau này cần upload file truyền thống thì mở lại
  });
  const [submitting, setSubmitting] = useState(false);
  const [openPicker, setOpenPicker] = useState(false); // 👈 state mở modal thư viện

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return alert("Tên sản phẩm là bắt buộc");
    if (!form.category_id) return alert("Vui lòng chọn danh mục");

    setSubmitting(true);
    try {
      // lưu bằng JSON, lấy ảnh từ form.image_url
      await createProductJson({
        name: form.name,
        description: form.description,
        sku: form.sku,
        image_url: form.image_url,                 // 👈 URL từ thư viện hoặc dán tay
        category_id: Number(form.category_id),
      });

      alert("Lưu sản phẩm thành công!");
      setForm({
        name: "",
        sku: "",
        category_id: "",
        description: "",
        image_url: "",
      });
    } catch (err) {
      alert(`❌ ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Thêm sản phẩm</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="font-semibold">Tên sản phẩm</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Mã SKU</label>
            <input
              name="sku"
              value={form.sku}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              placeholder="VD: SP-001"
            />
          </div>

          <div>
            <label className="font-semibold">Danh mục</label>
            <select
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              required
            >
              <option value="">-- Chọn danh mục --</option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Trẻ em</option>
            </select>
          </div>
        </div>

        {/* Ảnh bằng URL (giữ nguyên) */}
        <div>
          <label className="font-semibold">Ảnh (URL)</label>
          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="https://..."
          />
        </div>

        {/* Thay input file = nút mở thư viện ảnh */}
        <div>
          <label className="font-semibold">Ảnh sản phẩm (file)</label>
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              onClick={() => setOpenPicker(true)}
              className="px-3 py-2 rounded border bg-gray-50 hover:bg-gray-100"
            >
              Chọn từ thư viện…
            </button>
            <span className="text-sm text-gray-500">
              (hoặc dán URL vào ô trên)
            </span>
          </div>

          {/* Preview nếu đã có URL */}
          {form.image_url && (
            <img
              src={form.image_url}
              alt=""
              className="mt-2 w-44 h-32 object-cover rounded border"
            />
          )}

          {/* Nếu vẫn muốn upload file truyền thống, mở lại dòng dưới và xử lý thêm trong handleSubmit */}
          {/* <input type="file" name="image" onChange={(e)=>setForm(p=>({...p, image: e.target.files?.[0]||null}))} className="block mt-2" /> */}
        </div>

        <div>
          <label className="font-semibold">Mô tả chi tiết</label>
          <CKEditor
            editor={ClassicEditor}
            data={form.description}
            onChange={(_, editor) => setForm((p) => ({ ...p, description: editor.getData() }))}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Đang lưu..." : "Lưu sản phẩm"}
        </button>
      </form>

      {/* Modal thư viện ảnh */}
      <ImagePickerModal
        open={openPicker}
        onClose={() => setOpenPicker(false)}
        onPick={(url) => setForm((p) => ({ ...p, image_url: url }))} // 👈 chọn là set URL
      />
    </div>
  );
}
