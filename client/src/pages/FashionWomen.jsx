import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../services/products";
import { stripHtml } from "../utils/text";

const PLACEHOLDER = "https://via.placeholder.com/800x500?text=No+Image";

export default function FashionKids() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getProductsByCategory(2); // Nữ
        const mapped = (Array.isArray(data) ? data : []).map((p) => ({
          id: p.id,
          title: p.name || "",
          img: p.image_url || PLACEHOLDER,
          date: p.created_at ? new Date(p.created_at).toLocaleDateString() : "",
          excerpt: stripHtml(p.description || ""),
          tag: p.category?.name || "Trẻ em",
        }));
        setItems(mapped);
      } catch (e) {
        setErr(e.message || "Không tải được sản phẩm");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container my-4">
      {/* CSS cho card – giống trang Nam */}
      <style>{`
        .post-grid-title{font-weight:800;margin-bottom:1rem;color:#bfa16e;}
        .post-card{display:flex;flex-direction:column;height:100%;border-radius:14px;overflow:hidden;text-decoration:none;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease,background .28s ease;}
        .post-card:hover{transform:translateY(-6px) scale(1.02);}
        .post-thumb{display:block;width:100%;height:170px;object-fit:cover;}
        @media (min-width:768px){.post-thumb{height:160px;}}
        @media (min-width:1200px){.post-thumb{height:150px;}}
        .post-title{font-weight:800;margin:0 0 .35rem 0;font-size:1rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
        .post-excerpt{font-size:.9rem;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
        .chip{display:inline-block;padding:.25rem .5rem;border-radius:999px;font-size:.75rem;font-weight:600;}
        .meta{font-size:.78rem;}
        @media (prefers-color-scheme:light){
          .post-card{background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 8px 20px rgba(0,0,0,.12);}
          .post-card:hover{box-shadow:0 14px 30px rgba(0,0,0,.18);border-color:rgba(13,110,253,.3);}
          .post-title{color:#212529;}
          .post-excerpt{color:#5c6f8b;}
          .chip{background:rgba(25,135,84,.14);color:#0f5132;} /* accent trẻ em */
          .meta{color:rgba(0,0,0,.55);}
        }
        @media (prefers-color-scheme:dark){
          .post-card{background:#17181a;border:1px solid rgba(255,255,255,.1);box-shadow:0 8px 20px rgba(0,0,0,.45);}
          .post-card:hover{box-shadow:0 14px 30px rgba(0,0,0,.6);border-color:rgba(0,166,214,.5);}
          .post-title{color:#fff;}
          .post-excerpt{color:rgba(255,255,255,.78);}
          .chip{background:rgba(25,135,84,.22);color:#4ade80;}
          .meta{color:rgba(255,255,255,.6);}
        }
      `}</style>

      <h1 className="post-grid-title">Thời trang trẻ em</h1>

      {loading && <div className="p-4 bg-white rounded shadow">Đang tải…</div>}
      {err && !loading && <div className="p-4 bg-red-50 text-red-700 rounded shadow">{err}</div>}

      {!loading && !err && (
        <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-xl-4">
          {items.map((p) => (
            <div className="col" key={p.id}>
              <Link to="/contact" className="post-card">
                <img
                  src={p.img}
                  alt={p.title}
                  className="post-thumb"
                  onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
                />
                <div className="p-3 d-flex flex-column gap-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="chip">{p.tag}</span>
                    <span className="meta">🗓 {p.date}</span>
                  </div>
                  <h3 className="post-title">{p.title}</h3>
                  <p className="post-excerpt">{p.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-12">
              <div className="p-4 text-center text-muted">Chưa có sản phẩm.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
