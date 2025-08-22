// admin/src/pages/HeroBannerManager/HeroBannerManager.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  listBanners,
  createBanner,
  updateBanner,
  deleteBanner,
} from "../../services/banners";
import ImagePickerModal from "../../components/ImagePickerModal";

const EMPTY = { title: "", url: "", image_url: "" }; // url = link khi click
const MAX_SLOTS = 3;

/* ====== Card của mỗi slot bên trái ====== */
function HeroSlotCard({ index, item, isActive, onEdit, onDelete }) {
  const src = item?.image_url || "";

  // cache-bust cho ảnh slot để luôn thấy ảnh mới ngay lập tức trong admin
  const displaySrc = src
    ? `${src}${src.includes("?") ? "&" : "?"}t=${
        item?.updated_at ? encodeURIComponent(item.updated_at) : Date.now()
      }`
    : "";

  return (
    <div
      className={`rounded-xl border bg-white shadow-sm overflow-hidden ${
        isActive ? "ring-2 ring-blue-500" : "border-gray-200"
      }`}
    >
      <div className="p-3 flex items-center justify-between border-b">
        <div className="font-semibold">
          Thẻ {index + 1} {item ? "" : "(trống)"}
        </div>
      </div>

      <div
        className={`aspect-[4/3] ${
          src ? "" : "bg-gray-50 border-y border-dashed border-gray-200"
        }`}
      >
        {src ? (
          <img
            src={displaySrc}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Chưa có ảnh
          </div>
        )}
      </div>

      <div className="p-3 flex items-center justify-between gap-2">
        <button
          className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
          onClick={onEdit}
        >
          {item ? "Sửa" : "Thêm mới"}
        </button>
        {item && (
          <button
            className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            onClick={onDelete}
          >
            Xoá
          </button>
        )}
      </div>

      {item?.title && (
        <div className="px-3 pb-3 text-sm text-gray-800 line-clamp-2">
          {item.title}
        </div>
      )}
    </div>
  );
}

