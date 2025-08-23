// src/pages/ServicesPartners.jsx
import React from "react";
import { Link } from "react-router-dom";

/* ===== Ảnh local bạn cung cấp ===== */
import watch from "../assets/postdetail/watch1.jpg";
import teen from "../assets/postdetail/teen1.png";
import lokim from "../assets/postdetail/lokim.jpg";
import chodaumoi from "../assets/postdetail/chodaumoi1.jpg";
import blouse2 from "../assets/banner1/blouse2.jpg";
import aonam from "../assets/banner1/aonam.webp";
import lowoeCamel from "../assets/banner1/lowoe3.jpg";

import asics from "../assets/partners/asics.png";
import samsung from "../assets/partners/samsung.png";
import underarmour from "../assets/partners/underarmour.png";
import xebec from "../assets/partners/xebec.png";
import eneos from "../assets/partners/eneos.png";
import idemitsu from "../assets/partners/idemitsu.png";
import portauthority from "../assets/partners/portauthority.png";

/* ========== DATA ========== */
const cooperationAreas = [
  {
    id: "01",
    icon: "bi-people",
    title: "Hợp tác phát triển",
    desc:
      "Đồng hành cùng đối tác để mở rộng năng lực sản xuất, tối ưu chi phí và nâng cao chất lượng.",
  },
  {
    id: "02",
    icon: "bi-gear",
    title: "Gia công sản phẩm",
    desc:
      "Nhận gia công theo các hình thức CMT / OEM / FOB với quy trình kiểm soát chất lượng chặt chẽ.",
  },
  {
    id: "03",
    icon: "bi-globe2",
    title: "Xuất khẩu quốc tế",
    desc:
      "Kinh nghiệm xuất khẩu Nhật, Mỹ, Châu Âu… với hồ sơ – tiêu chuẩn đầy đủ và đúng hạn.",
  },
];

/* dùng ảnh bạn cung cấp cho từng section */
const serviceSections = [
  {
    anchor: "xuat-khau-gia-cong",
    title: "Xuất khẩu và gia công hàng may mặc",
    text:
      "Chúng tôi có kinh nghiệm làm việc với các thị trường Nhật Bản, Mỹ, Châu Âu, Canada, Hồng Kông, Đài Loan... Sẵn sàng hợp tác trong và ngoài nước về xuất khẩu & gia công may mặc.",
    bullets: [
      "Quản trị đơn hàng theo chuẩn quốc tế.",
      "QA/QC xuyên suốt từ đầu vào tới đóng gói.",
      "Linh hoạt MOQ theo từng dòng sản phẩm.",
    ],
    img: aonam,
  },
  {
    anchor: "vai-khong-det",
    title: "Sản xuất vải không dệt và túi đựng",
    text:
      "Đáp ứng tiêu chuẩn chất lượng quốc tế với dây chuyền đồng bộ, công suất lớn và hệ thống phân phối rộng.",
    bullets: [
      "Kiểm định theo tiêu chuẩn châu Âu & Mỹ.",
      "Chuỗi sản xuất chuyên nghiệp, đáp ứng đơn lớn.",
      "Sản xuất xanh – bền vững – thân thiện môi trường.",
    ],
    img: blouse2,
    reverse: true,
  },
  {
    anchor: "hang-y-te",
    title: "Hàng y tế",
    text:
      "Cung cấp mặt hàng y tế với tiêu chí chất lượng đặt lên hàng đầu: nguyên liệu rõ nguồn gốc, quy trình sạch.",
    bullets: [
      "Vải không dệt trong nước, chất lượng cao.",
      "Trang thiết bị hiện đại, phòng ốc đảm bảo.",
      "Đáp ứng tiêu chuẩn của Bộ Y Tế.",
    ],
    img: lokim,
    accent: "orange", // sẽ được style bằng màu vàng thương hiệu
  },
  {
    anchor: "dong-phuc-bao-ho",
    title: "Đồng phục và bảo hộ lao động",
    text:
      "Thiết kế – sản xuất đồng phục doanh nghiệp/bảo hộ, nhấn mạnh nhận diện thương hiệu và độ bền sử dụng.",
    bullets: [
      "Thiết kế theo brand guideline.",
      "Chất liệu phù hợp từng môi trường làm việc.",
      "May mẫu – duyệt mẫu nhanh, giao hàng đúng hẹn.",
    ],
    img: lowoeCamel,
    reverse: true,
  },
];

