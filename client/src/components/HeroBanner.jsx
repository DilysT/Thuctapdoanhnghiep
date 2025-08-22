// client/src/components/HeroBanner.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/HeroBanner.css";
import { fetchBanners } from "../services/banners";
import heroBg from "../assets/hero1.jpg";

const MAX_SLOTS = 3;

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d)) return "";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function HeroBanner() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchBanners();

        const mapped = (Array.isArray(data) ? data : [])
          .filter((b) => b && b.image_url && b.is_active !== false)
          .sort((a, b) => {
            const pa = a.position ?? 999,
              pb = b.position ?? 999;
            if (pa !== pb) return pa - pb;
            return (a.id || 0) - (b.id || 0);
          })
          .slice(0, MAX_SLOTS)
          .map((b) => ({
            id: b.id,
            title: b.title || "",
            image: b.image_url || "",
            link: b.link_url || "#",
            updatedAt: b.updated_at || b.created_at || "",
            date: formatDate(b.created_at || b.updated_at),
          }));

        setItems(mapped);
      } catch (e) {
        setErr(e?.message || "Không tải được banner");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const bgImage = useMemo(() => {
    const envUrl = process.env.REACT_APP_HERO_BG_URL;
    return envUrl && /^https?:\/\//i.test(envUrl) ? envUrl : heroBg;
  }, []);

  return (
    <div className="hero-banner text-white">
      {/* Guard: chỉ nền bị cắt, cards không bị cắt */}
      <div className="hero-bg-guard">
        <div className="hero-background">
          <img src={bgImage} alt="" className="hero-bg-img" />
        </div>
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner container-fluid py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Thời trang giá sỉ – Nguồn hàng thời trang đa dạng, giá cả cạnh tranh
          </h2>
          <p className="lead">
            Cập nhật liên tục những xu hướng mới nhất, đáp ứng mọi nhu cầu của
            các shop thời trang.
          </p>
        </div>

        {err && <div className="alert alert-danger">{err}</div>}

        <div className="row g-4">
          {items.map((post) => {
            if (!post.image) return null;

            const thumb = post.updatedAt
              ? post.image +
                (post.image.includes("?") ? "&" : "?") +
                "v=" +
                encodeURIComponent(post.updatedAt)
              : post.image;

            const isExternal = /^https?:\/\//i.test(post.link || "");
            const Wrap = ({ children }) =>
              isExternal ? (
                <a
                  href={post.link}
                  className="hero-card text-white text-decoration-none d-block h-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ) : (
                <Link
                  to={post.link || "#"}
                  className="hero-card text-white text-decoration-none d-block h-100"
                >
                  {children}
                </Link>
              );

            return (
              <div key={post.id} className="col-12 col-md-4">
                <Wrap>
                  <div className="hero-img-wrapper">
                    <img
                      src={thumb}
                      alt={post.title || "banner"}
                      className="hero-img"
                    />
                    {(post.title || post.date) && (
                      <div className="hero-overlay">
                        {post.date && (
                          <span className="hero-date-badge">{post.date}</span>
                        )}
                        {post.title && (
                          <h5 className="hero-title">{post.title}</h5>
                        )}
                      </div>
                    )}
                  </div>
                </Wrap>
              </div>
            );
          })}

          {!loading && items.length === 0 && (
            <div className="col-12 text-center text-muted">
              Chưa có banner nào.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
