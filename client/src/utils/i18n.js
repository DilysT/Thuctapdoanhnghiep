import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const pick = (lang) => (["vi","en"].includes(lang) ? lang : (lang?.startsWith("vi") ? "vi" : "en"));

const TRANSLATIONS = {
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    products: "Sản phẩm",
    men: "Thời trang nam",
    women: "Thời trang nữ",
    kids: "Thời trang trẻ em",
    partners: "Dịch vụ & Đối tác",
    posts: "Bài viết",
    careers: "Tuyển dụng",
    contact: "Liên hệ",
    searchPlaceholder: "Tìm kiếm…",
    viewAll: (q) => `Xem tất cả kết quả cho “${q}”`,
    themeToggle: "Đổi giao diện",
    language: "Ngôn ngữ",
  },
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    men: "Men",
    women: "Women",
    kids: "Kids",
    partners: "Services & Partners",
    posts: "Posts",
    careers: "Careers",
    contact: "Contact",
    searchPlaceholder: "Search…",
    viewAll: (q) => `View all results for “${q}”`,
    themeToggle: "Toggle theme",
    language: "Language",
  }
};

const I18nContext = createContext({
  lang: "vi",
  setLang: () => {},
  t: (key, ...args) => key
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved) return pick(saved);
    return pick(navigator.language || "vi");
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.vi;
    return (key, ...args) => {
      const val = dict[key];
      if (typeof val === "function") return val(...args);
      return val ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
