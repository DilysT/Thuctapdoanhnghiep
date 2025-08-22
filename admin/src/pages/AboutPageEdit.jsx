import React, { useEffect, useMemo, useRef, useState } from "react";
import { getAboutPage, saveAboutPage } from "../services/homepageService";

/* ---------- Constants ---------- */
const EMPTY = {
  heading: "",
  lead: "",
  sections: [
    { title: "Sứ mệnh", body: "" },
    { title: "Danh mục & chất lượng", body: "" },
    { title: "Giá cả cạnh tranh", body: "" },
    { title: "Hỗ trợ & đồng hành", body: "" },
    { title: "Giá trị cốt lõi", body: "" },
    { title: "Tầm nhìn & phát triển", body: "" },
    { title: "Liên hệ", body: "" },
  ],
};
const DRAFT_KEY = "about_page_draft_v1";

/* ---------- Small UI pieces ---------- */
function ConfirmModal({ open, title, message, confirmText = "Đồng ý", cancelText = "Hủy", onConfirm, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="px-5 pt-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{message}</p>
        </div>
        <div className="px-5 py-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm?.();
              onClose?.();
            }}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

function Toast({ text, onClose }) {
  if (!text) return null;
  return (
    <div className="fixed top-4 right-4 z-[70]">
      <div className="rounded-lg bg-green-600 text-white px-4 py-2 shadow">{text}</div>
      {/* auto close */}
      {setTimeout(onClose, 2000) && null}
    </div>
  );
}

