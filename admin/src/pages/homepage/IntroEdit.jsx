// admin/src/pages/homepage/IntroEdit.jsx
import React, { useEffect, useState } from "react";
import { getIntro, saveIntro } from "../../services/homepageService";

export default function IntroEdit() {
  const [form, setForm] = useState(getIntro());
  const [touched, setTouched] = useState(false);

  useEffect(() => setForm(getIntro()), []);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((p) => ({ ...p, imageUrl: String(reader.result) })); // lưu base64 vào imageUrl cho tiện
    reader.readAsDataURL(file);
  };

  const invalid = (name) => touched && !String(form[name] || "").trim();
  const canSubmit = Boolean(form.heading?.trim());

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;
    saveIntro(form);
    alert("Đã lưu nội dung phần giới thiệu.");
  };

  const inputCls =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Quản lý phần giới thiệu – “Donagamex là gì?”
        </h1>
        <span className="text-sm text-gray-500">
          Chỉnh sửa nội dung & ảnh minh hoạ, xem trước ở bên phải
        </span>
      </div>

      {/* Card */}
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl shadow border border-gray-200"
      >
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT: Text fields */}
            <div className="space-y-5">
              {/* Badge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Badge (dòng nhỏ trên tiêu đề)
                </label>
                <input
                  name="badgeText"
                  value={form.badgeText || ""}
                  onChange={onChange}
                  placeholder="Ví dụ: Donagamex là gì?"
                  className={inputCls}
                />
              </div>

              {/* Heading */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tiêu đề lớn <span className="text-red-500">*</span>
                </label>
                <input
                  name="heading"
                  value={form.heading || ""}
                  onChange={onChange}
                  placeholder="Nhập tiêu đề lớn"
                  className={`${inputCls} ${invalid("heading")
                    ? "border-red-400 ring-2 ring-red-200"
                    : ""
                    }`}
                />
                {invalid("heading") && (
                  <p className="mt-1 text-sm text-red-600">
                    Vui lòng nhập tiêu đề lớn.
                  </p>
                )}
              </div>

              {/* Para 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  rows={3}
                  name="para1"
                  value={form.para1 || ""}
                  onChange={onChange}
                  placeholder="Đoạn mở đầu..."
                  className={`${inputCls} min-h-[96px]`}
                />
              </div>

            </div>

            {/* RIGHT: Image & preview */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ảnh minh hoạ
                </label>

                {/* File upload (Tailwind file:) */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={onPickFile}
                  className="block w-full text-sm text-gray-700
                    file:mr-4 file:py-2.5 file:px-4
                    file:rounded-lg file:border-0
                    file:bg-blue-600 file:text-white
                    hover:file:bg-blue-700
                    file:cursor-pointer cursor-pointer
                    border border-gray-300 rounded-lg"
                />

                <div className="mt-3">
                  <input
                    name="imageUrl"
                    value={form.imageUrl || ""}
                    onChange={onChange}
                    placeholder="Hoặc dán URL ảnh (https://...)"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Xem trước ảnh
                  </span>
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, imageUrl: "" }))}
                    disabled={!form.imageUrl}
                    className={`px-3 py-2 rounded-lg border text-sm
                      ${form.imageUrl
                        ? "border-gray-300 hover:bg-gray-50 text-gray-700"
                        : "border-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    Xoá ảnh
                  </button>
                </div>

                <div
                  className={`aspect-video rounded-lg overflow-hidden border 
                    ${form.imageUrl
                      ? "border-gray-200"
                      : "border-dashed border-gray-300 bg-gray-50"
                    }`}
                >
                  {form.imageUrl ? (
                    <img
                      src={form.imageUrl}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Chưa chọn ảnh
                    </div>
                  )}
                </div>
              </div>

              {/* Preview text card */}
              {(form.badgeText || form.heading || form.para1) && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  {form.badgeText && (
                    <div className="text-xs uppercase tracking-wide text-yellow-700">
                      {form.badgeText}
                    </div>
                  )}
                  {form.heading && (
                    <div className="text-lg font-semibold mt-1 text-gray-900">
                      {form.heading}
                    </div>
                  )}
                  {form.para1 && (
                    <p className="text-sm text-gray-700 mt-2">{form.para1}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 md:px-6 py-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setForm(getIntro());
              setTouched(false);
            }}
            className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            Hoàn tác
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className={`px-5 py-2.5 rounded-lg text-white
              ${canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
          >
            Lưu thay đổi
          </button>
        </div>
      </form>


    </div>
  );
}
