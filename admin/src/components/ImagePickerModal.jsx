// admin/src/components/ImagePickerModal.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fmList, fmMkdir, fmUpload, fmDelete } from "../services/filemanager";

export default function ImagePickerModal({ open, onClose, onPick }) {
    const [path, setPath] = useState("");
    const [data, setData] = useState({ folders: [], files: [], path: "" });
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const fileRef = useRef();

    // --- New folder modal state ---
    const [showNewFolder, setShowNewFolder] = useState(false);
    const [newFolderName, setNewFolderName] = useState("");
    const [newFolderErr, setNewFolderErr] = useState("");

    const crumbs = useMemo(() => (path ? path.split("/") : []), [path]);

    const load = useCallback(
        async (p) => {
            const target = typeof p === "string" ? p : path;
            setLoading(true);
            setErr("");
            try {
                const res = await fmList(target);
                setData(res || { folders: [], files: [], path: target });
            } catch (e) {
                setErr(e.message || "Không tải được nội dung thư mục");
            } finally {
                setLoading(false);
            }
        },
        [path]
    );

    useEffect(() => {
        if (open) setPath("");
    }, [open]);

    useEffect(() => {
        if (open) load(path);
    }, [open, path, load]);

    const cd = (name) => setPath((prev) => (prev ? `${prev}/${name}` : name));
    const goCrumb = (i) => setPath(crumbs.slice(0, i).join("/"));
    const goUp = () =>
        setPath((p) => (p.includes("/") ? p.split("/").slice(0, -1).join("/") : ""));

    // ----- tạo folder: mở modal thay vì prompt -----
    const openNewFolder = () => {
        setNewFolderName("");
        setNewFolderErr("");
        setShowNewFolder(true);
    };

    const submitNewFolder = async () => {
        const n = newFolderName.trim();
        if (!n) return setNewFolderErr("Vui lòng nhập tên thư mục.");
        if (/[\\/]/.test(n)) return setNewFolderErr("Không dùng ký tự / hoặc \\.");
        await fmMkdir(path, n);
        setShowNewFolder(false);
        load();
    };

    const onUploadClick = () => fileRef.current?.click();
    const onUpload = async (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        await fmUpload(path, f);
        e.target.value = "";
        load();
    };

    const onRemove = async (item, type) => {
        if (!window.confirm(`Xoá ${type === "folder" ? "thư mục" : "ảnh"} "${item.name}"?`)) return;
        await fmDelete(path, item.name, type);
        load();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative bg-white rounded-xl shadow-xl w-[95vw] max-w-5xl max-h-[85vh] overflow-hidden">
                <div className="px-5 py-3 border-b flex items-center justify-between">
                    <div className="font-semibold">Thư viện ảnh (uploads)</div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border rounded" onClick={openNewFolder}>
                            + Thư mục
                        </button>
                        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onUpload} />
                        <button className="px-3 py-1 border rounded" onClick={onUploadClick}>
                            ⬆ Upload
                        </button>
                        <button className="px-3 py-1 border rounded" onClick={onClose}>
                            Đóng
                        </button>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="px-5 py-2 border-b text-sm flex items-center gap-2 flex-wrap">
                    <button onClick={() => setPath("")} className="hover:underline">
                        uploads
                    </button>
                    {crumbs.map((c, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span>/</span>
                            <button onClick={() => goCrumb(i + 1)} className="hover:underline">
                                {c}
                            </button>
                        </span>
                    ))}
                    {path && (
                        <button onClick={goUp} className="ml-4 text-gray-500 hover:underline">
                            ⤴ Lên trên
                        </button>
                    )}
                </div>

                <div className="p-4 overflow-auto">
                    {loading && <div>Đang tải…</div>}
                    {err && <div className="text-red-600">{err}</div>}

                    {!loading && !err && (
                        <>
                            {/* Folders */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
                                {data.folders.map((d) => (
                                    <div key={d.name} className="border rounded-lg p-3 flex items-center justify-between">
                                        <button className="font-medium text-blue-700" onClick={() => cd(d.name)}>
                                            📁 {d.name}
                                        </button>
                                        <button className="text-red-600 text-sm" onClick={() => onRemove(d, "folder")}>
                                            Xoá
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Files */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {data.files.map((f) => (
                                    <div key={f.url} className="border rounded-lg overflow-hidden">
                                        <div className="aspect-[4/3] bg-gray-50">
                                            <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-2 flex items-center justify-between gap-2">
                                            <div className="text-xs truncate" title={f.name}>
                                                {f.name}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="text-blue-600 text-xs hover:underline"
                                                    onClick={() => {
                                                        onPick?.(f.url);
                                                        onClose?.();
                                                    }}
                                                >
                                                    Chọn
                                                </button>
                                                <button
                                                    className="text-red-600 text-xs hover:underline"
                                                    onClick={() => onRemove(f, "file")}
                                                >
                                                    Xoá
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {data.files.length === 0 && data.folders.length === 0 && (
                                    <div className="col-span-full text-center text-gray-500">Thư mục trống.</div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* New Folder modal (mini) */}
                {showNewFolder && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-5">
                            <h3 className="text-lg font-semibold mb-3">Tạo thư mục mới</h3>
                            <input
                                autoFocus
                                className="w-full border rounded px-3 py-2"
                                placeholder="Ví dụ: banner"
                                value={newFolderName}
                                onChange={(e) => {
                                    setNewFolderErr("");
                                    setNewFolderName(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") submitNewFolder();
                                    if (e.key === "Escape") setShowNewFolder(false);
                                }}
                            />
                            {newFolderErr && <p className="text-sm text-red-600 mt-1">{newFolderErr}</p>}
                            <div className="mt-4 flex justify-end gap-2">
                                <button className="px-3 py-2 border rounded" onClick={() => setShowNewFolder(false)}>
                                    Huỷ
                                </button>
                                <button className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={submitNewFolder}>
                                    Tạo
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
