// src/pages/SearchResults.jsx
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import searchIndex from '../data/searchIndex';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const q = useQuery().get('q')?.trim() || '';
  const query = q.toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    return searchIndex.filter(item => {
      const hay = (item.title + ' ' + (item.keywords || '')).toLowerCase();
      return hay.includes(query);
    });
  }, [query]);

  return (
    <div className="container my-4">
      <style>{`
        :root { --gold:#bfa16e; }
        .sr-title{font-weight:900;color:var(--gold);margin-bottom:.25rem;font-size:clamp(26px,3vw,38px);}
        .sr-sub{color:var(--bs-secondary-color,#6c757d);}

        /* Card dọc giống mẫu */
        .s-card{display:block;border-radius:16px;overflow:hidden;text-decoration:none;
                transition:transform .22s, box-shadow .22s, border-color .22s;}
        .thumb{width:100%;aspect-ratio: 16/9;object-fit:cover;display:block;}
        .body{padding:12px 14px 16px;}
        .meta{display:flex;align-items:center;gap:10px;margin-bottom:6px;}
        .chip{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;
              font-size:.8rem;font-weight:700;white-space:nowrap;}
        .date{font-size:.82rem;opacity:.85;display:inline-flex;align-items:center;gap:6px;white-space:nowrap;}
        .ttl{font-weight:800;line-height:1.3;margin:6px 0 6px 0;}
        .ex{margin:0;line-height:1.5;font-size:.95rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

        @media (prefers-color-scheme: light){
          .s-card{background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 8px 20px rgba(0,0,0,.10);}
          .s-card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,0,0,.16);border-color:rgba(13,110,253,.18);}
          .chip{background:rgba(191,161,110,.15);color:#7b673e;}
          .date{color:#5c6f8b;}
          .ttl{color:#0b1e36;}
          .ex{color:#5c6f8b;}
        }
        @media (prefers-color-scheme: dark){
          .s-card{background:#1a1d22;border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 26px rgba(0,0,0,.55);}
          .s-card:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,.65);border-color:rgba(0,166,214,.35);}
          .chip{background:rgba(191,161,110,.18);color:#e9d9b4;}
          .date{color:rgba(255,255,255,.75);}
          .ttl{color:#fff;}
          .ex{color:rgba(255,255,255,.78);}
        }
      `}</style>

      <h1 className="sr-title">Kết quả tìm kiếm</h1>
      <p className="sr-sub">Từ khóa: <strong>{q || '—'}</strong> • {results.length} kết quả</p>

      <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
        {results.map((r, i) => (
          <div className="col" key={i}>
            <Link to={r.path} className="s-card">
              {r.img && <img src={r.img} alt={r.title} className="thumb" />}
              <div className="body">
                <div className="meta">
                  {r.tag && <span className="chip">{r.tag}</span>}
                  {r.date && (
                    <span className="date">
                      <i className="bi bi-calendar2" /> {r.date}
                    </span>
                  )}
                </div>
                <div className="ttl">{r.title}</div>
                {r.excerpt && <p className="ex">{r.excerpt}</p>}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="alert alert-warning mt-3">Không tìm thấy nội dung phù hợp.</div>
      )}
    </div>
  );
}
