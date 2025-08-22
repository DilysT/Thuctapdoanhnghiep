// admin/src/pages/ProductList.jsx
import React, { useEffect, useMemo, useState } from "react";
import { getProducts, updateProduct, deleteProduct } from "../services/products";
import ImagePickerModal from "../components/ImagePickerModal";

const CATEGORY_LABEL = { 1: "Nam", 2: "Nữ", 3: "Trẻ em" };

// strip <p>, <br>... -> plain text
function stripHtml(html = "") {
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null); // {id,name,sku,category_id,image_url,description}
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("Tất cả");
  const [openPicker, setOpenPicker] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        setErr(e.message || "Không tải được danh sách sản phẩm");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const categories = useMemo(() => {
    const names = new Map();
    products.forEach((p) => {
      if (p?.category?.id && p?.category?.name) names.set(p.category.id, p.category.name);
    });
    Object.entries(CATEGORY_LABEL).forEach(([id, label]) => {
      if (!names.has(Number(id))) names.set(Number(id), label);
    });
    return names;
  }, [products]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const catName = p.category?.name || "";
      const bySearch =
        !q || p.name?.toLowerCase().includes(q) || p.sku?.toLowerCase().includes(q);
      const byCategory = filterCategory === "Tất cả" || catName === filterCategory;
      return bySearch && byCategory;
    });
  }, [products, search, filterCategory]);

  const openEdit = (p) => {
    setEditing({
      id: p.id,
      name: p.name || "",
      sku: p.sku || "",
      image_url: p.image_url || "",
      // chuyển HTML -> text để không còn <p> khi hiển thị/sửa
      description: stripHtml(p.description || ""),
      category_id: p.category?.id ? String(p.category.id) : "",
    });
  };

  const saveEdit = async () => {
    if (!editing?.id) return;
    if (!editing.name.trim()) return alert("Tên sản phẩm là bắt buộc");
    if (!editing.category_id) return alert("Vui lòng chọn danh mục");

    setSaving(true);
    try {
      const payload = {
        name: editing.name,
        sku: editing.sku,
        image_url: editing.image_url,
        description: editing.description, // đã là plain text (không còn <p>)
        category_id: Number(editing.category_id),
      };
      await updateProduct(editing.id, payload);

      setProducts((prev) =>
        prev.map((p) =>
          p.id === editing.id
            ? {
              ...p,
              name: payload.name,
              sku: payload.sku,
              image_url: payload.image_url,
              description: payload.description,
              category_id: payload.category_id,
              category: {
                id: payload.category_id,
                name: categories.get(payload.category_id) || p.category?.name || "",
              },
            }
            : p
        )
      );
      setEditing(null);
      alert("Đã cập nhật sản phẩm.");
    } catch (e) {
      alert(`❌ Sửa thất bại: ${e.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xoá sản phẩm này?")) return;
    setDeletingId(id);
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert("Đã xoá sản phẩm.");
    } catch (e) {
      alert(`❌ Xoá thất bại: ${e.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (iso) => (iso ? new Date(iso).toLocaleString() : "—");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h1>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Tìm theo tên hoặc SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/3"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="Tất cả">Tất cả</option>
          {Array.from(categories.entries()).map(([id, name]) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="p-6 bg-white rounded-lg shadow">Đang tải dữ liệu…</div>}
      {err && !loading && (
        <div className="p-6 bg-red-50 text-red-700 rounded-lg shadow">{err}</div>
      )}

      {!loading && !err && (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-3">#</th>
                <th className="p-3">Tên sản phẩm</th>
                <th className="p-3">SKU</th>
                <th className="p-3">Danh mục</th>
                <th className="p-3">Ảnh</th>
                <th className="p-3">Tạo lúc</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, index) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{p.name || "—"}</td>
                  <td className="p-3">{p.sku || "—"}</td>
                  <td className="p-3">{p.category?.name || "—"}</td>
                  <td className="p-3">
                    {p.image_url ? (
                      <img src={p.image_url} alt={p.name} className="w-12 h-12 object-cover rounded" />
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="p-3">{formatDate(p.created_at)}</td>
                  <td className="p-3 flex gap-3">
                    <button className="text-blue-600 hover:underline" onClick={() => openEdit(p)}>
                      Sửa
                    </button>
                    <button
                      className="text-red-600 hover:underline disabled:opacity-50"
                      onClick={() => handleDelete(p.id)}
                      disabled={deletingId === p.id}
                    >
                      {deletingId === p.id ? "Đang xoá..." : "Xoá"}
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-500">
                    Không tìm thấy sản phẩm nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Sửa */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">🛠 Sửa sản phẩm</h3>

            <div className="space-y-3">
              <label htmlFor="edit-name" className="block text-sm font-medium mb-1">
                Tên sản phẩm
              </label>
              <input
                name="name"
                value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                placeholder="Tên sản phẩm"
                className="w-full border rounded px-3 py-2"
              />
              <label htmlFor="edit-sku" className="block text-sm font-medium mb-1">
                SKU
              </label>
              <input
                name="sku"
                value={editing.sku}
                onChange={(e) => setEditing({ ...editing, sku: e.target.value })}
                placeholder="SKU"
                className="w-full border rounded px-3 py-2"
              />
              <label htmlFor="edit-category" className="block text-sm font-medium mb-1">
                Danh mục
              </label>
              <select
                name="category_id"
                value={editing.category_id}
                onChange={(e) => setEditing({ ...editing, category_id: e.target.value })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">-- Chọn danh mục --</option>
                {Array.from(categories.entries()).map(([id, name]) => (
                  <option key={id} value={String(id)}>
                    {name}
                  </option>
                ))}
              </select>

              {/* Ảnh: URL + chọn từ thư viện */}
              <div>
                <label className="block text-sm font-medium mb-1">Ảnh (URL)</label>
                <input
                  name="image_url"
                  value={editing.image_url}
                  onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
                  placeholder="https://..."
                  className="w-full border rounded px-3 py-2"
                />
                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setOpenPicker(true)}
                    className="px-3 py-2 rounded border bg-gray-50 hover:bg-gray-100"
                  >
                    Chọn từ thư viện…
                  </button>
                  {editing.image_url && (
                    <img
                      src={editing.image_url}
                      alt=""
                      className="w-20 h-14 object-cover rounded border"
                    />
                  )}
                </div>
              </div>

              {/* Mô tả: hiển thị/sửa plain text (không còn thẻ <p>) */}
              <label htmlFor="edit-desc" className="block text-sm font-medium mb-1">
                Mô tả
              </label>
              <textarea
                name="description"
                value={editing.description}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                placeholder="Mô tả"
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 rounded border hover:bg-gray-100"
                disabled={saving}
              >
                Huỷ
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
                disabled={saving}
              >
                {saving ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
            </div>
          </div>

          {/* Thư viện ảnh */}
          <ImagePickerModal
            open={openPicker}
            onClose={() => setOpenPicker(false)}
            onPick={(url) => {
              setEditing((prev) => ({ ...prev, image_url: url }));
              setOpenPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
