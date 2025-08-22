import http from "./http";

export const fmList = async (path = "") => {
    const { data } = await http.get("/api/filemanager", { params: { path } });
    return data; // { path, folders:[], files:[] }
};
export const fmMkdir = async (path, name) => {
    const { data } = await http.post("/api/filemanager/mkdir", { path, name });
    return data;
};
export const fmUpload = async (path, file) => {
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await http.post("/api/filemanager/upload", fd, { params: { path } });
    return data; // { url, name }
};
export const fmDelete = async (path, name, type = "file") => {
    const { data } = await http.delete("/api/filemanager", { params: { path, name, type } });
    return data;
};
