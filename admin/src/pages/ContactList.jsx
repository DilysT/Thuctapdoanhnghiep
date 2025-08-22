// admin/src/pages/ContactList.jsx
import React, { useEffect, useState } from "react";
import { getQuotes, deleteQuote } from "../services/quotes";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [viewing, setViewing] = useState(null); // <-- trạng thái xem chi tiết

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getQuotes();
        const sorted = Array.isArray(data)
          ? [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          : [];
        const mapped = sorted.map((q) => ({
          id: q.id,
          name: q.name || "",
          company: q.company || "",
          email: q.email || "",
          phone: q.phone || "",
          message: q.message || "",
          createdAt: q.created_at ? new Date(q.created_at).toLocaleString() : "",
        }));
        setContacts(mapped);
      } catch (e) {
        setErr(e.message || "Không tải được danh sách liên hệ");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xoá liên hệ này?")) return;
    setDeletingId(id);
    try {
      await deleteQuote(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      alert(`❌ Xoá thất bại: ${e.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Yêu cầu liên hệ</h1>

      {loading && <div className="bg-white p-6 rounded-lg shadow">Đang tải dữ liệu…</div>}
      {err && !loading && (
        <div className="bg-red-50 text-red-700 p-6 rounded-lg shadow">{err}</div>
      )}

      {!loading && !err && (
        <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-3">#</th>
                <th className="p-3">Họ tên</th>
                <th className="p-3">Công ty</th>
                <th className="p-3">Email</th>
                <th className="p-3">Số điện thoại</th>
                <th className="p-3">Nội dung</th>
                <th className="p-3">Thời gian</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, idx) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.company}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3 whitespace-nowrap">{c.phone}</td>
                  <td className="p-3">
                    {/* rút gọn để gọn bảng */}
                    <div className="line-clamp-2 max-w-[360px]">{c.message}</div>
                  </td>
                  <td className="p-3 text-sm text-gray-500">{c.createdAt}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-sky-600 hover:underline"
                        onClick={() => setViewing(c)}
                      >
                        Xem
                      </button>
                      <button
                        className="text-red-600 hover:underline disabled:opacity-50"
                        onClick={() => handleDelete(c.id)}
                        disabled={deletingId === c.id}
                      >
                        {deletingId === c.id ? "Đang xoá..." : "Xoá"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">
                    Không có yêu cầu nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal xem chi tiết */}
      {viewing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">📨 Chi tiết liên hệ</h3>
              <button
                className="px-3 py-1 rounded border hover:bg-gray-100"
                onClick={() => setViewing(null)}
              >
                Đóng
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Họ tên</div>
                <div className="font-medium">{viewing.name || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Công ty</div>
                <div className="font-medium">{viewing.company || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">{viewing.email || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Số điện thoại</div>
                <div className="font-medium">{viewing.phone || "—"}</div>
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-500">Thời gian</div>
                <div className="font-medium">{viewing.createdAt || "—"}</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Nội dung</div>
              <div className="border rounded-lg p-3 max-h-64 overflow-auto whitespace-pre-wrap">
                {viewing.message || "—"}
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}
