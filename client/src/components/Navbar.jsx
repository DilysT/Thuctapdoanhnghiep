// src/components/Navbar.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';
import searchIndex from '../data/searchIndex';
import { useI18n } from '../utils/i18n';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);

  // --- Dropdown "Sản phẩm" có delay ---
  const [prodOpen, setProdOpen] = useState(false);
  const prodRef = useRef(null);
  const prodTimer = useRef(null);
  const OPEN_DELAY = 120;
  const CLOSE_DELAY = 450;

  const navigate = useNavigate();

  // i18n
  const { t, lang, setLang } = useI18n();

  // refs click-outside (search)
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const inputDesktopRef = useRef(null);

  // Đồng bộ màu nền body
  useEffect(() => {
    document.body.classList.toggle('bg-dark',  darkMode);
    document.body.classList.toggle('bg-light', !darkMode);
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f8f9fa';
    document.body.style.color = darkMode ? '#ffffff' : '#212529';
  }, [darkMode]);

  // Gợi ý search
  const suggestions = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return searchIndex
      .filter(it => (it.title + ' ' + (it.keywords || '')).toLowerCase().includes(s))
      .slice(0, 6);
  }, [q]);

  const goSearch = () => {
    const s = q.trim();
    if (!s) return;
    if (suggestions.length === 1) {
      navigate(suggestions[0].path);
    } else {
      navigate(`/search?q=${encodeURIComponent(s)}`);
    }
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      goSearch();
    } else if (e.key === 'Escape') {
      setOpen(false);
      setProdOpen(false);
    }
  };

  // click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) setOpen(false);
      if (mobileRef.current  && !mobileRef.current.contains(e.target))  setOpen(false);
      if (prodRef.current    && !prodRef.current.contains(e.target))    setProdOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // hover delay
  const prodEnter = () => {
    clearTimeout(prodTimer.current);
    prodTimer.current = setTimeout(() => setProdOpen(true), OPEN_DELAY);
  };
  const prodLeave = () => {
    clearTimeout(prodTimer.current);
    prodTimer.current = setTimeout(() => setProdOpen(false), CLOSE_DELAY);
  };
  useEffect(() => () => clearTimeout(prodTimer.current), []);

  return (
    <>
      {/* LOGO HÀNG TRÊN */}
      <div className={`logo-bar py-3 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="container d-flex justify-content-center">
          <Link to="/" className="text-decoration-none">
            <img src="/ts.png" alt="Logo" className="navbar-logo-img" />
          </Link>
        </div>
      </div>

      {/* NAVBAR CHÍNH */}
      <nav
        className={`navbar navbar-expand-lg py-2 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}
        style={{ zIndex: 1030, position: 'sticky' }}
      >
        <style>{`
          .search-pill {
            position: relative;
            display: flex; align-items: center; gap: .45rem;
            border-radius: 999px;
            padding: .38rem .42rem .34rem .8rem;
            width: 190px;
            border: 1px solid transparent;
            transition: box-shadow .2s ease, border-color .2s ease, background .2s ease;
          }
          .search-input { border: none; outline: none; background: transparent; width: 100%; font-size: .92rem; }
          .search-btn {
            width: 34px; height: 34px; border-radius: 999px; border: 0; outline: 0;
            display:flex; align-items:center; justify-content:center; cursor:pointer;
            transition: transform .15s ease, box-shadow .2s ease;
          }
          .search-btn:active { transform: translateY(1px); }

          .search-suggest {
            position:absolute; right:0; top: calc(100% + .3rem);
            width: min(340px, 86vw);
            border-radius: 12px; overflow: hidden;
            box-shadow: 0 12px 28px rgba(0,0,0,.18);
          }
          .search-suggest .dropdown-item:hover { background: rgba(191,161,110,.12); color: #bfa16e; }
          .search-suggest .view-all { font-weight: 600; }

          @media (prefers-color-scheme: light){
            .search-pill { background:#fff; border-color: rgba(0,0,0,.08); box-shadow: 0 6px 16px rgba(0,0,0,.08); }
            .search-pill:focus-within { box-shadow: 0 10px 22px rgba(0,0,0,.12); border-color: rgba(13,110,253,.22); }
            .search-btn { background: #bfa16e; color: #fff; }
            .search-suggest { background:#fff; border:1px solid rgba(0,0,0,.08); }
            .search-suggest .dropdown-item { color:#212529; }
          }
          @media (prefers-color-scheme: dark){
            .search-pill { background:#17181a; border-color: rgba(255,255,255,.12); box-shadow: 0 6px 16px rgba(0,0,0,.45); }
            .search-pill:focus-within { box-shadow: 0 12px 26px rgba(0,0,0,.6); border-color: rgba(0,166,214,.35); }
            .search-btn { background: #bfa16e; color: #1b2838; }
            .search-suggest { background:#17181a; border:1px solid rgba(255,255,255,.12); }
            .search-suggest .dropdown-item { color:#fff; }
          }

          .nav-link.contact-link,
          .nav-link.contact-link:hover,
          .nav-link.contact-link:focus,
          .nav-link.contact-link::before,
          .nav-link.contact-link::after{
            background:none !important; background-image:none !important;
            box-shadow:none !important; text-shadow:none !important; filter:none !important;
            -webkit-mask-image:none !important; mask-image:none !important;
          }
        `}</style>

        <div className="container position-relative">
          {/* Logo mobile */}
          <Link className="navbar-brand d-lg-none" to="/">
            <img src="/logo.png" alt="Logo" style={{ height: 32 }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">
            {/* Menu trái */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/">{t('home')}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/gioi-thieu">{t('about')}</Link>
              </li>

              {/* Products */}
              <li
                className={`nav-item dropdown ${prodOpen ? 'show' : ''}`}
                ref={prodRef}
                onMouseEnter={prodEnter}
                onMouseLeave={prodLeave}
              >
                <span
                  className="nav-link dropdown-toggle text-uppercase"
                  role="button"
                  aria-expanded={prodOpen}
                  onClick={() => setProdOpen(v => !v)}
                >
                  {t('products')}
                </span>
                <ul className={`dropdown-menu ${prodOpen ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/thoi-trang-nam" onClick={() => setProdOpen(false)}>{t('men')}</Link></li>
                  <li><Link className="dropdown-item" to="/thoi-trang-nu" onClick={() => setProdOpen(false)}>{t('women')}</Link></li>
                  <li><Link className="dropdown-item" to="/thoi-trang-tre-em" onClick={() => setProdOpen(false)}>{t('kids')}</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/dich-vu-doi-tac">
                  {t('partners')}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/bai-viet">{t('posts')}</Link>
              </li>
            </ul>

            {/* Menu phải */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/tuyen-dung">{t('careers')}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-uppercase contact-link" to="/contact">{t('contact')}</Link>
              </li>

              {/* Language switcher */}
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle text-uppercase"
                  id="langDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang.toUpperCase()}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                  <li>
                    <button className="dropdown-item" onClick={() => setLang('vi')}>VI — Tiếng Việt</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setLang('en')}>EN — English</button>
                  </li>
                </ul>
              </li>

              {/* Theme toggle */}
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => setDarkMode(!darkMode)} aria-label={t('themeToggle')}>
                  <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'} text-warning`}></i>
                </button>
              </li>

              {/* Search (desktop) */}
              <li className="nav-item d-none d-md-block position-relative" ref={desktopRef}>
                <div className="search-pill">
                  <i className="bi bi-search" aria-hidden="true"></i>
                  <input
                    ref={inputDesktopRef}
                    type="text"
                    className="search-input"
                    placeholder={t('searchPlaceholder')}
                    value={q}
                    onChange={(e) => { setQ(e.target.value); setOpen(true); }}
                    onKeyDown={onKeyDown}
                    onFocus={() => q.trim() && setOpen(true)}
                    aria-label={t('searchPlaceholder')}
                  />
                  <button className="search-btn" type="button" onClick={goSearch} aria-label="Tìm">
                    <i className="bi bi-arrow-right-short fs-5"></i>
                  </button>
                </div>

                {open && q.trim() && suggestions.length > 0 && (
                  <div className="search-suggest dropdown-menu show">
                    {suggestions.map((sug, i) => (
                      <Link key={i} className="dropdown-item" to={sug.path} onClick={() => setOpen(false)}>
                        {sug.title}
                      </Link>
                    ))}
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item view-all" onClick={goSearch}>
                      {t('viewAll', q)}
                    </button>
                  </div>
                )}
              </li>
            </ul>

            {/* Search mobile */}
            <div className="w-100 d-md-none mt-2" ref={mobileRef}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t('searchPlaceholder')}
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setOpen(true); }}
                  onKeyDown={onKeyDown}
                  onFocus={() => q.trim() && setOpen(true)}
                />
                <button className="input-group-text" onClick={goSearch} type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              {open && q.trim() && suggestions.length > 0 && (
                <div className="search-suggest dropdown-menu show" style={{ left: 0, right: 'auto', width: '100%' }}>
                  {suggestions.map((sug, i) => (
                    <Link key={i} className="dropdown-item" to={sug.path} onClick={() => setOpen(false)}>
                      {sug.title}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item view-all" onClick={goSearch}>
                    {t('viewAll', q)}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