/* ========== PAGE COMPONENT ========== */
export default function ServicesPartners() {
  // Fallback ảnh khi lỗi
  const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
         <defs><linearGradient id='g' x1='0' x2='1'>
           <stop stop-color='#f4eee0' offset='0'/><stop stop-color='#efe7d6' offset='1'/>
         </linearGradient></defs>
         <rect fill='url(#g)' width='100%' height='100%'/></svg>`
    );

  const Img = ({ src, alt, className }) => (
    <img
      src={src || placeholder}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = placeholder;
      }}
    />
  );

  // (giữ nguyên biến này nếu bạn còn dùng chỗ khác; không render grid nữa)
  const partnerLogos = [watch, teen, chodaumoi, blouse2, lowoeCamel, aonam];

  /* ===== Bộ logo cho marquee ===== */
  const marqueeLogos = [
    { name: "UNDER ARMOUR", src: underarmour, height: 70 },
    { name: "XEBEC", src: xebec, height: 70 },
    { name: "ENEOS", src: eneos, height: 64 },
    { name: "IDEMITSU", src: idemitsu, height: 64 },
    { name: "ASICS", src: asics, height: 70 },
    { name: "SAMSUNG", src: samsung, height: 64 },
    { name: "PORT AUTHORITY", src: portauthority, height: 46 },
  ];
  const marqueeItems = [...marqueeLogos, ...marqueeLogos];

  return (
    <main>
      {/* ===== THEME (vàng #bfa16e) & CSS ===== */}
      <style>{`
        :root {
          --brand: #bfa16e;
          --brand-weak: rgba(191,161,110,.12);
          --brand-weak-2: rgba(191,161,110,.22);
          --brand-strong: rgba(191,161,110,.28);
          --text-dark: #1e2329;
        }

        /* HERO */
        .hero-services {
          position: relative;
          min-height: 260px;
          display: flex;
          align-items: flex-end;
          padding: 56px 0 72px;
          color: #fff;
          background:
            radial-gradient(1000px 400px at -10% -20%, rgba(191,161,110,.28), transparent 60%),
            radial-gradient(800px 300px at 110% 20%, rgba(191,161,110,.18), transparent 60%),
            linear-gradient(180deg, rgba(3,14,24,.75), rgba(3,11,20,.92));
          overflow: hidden;
          border-bottom: 1px solid rgba(191,161,110,.22);
        }

        .quicknav { margin-top: 20px; padding: 6px 0; }
        .quicknav .pill {
          background:#121417; color:#fff; border:1px solid var(--brand-weak);
          padding:.5rem 1rem; border-radius:999px; font-size:.92rem;
          display:inline-flex; align-items:center; gap:.5rem;
          transition:transform .15s ease, box-shadow .2s ease, border-color .2s;
        }
        .quicknav .pill:hover { transform: translateY(-1px); box-shadow:0 10px 20px rgba(0,0,0,.18); border-color: var(--brand); }
        .quicknav .pill i { color: var(--brand); }

        /* Section title */
        .section-title { text-align: center; margin: 44px 0 12px; font-weight: 800; color: var(--text-dark); letter-spacing:.3px;}
        .section-title .line { display:inline-block; width:56px; height:3px; background:var(--brand); margin:0 12px; border-radius:2px; vertical-align:middle; }

        /* Lĩnh vực hợp tác - cards */
        .area-card {
          background:#fff; border:1px solid rgba(0,0,0,.06); border-radius:18px;
          padding:28px 22px; text-align:center; box-shadow:0 10px 24px rgba(0,0,0,.06);
          transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .area-card:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,.10); border-color: var(--brand-weak-2); }
        .area-icon { width:68px; height:68px; border-radius:999px; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; background:var(--brand-weak); color:var(--brand); }
        .area-no { font-size:32px; font-weight:800; color:var(--brand); opacity:.20; position:absolute; right:18px; top:10px; }

        /* Alternating service sections */
        .service-row { align-items:center; margin:70px 0; }
        .service-img-wrap { position:relative; }
        .service-img { display:block; width:100%; border-radius:12px; box-shadow:0 14px 34px rgba(0,0,0,.18); }
        .service-img-wrap::before {
          content:""; position:absolute; inset:-18px -18px auto auto; height:72%; width:72%;
          background: var(--brand-weak); border-radius:14px; z-index:-1; filter:saturate(90%);
        }
        .service-row.reverse .service-img-wrap::before { inset:auto auto -18px -18px; }
        .section-text h3 { color:#0f1720; }
        .section-text p, .section-text li { color:#5a6472; }
        .section-text ul{ list-style:none; padding-left:0; margin:0; }
        .section-text li{ position:relative; padding-left:1.35rem; margin:.4rem 0; }
        .section-text li::before{
          content:""; position:absolute; left:0; top:.45rem; width:.6rem; height:.6rem; border-radius:999px;
          background: var(--brand);
          box-shadow:0 0 0 4px var(--brand-weak);
        }
        .accent-orange .service-img-wrap::before { background: var(--brand-strong); }

        .btn-brand {
          display:inline-flex; align-items:center; gap:.5rem; border-radius:999px;
          background: var(--brand); color:#1b1b1b; border:1px solid rgba(0,0,0,.08);
          padding:.62rem 1.05rem; font-weight:700;
          transition:transform .12s ease, box-shadow .2s ease, background .2s;
          text-decoration:none;
        }
        .btn-brand:hover { transform: translateY(-1px); box-shadow:0 12px 24px rgba(191,161,110,.35); }

        /* Partner logos (grid cũ — giữ CSS, không render nữa) */
        .partner-item{
          background:#fff; border:1px solid rgba(0,0,0,.06); border-radius:14px;
          padding:12px; display:flex; align-items:center; justify-content:center; height:100%;
          transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow:0 10px 24px rgba(0,0,0,.06);
        }
        .partner-item:hover{ transform: translateY(-3px); box-shadow:0 16px 34px rgba(0,0,0,.10); border-color: var(--brand-weak-2); }
        .partner-logo{ width:100%; height:64px; object-fit:cover; filter:grayscale(1) contrast(1.02); transition: filter .2s ease; }
        .partner-item:hover .partner-logo{ filter:none; }

        /* Dark mode */
        body.bg-dark { --bg-surface:#1b2026; --bg-card:#232a32; --text-strong:#f5f7fa; --text-soft:#cfd6df; }
        body.bg-dark .section-title { color: var(--text-strong); }
        body.bg-dark .area-card{ background: var(--bg-card); border-color: rgba(255,255,255,.10); box-shadow:0 14px 34px rgba(0,0,0,.35); }
        body.bg-dark .area-card h3{ color: var(--text-strong) !important; }
        body.bg-dark .area-card p, body.bg-dark .area-card .text-secondary{ color: var(--text-soft) !important; }
        body.bg-dark .area-icon{ background: rgba(191,161,110,.25); color: var(--brand); }
        body.bg-dark .area-no{ color: var(--brand); opacity: .35; }
        body.bg-dark .service-img-wrap::before{ background: rgba(191,161,110,.22); }
        body.bg-dark .section-text h3{ color: var(--text-strong); }
        body.bg-dark .section-text p, body.bg-dark .section-text li{ color: var(--text-soft); }
        body.bg-dark .quicknav .pill{ background:#1e232a; border-color: rgba(191,161,110,.25); }
        body.bg-dark .partner-item{ background: var(--bg-card); border-color: rgba(255,255,255,.10); }

        /* Breadcrumb */
        .hero-services .crumb a { color: #fff !important; }
        .hero-services .crumb .current { color:#fff; font-weight:800; letter-spacing:.2px; }

        /* ===== Marquee đối tác ===== */
        @keyframes pmMarqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .pm-viewport { overflow:hidden; position:relative; }
        .pm-track { display:flex; gap:6rem; width:200%; animation: pmMarqueeLeft 22s linear infinite; }
        .pm-viewport:hover .pm-track { animation-play-state: paused; } /* pause khi hover */
        .pm-item { flex:0 0 auto; display:flex; align-items:center; justify-content:center; }
        .pm-logo { filter: grayscale(100%) opacity(.85); transition: filter .25s ease, transform .25s ease; transform: translateZ(0); }
        .pm-item:hover .pm-logo { filter: none; transform: scale(1.06); cursor: pointer; }

        .pm-fade:before, .pm-fade:after { content:""; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none; }
        body.bg-dark .pm-fade:before{ left:0;  background: linear-gradient(to right, #121212, rgba(18,18,18,0)); }
        body.bg-dark .pm-fade:after { right:0; background: linear-gradient(to left,  #121212, rgba(18,18,18,0)); }
        body.bg-light .pm-fade:before{ left:0;  background: linear-gradient(to right, #ffffff, rgba(255,255,255,0)); }
        body.bg-light .pm-fade:after { right:0; background: linear-gradient(to left,  #ffffff, rgba(255,255,255,0)); }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero-services">
        <div className="container">
          <p className="crumb mb-2">
            <Link to="/" className="text-decoration-none">Trang chủ</Link>
            <span className="mx-1 text-white-50">/</span>
            <span className="current text-white">Dịch vụ &amp; Đối tác</span>
          </p>
          <h1 className="title display-6 mb-3">DỊCH VỤ VÀ ĐỐI TÁC</h1>
        </div>
      </section>

      {/* Quick nav */}
      <div className="quicknav">
        <div className="container">
          <div className="d-flex flex-wrap gap-2">
            <a className="pill text-decoration-none" href="#xuat-khau-gia-cong"><i className="bi bi-truck"></i> Xuất khẩu & gia công</a>
            <a className="pill text-decoration-none" href="#vai-khong-det"><i className="bi bi-bag"></i> Vải không dệt</a>
            <a className="pill text-decoration-none" href="#hang-y-te"><i className="bi bi-hospital"></i> Hàng y tế</a>
            <a className="pill text-decoration-none" href="#dong-phuc-bao-ho"><i className="bi bi-shield-check"></i> Đồng phục & BHLĐ</a>
          </div>
        </div>
      </div>

      {/* ===== LĨNH VỰC HỢP TÁC ===== */}
      <section id="linh-vuc-hop-tac" className="py-4">
        <div className="container">
          <h2 className="section-title">
            <span className="line" /> Lĩnh vực hợp tác <span className="line" />
          </h2>

          <div className="row g-4 mt-2">
            {cooperationAreas.map((a) => (
              <div key={a.id} className="col-12 col-md-6 col-lg-4">
                <div className="area-card position-relative h-100">
                  <div className="area-no">{a.id}</div>
                  <div className="area-icon">
                    <i className={`bi ${a.icon} fs-3`} />
                  </div>
                  <h3 className="h5 fw-bold mb-2" style={{color:"var(--text-dark)"}}>{a.title}</h3>
                  <p className="mb-0 text-secondary">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÁC KHỐI DỊCH VỤ SO LE ===== */}
      <section id="dich-vu" className="py-4">
        <div className="container">
          {serviceSections.map((s) => {
            const Row = (
              <div key={s.anchor} id={s.anchor}
                   className={`row service-row ${s.reverse ? "flex-row-reverse reverse" : ""}`}>
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                  <div className="service-img-wrap">
                    <Img src={s.img} alt={s.title} className="service-img" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 section-text">
                  <h3 className="h3 fw-bold mb-3">{s.title}</h3>
                  <p>{s.text}</p>
                  {s.bullets?.length > 0 && (
                    <ul>
                      {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                  <div className="mt-3">
                    <Link to="/contact" className="btn-brand">
                      <i className="bi bi-chat-dots"></i> Liên hệ hợp tác
                    </Link>
                  </div>
                </div>
              </div>
            );
            return s.accent === "orange" ? (
              <div className="accent-orange" key={s.anchor + "-wrap"}>{Row}</div>
            ) : Row;
          })}
        </div>
      </section>

      {/* ===== ĐỐI TÁC — chỉ còn MARQUEE ===== */}
      <section id="doi-tac" className="py-5">
        <div className="container">
          <h2 className="section-title mb-4">
            <span className="line" /> Đối tác của chúng tôi <span className="line" />
          </h2>

          <div className="pm-viewport pm-fade py-4">
            <div className="pm-track">
              {marqueeItems.map((it, i) => (
                <div className="pm-item" key={`${it.name}-${i}`}>
                  <img
                    src={it.src}
                    alt={it.name}
                    className="pm-logo"
                    style={{ height: it.height, width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              height: 6,
              background:
                "linear-gradient(90deg, rgba(191,161,110,.25), rgba(191,161,110,0))",
            }}
          />
        </div>
      </section>
    </main>
  );
}