/* ====== Trang quản lý banner theo 3 slot ====== */
export default function HeroBannerManager() {
  const [rows, setRows] = useState(Array(MAX_SLOTS).fill(null)); // mỗi phần tử: null hoặc banner
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);

  // Chuẩn hoá object từ API
  const mapBanner = (b) => ({
    id: b.id,
    title: b.title || "",
    image_url: b.image_url || "",
    url: b.link_url || "",
    is_active: b.is_active !== false,
    position: b.position ?? null, // 1..3
    updated_at: b.updated_at || b.created_at || null, // thêm để cache-bust preview
  });

  // Load & phân vào đúng slot theo position
  const load = async (keepIndex = activeIndex) => {
    const data = await listBanners();
    const slots = Array(MAX_SLOTS).fill(null);
    (Array.isArray(data) ? data : []).forEach((b) => {
      const m = mapBanner(b);
      const idx = (m.position ?? 0) - 1; // position: 1->idx0
      if (idx >= 0 && idx < MAX_SLOTS && !slots[idx]) slots[idx] = m;
    });
    setRows(slots);
    setActiveIndex(Math.min(keepIndex, MAX_SLOTS - 1));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Khi đổi slot -> đổ form
  useEffect(() => {
    const current = rows[activeIndex];
    if (current?.id) {
      setForm({
        title: current.title,
        url: current.url,
        image_url: current.image_url,
      });
    } else {
      setForm(EMPTY);
    }
    setTouched(false);
  }, [activeIndex, rows]);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const invalid = (name) => touched && !String(form[name] || "").trim();
  const canSubmit = useMemo(
    () => form.title && form.image_url,
    [form.title, form.image_url]
  );
  const imgSrc = form.image_url || "";

  // Lưu (create / update) — luôn gửi position = slot đang chọn
  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;

    const payload = {
      title: form.title,
      image_url: form.image_url,
      link_url: form.url,
      position: activeIndex + 1, // <<< Quan trọng
      is_active: true,
    };

    const current = rows[activeIndex];

    if (current?.id) {
      await updateBanner(current.id, payload);
      await load(activeIndex);
    } else {
      const created = await createBanner(payload);
      // Đặt ngay vào slot hiện tại (optimistic)
      setRows((prev) => {
        const next = [...prev];
        next[activeIndex] = mapBanner(created);
        return next;
      });
      await load(activeIndex);
    }
  };

  // Xoá: giữ nguyên slot đang đứng
  const onDeleteSlot = async (index) => {
    const current = rows[index];
    if (!current?.id) return;
    if (!window.confirm("Xoá thẻ này?")) return;
    await deleteBanner(current.id);
    await load(index); // vẫn ở đúng slot vừa xoá (trống)
  };

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  // cache-bust cho ảnh preview bên phải form
  const previewSrc =
    imgSrc && `${imgSrc}${imgSrc.includes("?") ? "&" : "?"}t=${Date.now()}`;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Hero Banner</h1>
        <div className="text-sm text-gray-500">
          Tối đa {MAX_SLOTS} thẻ • Chọn thẻ bên trái để chỉnh sửa
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: 3 slot */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {Array.from({ length: MAX_SLOTS }).map((_, i) => {
              const item = rows[i];
              return (
                <HeroSlotCard
                  key={i}
                  index={i}
                  item={item}
                  isActive={i === activeIndex}
                  onEdit={() => setActiveIndex(i)}
                  onDelete={() => onDeleteSlot(i)}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-xl shadow border border-gray-200"
          >
            <div className="p-5 md:p-6">
              <div className="mb-5">
                <div className="text-lg font-semibold">
                  {rows[activeIndex]?.id ? "Sửa thẻ đang chọn" : "Thêm thẻ mới"}
                </div>
                <div className="text-sm text-gray-500">
                  Đang thao tác: <b>Thẻ {activeIndex + 1}</b>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LEFT fields */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="title"
                      value={form.title}
                      onChange={onChange}
                      placeholder="Nhập tiêu đề hiển thị"
                      className={`${inputCls} ${
                        invalid("title") ? "border-red-400 ring-2 ring-red-200" : ""
                      }`}
                    />
                    {invalid("title") && (
                      <p className="mt-1 text-sm text-red-600">
                        Vui lòng nhập tiêu đề.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL (khi click)
                    </label>
                    <input
                      name="url"
                      value={form.url}
                      onChange={onChange}
                      placeholder="Ví dụ: /san-pham hoặc https://example.com"
                      className={inputCls}
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Có thể để trống nếu banner không cần điều hướng.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh (URL) <span className="text-red-500">*</span>
                    </label>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setOpenPicker(true)}
                        className="px-3 py-2 rounded-lg border bg-gray-50 hover:bg-gray-100"
                      >
                        Chọn từ thư viện…
                      </button>
                      <span className="text-sm text-gray-500">
                        Hoặc dán URL vào ô dưới
                      </span>
                    </div>

                    <input
                      name="image_url"
                      value={form.image_url}
                      onChange={onChange}
                      placeholder="https://... hoặc http://localhost:3000/uploads/..."
                      className={`${inputCls} ${
                        invalid("image_url") ? "border-red-400 ring-2 ring-red-200" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* RIGHT preview */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Xem trước</span>
                    <button
                      type="button"
                      disabled={!imgSrc}
                      onClick={() => setForm((p) => ({ ...p, image_url: "" }))}
                      className={`px-3 py-2 rounded-lg border text-sm ${
                        imgSrc
                          ? "border-gray-300 hover:bg-gray-50 text-gray-700"
                          : "border-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Xoá ảnh
                    </button>
                  </div>

                  <div
                    className={`aspect-[4/3] rounded-lg overflow-hidden border ${
                      imgSrc ? "border-gray-200" : "border-dashed border-gray-300 bg-gray-50"
                    }`}
                  >
                    {imgSrc ? (
                      <img
                        src={previewSrc}
                        alt="preview"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Chưa chọn ảnh
                      </div>
                    )}
                  </div>

                  {form.title && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="font-semibold text-gray-800">{form.title}</div>
                      {form.url && (
                        <div className="text-gray-600 text-sm mt-1">URL: {form.url}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-5 md:px-6 py-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setForm(rows[activeIndex]?.id ? { ...rows[activeIndex] } : EMPTY)
                }
                className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                Hoàn tác
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className={`px-5 py-2.5 rounded-lg text-white ${
                  canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                {rows[activeIndex]?.id ? "Lưu thay đổi" : "Thêm thẻ vào vị trí này"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal thư viện ảnh */}
      <ImagePickerModal
        open={openPicker}
        onClose={() => setOpenPicker(false)}
        onPick={(url) => setForm((p) => ({ ...p, image_url: url }))}
      />
    </div>
  );
}