/* ---------- Main ---------- */
export default function AboutPageEdit() {
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState(false);
  const [openIdx, setOpenIdx] = useState([0, 1]);
  const [draftSavedAt, setDraftSavedAt] = useState(null);
  const [toast, setToast] = useState("");
  const draftTimer = useRef(null);

  // confirm modal state
  const [confirm, setConfirm] = useState({
    open: false,
    title: "",
    message: "",
    onConfirm: null,
  });

  /* Load data (draft first) */
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      try {
        setForm({ ...EMPTY, ...JSON.parse(draft) });
      } catch {
        setForm(EMPTY);
      }
    } else {
      const data = getAboutPage?.();
      setForm(data ? { ...EMPTY, ...data } : EMPTY);
    }
  }, []);

  /* Autosave draft */
  useEffect(() => {
    if (draftTimer.current) clearTimeout(draftTimer.current);
    draftTimer.current = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
      setDraftSavedAt(new Date());
    }, 1200);
    return () => clearTimeout(draftTimer.current);
  }, [form]);

  const canSubmit = useMemo(() => !!form.heading?.trim() && !!form.lead?.trim(), [form]);
  const invalid = (k) => touched && !String(form[k] || "").trim();

  const input =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const area = input + " min-h-[96px]";

  /* Helpers */
  const count = (s) => {
    const txt = String(s || "");
    return { chars: txt.length, words: txt.trim() ? txt.trim().split(/\s+/).length : 0 };
  };
  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));
  const onChange = (e) => setField(e.target.name, e.target.value);
  const setSection = (i, next) =>
    setForm((p) => {
      const s = [...p.sections];
      s[i] = { ...s[i], ...next };
      return { ...p, sections: s };
    });
  const addSection = () =>
    setForm((p) => ({ ...p, sections: [...p.sections, { title: "Mục mới", body: "" }] }));
  const moveSection = (i, dir) =>
    setForm((p) => {
      const s = [...p.sections];
      const j = i + dir;
      if (j < 0 || j >= s.length) return p;
      [s[i], s[j]] = [s[j], s[i]];
      return { ...p, sections: s };
    });
  const duplicateSection = (i) =>
    setForm((p) => {
      const s = [...p.sections];
      s.splice(i + 1, 0, { ...s[i] });
      return { ...p, sections: s };
    });
  const toggleOpen = (i) =>
    setOpenIdx((arr) => (arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i]));
  const insertBullets = (i) =>
    setSection(i, {
      body:
        (form.sections[i].body ? form.sections[i].body + "\n" : "") +
        ["Sản phẩm đa dạng, cập nhật mới", "Giá cạnh tranh, ổn định", "Hỗ trợ nhanh chóng, tận tâm"].join("\n"),
    });

  /* Submit with confirm modal */
  const askSave = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;
    setConfirm({
      open: true,
      title: "Xác nhận lưu thay đổi",
      message: "Bạn có chắc muốn lưu nội dung Giới thiệu chung về page?",
      onConfirm: () => {
        saveAboutPage?.(form);
        localStorage.removeItem(DRAFT_KEY);
        setToast("Đã lưu thay đổi 🎉");
      },
    });
  };

  /* UI */
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-[rgba(255,255,255,0.75)] backdrop-blur mb-4 md:mb-6 border-b border-gray-200">
        <div className="py-3 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Giới thiệu chung về page</h1>
          <div className="flex items-center gap-2">
            {draftSavedAt && (
              <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                Đã lưu nháp {draftSavedAt.toLocaleTimeString()}
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                const data = getAboutPage?.();
                setForm(data ? { ...EMPTY, ...data } : EMPTY);
                setTouched(false);
                setToast("Đã tải bản đã lưu");
              }}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
            >
              Tải bản đã lưu
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem(DRAFT_KEY);
                setToast("Đã xoá bản nháp");
              }}
              className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              Xoá nháp
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={askSave} className="bg-white rounded-xl shadow border border-gray-200">
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="space-y-5">
              {/* Heading */}
              <div>
                <div className="flex items-end justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tiêu đề lớn <span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-gray-500">{count(form.heading).chars} ký tự</span>
                </div>
                <input
                  name="heading"
                  value={form.heading}
                  onChange={onChange}
                  placeholder="TrangWholesale – Nguồn hàng thời trang sỉ đáng tin cậy"
                  className={`${input} ${invalid("heading") ? "border-red-400 ring-2 ring-red-200" : ""}`}
                />
                {invalid("heading") && (
                  <p className="mt-1 text-sm text-red-600">Vui lòng nhập tiêu đề.</p>
                )}
              </div>

              {/* Lead */}
              <div>
                <div className="flex items-end justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Đoạn mở đầu (lead) <span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-gray-500">
                    {count(form.lead).words} từ • {count(form.lead).chars} ký tự
                  </span>
                </div>
                <textarea
                  name="lead"
                  value={form.lead}
                  onChange={onChange}
                  placeholder="Chúng tôi cung cấp nguồn hàng đa dạng, giá cạnh tranh, hỗ trợ tận tâm…"
                  className={`${area} ${invalid("lead") ? "border-red-400 ring-2 ring-red-200" : ""}`}
                />
              </div>

              {/* Sections header */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Các mục nội dung</h3>
                <button
                  type="button"
                  onClick={addSection}
                  className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  + Thêm mục
                </button>
              </div>

              {/* Sections list (accordion) */}
              {form.sections.map((sec, i) => {
                const opened = openIdx.includes(i);
                const words = sec.body?.trim() ? sec.body.trim().split(/\s+/).length : 0;
                return (
                  <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                    {/* Row head */}
                    <div
                      className={`flex items-center justify-between px-3 py-2 cursor-pointer ${
                        opened ? "bg-blue-50" : "bg-gray-50"
                      }`}
                      onClick={() => toggleOpen(i)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">#{i + 1}</span>
                        <div className="font-medium">
                          {sec.title || <span className="text-gray-400">Tiêu đề mục…</span>}
                        </div>
                        {words > 0 && (
                          <span className="text-xs text-gray-500">• {words} từ</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveSection(i, -1);
                          }}
                          className="px-2 py-1 rounded border text-xs hover:bg-gray-100"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveSection(i, +1);
                          }}
                          className="px-2 py-1 rounded border text-xs hover:bg-gray-100"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            duplicateSection(i);
                          }}
                          title="Nhân đôi"
                          className="px-2 py-1 rounded border text-xs hover:bg-gray-100"
                        >
                          ⎘
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfirm({
                              open: true,
                              title: "Xoá mục?",
                              message: `Bạn có chắc muốn xoá mục “${sec.title || "Không tiêu đề"}”?`,
                              onConfirm: () =>
                                setForm((p) => ({
                                  ...p,
                                  sections: p.sections.filter((_, x) => x !== i),
                                })),
                            });
                          }}
                          className="px-2 py-1 rounded border border-red-300 text-red-600 text-xs hover:bg-red-50"
                        >
                          Xoá
                        </button>
                      </div>
                    </div>

                    {/* Body */}
                    {opened && (
                      <div className="p-3 space-y-3">
                        <input
                          value={sec.title}
                          onChange={(e) => setSection(i, { title: e.target.value })}
                          className={input}
                          placeholder="Tiêu đề mục"
                        />
                        <div className="flex items-end justify-between">
                          <span className="text-sm font-medium text-gray-700">Nội dung</span>
                          <span className="text-xs text-gray-500">
                            {count(sec.body).words} từ • {count(sec.body).chars} ký tự
                          </span>
                        </div>
                        <textarea
                          value={sec.body}
                          onChange={(e) => setSection(i, { body: e.target.value })}
                          className={area}
                          placeholder="Nội dung (xuống dòng cho mỗi ý)"
                        />
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => insertBullets(i)}
                            className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                          >
                            + Chèn gợi ý bullet
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleOpen(i)}
                            className="px-3 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90"
                          >
                            Đóng mục
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT preview */}
            <div className="space-y-5 lg:sticky lg:top-[72px] h-max">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-[22px] leading-7 font-extrabold text-gray-900 mb-2">
                  {form.heading || "— Tiêu đề —"}
                </div>
                <p className="text-gray-700">{form.lead || "Đoạn mở đầu..."}</p>
              </div>

              <div className="space-y-4 max-h-[70vh] overflow-auto pr-1">
                {form.sections.map((sec, i) => (
                  <section key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{sec.title}</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      {String(sec.body || "")
                        .split(/\n+/)
                        .filter(Boolean)
                        .map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 md:px-6 py-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              const data = getAboutPage?.();
              setForm(data ? { ...EMPTY, ...data } : EMPTY);
              setTouched(false);
              setToast("Hoàn tác về bản đã lưu");
            }}
            className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            Hoàn tác về bản đã lưu
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className={`px-5 py-2.5 rounded-lg text-white ${
              canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            Lưu thay đổi
          </button>
        </div>
      </form>

      {/* Modals & Toast */}
      <ConfirmModal
        open={confirm.open}
        title={confirm.title}
        message={confirm.message}
        onConfirm={confirm.onConfirm}
        onClose={() => setConfirm((p) => ({ ...p, open: false }))}
      />
      <Toast text={toast} onClose={() => setToast("")} />
    </div>
  );
}
