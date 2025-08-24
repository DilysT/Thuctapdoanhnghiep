// src/pages/HomePage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import  workplace from '../assets/workplace/workplace1.jpg';
// Hình demo cho section giới thiệu
import hero3 from '../assets/hero3.jpg';
import shipping from '../assets/shipping.webp';
import soluong from '../assets/soluong.jpg';
import support from '../assets/support.webp';
// LOGO đối tác
import asics from '../assets/partners/asics.png';
import samsung from '../assets/partners/samsung.png';
import underarmour from '../assets/partners/underarmour.png';
import xebec from '../assets/partners/xebec.png';
import eneos from '../assets/partners/eneos.png';
import idemitsu from '../assets/partners/idemitsu.png';
import portauthority from '../assets/partners/portauthority.png';

/* ===== Helper: đọc dark mode đồng bộ ngay từ đầu ===== */
function readDarkNow() {
  if (typeof window === 'undefined') return false;
  const doc = document.documentElement;
  const body = document.body;

  // 1) Thuộc tính/ lớp thường dùng cho toggle theme
  const attr =
    doc.getAttribute('data-bs-theme') ||
    body.getAttribute('data-bs-theme') ||
    doc.getAttribute('data-theme') ||
    body.getAttribute('data-theme') ||
    (doc.classList.contains('dark') || body.classList.contains('dark') ? 'dark' : null);
  if (attr) return attr === 'dark';

  // 2) localStorage (các app hay lưu 'theme', 'color-theme', 'data-bs-theme')
  try {
    const ls =
      localStorage.getItem('theme') ||
      localStorage.getItem('color-theme') ||
      localStorage.getItem('data-bs-theme');
    if (ls) return ls === 'dark';
  } catch (_) {}

  // 3) System setting
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }

  // 4) Fallback cuối cùng: màu chữ body
  const c = getComputedStyle(body).color;
  return c === 'rgb(255, 255, 255)';
}

export default function HomePage() {
  /* ---------- Dark mode detection (ổn định từ lần render đầu) ---------- */
  const [isDark, setIsDark] = useState(() => readDarkNow());

  useEffect(() => {
    const apply = () => setIsDark(readDarkNow());

    // 1) Theo dõi thay đổi attribute trên <html> và <body>
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-bs-theme', 'data-theme', 'style'],
    });
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ['class', 'data-bs-theme', 'data-theme', 'style'],
    });

    // 2) System theme change
    const mm = window.matchMedia?.('(prefers-color-scheme: dark)');
    mm && mm.addEventListener('change', apply);

    // 3) localStorage change (nếu toggle lưu theme vào LS)
    const onStorage = (e) => {
      if (['theme', 'color-theme', 'data-bs-theme'].includes(e.key)) apply();
    };
    window.addEventListener('storage', onStorage);

    // 4) Chạy 1 lần sau khi mount để chắc chắn đồng bộ
    apply();

    return () => {
      obs.disconnect();
      mm && mm.removeEventListener('change', apply);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  /* ---------- Theme tokens theo mode ---------- */
   const theme = useMemo(() => {
    return {
      accent: '#bfa16e', // 🔹 Đổi từ màu xanh sang #bfa16e
      emphasis: isDark ? '#ffffff' : '#0b3a84',
      muted: isDark ? 'rgba(255,255,255,.82)' : '#5c6f8b',
      cardBg: isDark ? '#17181a' : '#ffffff',
      cardSoftBg: isDark ? '#0f172a' : '#f8fafc',
      sectionBg: isDark ? '#0b1220' : '#f5fbff',
      border: isDark ? 'rgba(255,255,255,.14)' : 'rgba(0,0,0,.08)',
      borderBlueish: isDark ? 'rgba(255,255,255,.22)' : 'rgba(13,110,253,.12)',
      divider: isDark ? 'rgba(255,255,255,.18)' : '#eaf3ff',
      shadowSm: isDark ? '0 4px 16px rgba(0,0,0,.4)' : '0 4px 16px rgba(0,0,0,.08)',
      shadowMd: isDark ? '0 10px 28px rgba(0,0,0,.5)' : '0 8px 22px rgba(0,0,0,.08)',
      headlineGold: '#D4AF37',
      marqueeFadeLeft: isDark
        ? 'linear-gradient(to right, #121212, rgba(18,18,18,0))'
        : 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
      marqueeFadeRight: isDark
        ? 'linear-gradient(to left, #121212, rgba(18,18,18,0))'
        : 'linear-gradient(to left, #fff, rgba(255,255,255,0))',
    };
  }, [isDark]);

  /* ================= Components ================= */
  function ServiceCard({ icon, title, desc }) {
    const [hovered, setHovered] = useState(false);
    const borderColor = hovered ? theme.accent : 'rgba(13,110,253,.15)';
    const cornerColor = hovered ? theme.accent : 'rgba(13,110,253,.08)';

    return (
      <div
        className="h-100 position-relative rounded-3 p-4 text-center"
        style={{
          backgroundColor: theme.cardBg,
          border: `2px solid ${borderColor}`,
          cursor: 'pointer',
          boxShadow: hovered ? '0 6px 18px rgba(0, 166, 214, 0.25)' : theme.shadowSm,
          transition: 'border-color .25s ease, box-shadow .25s ease, transform .25s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="display-5 mb-3" style={{ fontSize: '2.5rem', transition: 'transform .25s ease', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}>
          {icon}
        </div>
        <h5 className="fw-bold mb-2" style={{ color: theme.emphasis }}>{title}</h5>
        <p className="mb-0" style={{ color: theme.muted }}>{desc}</p>

        <div
          className="position-absolute"
          style={{
            width: 28, height: 28, right: -2, bottom: -2,
            background: `linear-gradient(135deg, transparent 50%, ${cornerColor} 50%)`,
            borderBottomRightRadius: 10,
            transition: 'background .25s ease',
          }}
        />
      </div>
    );
  }

  function PartnersMarquee() {
    const logos = [
      { name: 'UNDER ARMOUR', src: underarmour, height: 70 },
      { name: 'XEBEC', src: xebec, height: 70 },
      { name: 'ENEOS', src: eneos, height: 64 },
      { name: 'IDEMITSU', src: idemitsu, height: 64 },
      { name: 'ASICS', src: asics, height: 70 },
      { name: 'SAMSUNG', src: samsung, height: 64 },
      { name: 'PORT AUTHORITY', src: portauthority, height: 46 },
    ];
    const items = [...logos, ...logos];

    return (
      <section className="py-5">
        <style>{`
          @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .partner-viewport { overflow: hidden; position: relative; }
          .partner-track { display: flex; gap: 6rem; width: 200%; animation: marqueeLeft 22s linear infinite; }
          .partner-item { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; }
          .partner-logo { filter: grayscale(100%) opacity(.85); transition: filter .25s ease, transform .25s ease; transform: translateZ(0); }
          .partner-item:hover .partner-logo { filter: grayscale(0) opacity(1); transform: scale(1.06); cursor: pointer; }
          .partner-fade:before, .partner-fade:after { content: ""; position: absolute; top:0; bottom:0; width:80px; z-index:2; }
        `}</style>

        <div className="container">
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center mb-2">
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
              <span className="mx-3 fw-semibold" style={{ color: theme.accent }}>Đối tác</span>
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
            </div>
            <h2 className="fw-bold m-0" style={{ color: theme.emphasis, textTransform: 'uppercase' }}>
              Đối tác của chúng tôi
            </h2>
          </div>

          <div className="partner-viewport partner-fade py-4" style={{ position: 'relative' }}>
            <div className="partner-track">
              {items.map((it, i) => (
                <div className="partner-item" key={`${it.name}-${i}`}>
                  <img src={it.src} alt={it.name} className="partner-logo" style={{ height: it.height, width: 'auto' }} />
                </div>
              ))}
            </div>

            <style>{`
              .partner-fade:before { left:0;  background: ${theme.marqueeFadeLeft}; }
              .partner-fade:after  { right:0; background: ${theme.marqueeFadeRight}; }
            `}</style>
          </div>

          <div style={{ height: 6, background: 'linear-gradient(90deg, rgba(0,166,214,.2), rgba(0,166,214,0))' }} />
        </div>
      </section>
    );
  }

  function FlipCard({ icon, title, shortDesc, backTitle, backDesc }) {
    const cardMinHeight = 220;
    return (
      <div className="flip-wrap h-100" style={{ perspective: '1000px' }}>
        <div
          className="flip-inner h-100"
          style={{
            position: 'relative',
            width: '100%',
            minHeight: cardMinHeight,
            transformStyle: 'preserve-3d',
            transition: 'transform 1.2s ease-in-out',
            willChange: 'transform',
            cursor: 'pointer',
          }}
        >
          {/* FRONT */}
          <div
            className="flip-face rounded-3 p-4 p-md-5 h-100"
            style={{
              position: 'absolute',
              inset: 0,
              background: theme.cardBg,
              border: `1px solid ${theme.borderBlueish}`,
              boxShadow: theme.shadowSm,
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <div style={{ fontSize: 40, lineHeight: 1 }}>{icon}</div>
            <div>
              <h4 className="mb-2 mb-md-3" style={{ color: theme.emphasis, fontWeight: 800, textTransform: 'uppercase' }}>
                {title}
              </h4>
              <div style={{ width: 80, height: 3, background: theme.divider, borderRadius: 2 }} />
              <p className="mb-0 mt-3" style={{ color: theme.muted }}>{shortDesc}</p>
            </div>
          </div>

          {/* BACK */}
          <div
            className="flip-face rounded-3 p-4 p-md-5 h-100"
            style={{
              position: 'absolute',
              inset: 0,
              background: theme.cardBg,
              border: `1px solid ${theme.borderBlueish}`,
              boxShadow: theme.shadowMd,
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <div>
              <h4 className="mb-2 mb-md-3" style={{ color: theme.emphasis, fontWeight: 800, textTransform: 'uppercase' }}>
                {backTitle}
              </h4>
              <div style={{ width: 80, height: 3, background: theme.divider, borderRadius: 2 }} />
              <p className="mb-0 mt-3" style={{ color: theme.muted }}>{backDesc}</p>
            </div>
          </div>
        </div>

        <style>{`.flip-wrap:hover .flip-inner { transform: rotateY(180deg); }`}</style>
      </div>
    );
  }

  function ValuesSection() {
    return (
      <section className="py-5" style={{ background: theme.sectionBg }}>
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <div className="d-inline-flex align-items-center mb-2">
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
              <span className="mx-3 fw-semibold" style={{ color: theme.accent }}>Giá trị</span>
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
            </div>
            <h2 className="fw-bold m-0" style={{ color: theme.emphasis, textTransform: 'uppercase' }}>
              Chúng tôi mang lại
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <FlipCard
                icon="🧪"
                title="Chất lượng & sáng tạo"
                shortDesc="Đảm bảo tiêu chuẩn chất lượng, lắng nghe yêu cầu và tối ưu hoá sản xuất."
                backTitle="Cam kết chất lượng"
                backDesc="Quy trình QC nhiều lớp; nguyên liệu đạt chuẩn; cải tiến liên tục tạo lợi thế cho khách hàng."
              />
            </div>
            <div className="col-12 col-lg-6">
              <FlipCard
                icon="🏭"
                title="Năng lực sản xuất"
                shortDesc="Đội ngũ lành nghề – đáp ứng đơn lớn, giao hàng đúng hẹn."
                backTitle="Quy mô & tốc độ"
                backDesc="Chuẩn hoá chuyền may, theo dõi số hoá tiến độ giúp tối ưu lead-time."
              />
            </div>
            <div className="col-12 col-lg-6">
              <FlipCard
                icon="🔧"
                title="Thiết bị hiện đại"
                shortDesc="Máy móc tân tiến nâng năng suất và độ chính xác."
                backTitle="Công nghệ sản xuất"
                backDesc="Thiết bị tự động/bán tự động, layout tối ưu, bảo trì định kỳ đảm bảo ổn định dài hạn."
              />
            </div>
            <div className="col-12 col-lg-6">
              <FlipCard
                icon="🤝"
                title="Khách hàng"
                shortDesc="“Làm hài lòng khách hàng” là chuẩn mực của chúng tôi."
                backTitle="Dịch vụ & đồng hành"
                backDesc="Tư vấn chất liệu, hỗ trợ thiết kế/mẫu thử, chăm sóc sau bán & chính sách linh hoạt."
              />
            </div>
          </div>

          <div className="mt-4" style={{ height: 6, background: 'linear-gradient(90deg, rgba(0,166,214,.2), rgba(0,166,214,0))' }} />
        </div>
      </section>
    );
  }

  /* ------------ Reviews Section (infinite carousel) ------------ */
  function ReviewsSection() {
    // Giữ logic cũ, không ảnh hưởng đồng bộ theme
    const getPer = () => {
      if (typeof window === 'undefined') return 1;
      const w = window.innerWidth;
      if (w >= 1200) return 3;
      if (w >= 768)  return 2;
      return 1;
    };
    const [per, setPer] = useState(getPer());
    useEffect(() => {
      const onResize = () => setPer(getPer());
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);

    const reviews = [
      { title: 'Thay đổi cuộc chơi!', text: 'Vận hành cửa hàng của tôi với sự hỗ trợ từ TS Global thật sự là chìa khoá. Giá cạnh tranh và dịch vụ tuyệt vời.', author: '– Jen R.', stars: 5 },
      { title: 'Giá tốt & đáng tin', text: 'Đã hợp tác gần 5 năm. Giá hợp lý, cung ứng ổn định – là đối tác rất đáng tin cậy.', author: '– Karina J.', stars: 5 },
      { title: 'Cảm ơn TS Global!', text: 'Yêu đội ngũ TS Global! Luôn có những deal tốt và hỗ trợ nhanh.', author: '– Karina J.', stars: 5 },
      { title: 'Giao đúng hẹn', text: 'Lần nào cũng giao đúng tiến độ, chất lượng ổn định, quy trình chuyên nghiệp.', author: '– Minh D.', stars: 5 },
      { title: 'Tư vấn tận tâm', text: 'Tư vấn chất liệu & mẫu rất kỹ. Thành phẩm vượt mong đợi.', author: '– Hạnh N.', stars: 5 },
    ];

    const pad = per;
    const extended = useMemo(() => [...reviews.slice(-pad), ...reviews, ...reviews.slice(0, pad)], [pad]);

    const [idx, setIdx] = useState(pad);
    const [anim, setAnim] = useState(true);

    useEffect(() => {
      setAnim(false);
      setIdx(per);
      const t = setTimeout(() => setAnim(true), 0);
      return () => clearTimeout(t);
    }, [per]);

    const L = reviews.length;
    const next = () => { setAnim(true); setIdx(i => i + 1); };
    const prev = () => { setAnim(true); setIdx(i => i - 1); };

    const onTransitionEnd = () => {
      if (idx >= pad + L) {
        setAnim(false); setIdx(pad); requestAnimationFrame(() => setAnim(true));
      } else if (idx <= pad - 1) {
        setAnim(false); setIdx(pad + L - 1); requestAnimationFrame(() => setAnim(true));
      }
    };

    const Star = () => (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path fill={theme.headlineGold} d="M12 17.27 18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );

    return (
      <section className="py-5">
<style>{`
  .rev-head { display:flex; flex-direction:column; align-items:center; gap:.25rem; }
  .rev-sun { width:40px; height:40px; margin-bottom:.25rem; }
  .rev-title { font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
  .rev-sub { font-size:.95rem; }

  /* Viewport PHẢI chặn tràn ngang */
  .rev-viewport {
    position: relative;
    overflow: hidden;        /* <-- quan trọng: fix thừa bên phải */
  }

  /* Track trượt */
  .rev-track {
    --gap: 1.5rem;
    display: flex;
    gap: var(--gap);
    will-change: transform;
  }

  /* Mỗi card chiếm 1/--per chiều rộng, trừ đi tổng gap để không bị lệch */
  .rev-card {
    flex: 0 0 calc((100% - (var(--gap) * (var(--per) - 1))) / var(--per));
    background: ${theme.cardSoftBg};
    border: 1px solid ${theme.border};
    border-radius: .75rem;
    box-shadow: ${theme.shadowSm};
    padding: 1.5rem;
  }

  .rev-stars { display:flex; gap:.25rem; margin-bottom:.5rem; }
  .rev-ttl { font-weight:700; margin-bottom:.5rem; color:${theme.emphasis}; }
  .rev-txt { font-style: italic; margin-bottom:.75rem; color:${theme.muted}; }
  .rev-author { font-weight:600; color:${theme.emphasis}; }

  .rev-btn {
    position:absolute; top:50%; transform:translateY(-50%);
    width:40px; height:40px; border-radius:999px;
    border:1px solid ${theme.border};
    background:${theme.cardBg};
    display:flex; align-items:center; justify-content:center;
    box-shadow:${theme.shadowMd};
    color:${theme.emphasis};
    transition: transform .2s ease;
    z-index: 2;                 /* nằm trên track */
  }
  .rev-btn:hover { transform: translateY(-50%) scale(1.05); }
  .rev-left { left:4px; }       /* bỏ số âm để tránh đẩy rộng container */
  .rev-right { right:4px; }
`}</style>


        <div className="container">
          <div className="rev-head text-center mb-4 mb-md-5">
            <svg className="rev-sun" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="24" r="8" fill="none" stroke={theme.headlineGold} strokeWidth="2"/>
              <path d="M32 4v6M32 38v6M12 24h-6M58 24h-6M18 10l-4-4M50 38l4 4M18 38l-4 4M50 10l4-4"
                stroke={theme.headlineGold} strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <h3 className="rev-title h4 mb-1" style={{ color: theme.headlineGold }}>
              FROM OUR CUSTOMERS
            </h3>
            <div className="rev-sub" style={{ color: theme.emphasis }}>from 87 Reviews</div>
          </div>

          <div className="rev-viewport">
            <div
              className="rev-track"
              style={{
                '--per': per,
                transform: `translateX(calc(-${idx} * (100% / var(--per))))`,
                transition: anim ? 'transform .45s ease' : 'none',
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {extended.map((r, i) => (
                <article className="rev-card" key={i}>
                  <div className="rev-stars">
                    {Array.from({ length: r.stars }).map((_, j) => <Star key={j} />)}
                  </div>
                  <div className="rev-ttl">{r.title}</div>
                  <div className="rev-txt">“{r.text}”</div>
                  <div className="rev-author">{r.author}</div>
                </article>
              ))}
            </div>

            <button type="button" className="rev-btn rev-left" onClick={prev} aria-label="Trước">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button type="button" className="rev-btn rev-right" onClick={next} aria-label="Tiếp">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m8.59 16.59 1.41 1.41L16 12 10 6 8.59 7.41 13.17 12z"/></svg>
            </button>
          </div>
        </div>
      </section>
    );
  }

  function FeatureCTASection() {
    const items = [
      {
        title: 'PHÍ VẬN CHUYỂN THẤP',
        desc: 'Chúng tôi gom đơn và tối ưu tuyến để có mức phí vận chuyển tốt, minh bạch cho bạn.',
        img: shipping,
      },
      {
        title: 'KHÔNG YÊU CẦU SỐ LƯỢNG TỐI THIỂU',
        desc: 'Dù bạn vừa mở cửa hàng hay đã vận hành lâu năm, chúng tôi đều sẵn sàng phục vụ.',
        img: soluong,
      },
      {
        title: 'HỖ TRỢ KHÁCH HÀNG TẬN TÂM',
        desc: 'Kinh doanh đã đủ bận, để chúng tôi hỗ trợ. Sẽ phản hồi trong 1 giờ.',
        img: support,
      },
    ];

    return (
      <section className="py-5" style={{ background: theme.cardBg }}>
        <div className="container">
          <div className="row g-4 row-cols-1 row-cols-md-3">
            {items.map((it, i) => (
              <div className="col" key={i}>
                <div
                  className="h-100 d-flex flex-column rounded-3 overflow-hidden"
                  style={{ border: `1px solid ${theme.border}`, boxShadow: theme.shadowSm, background: theme.cardBg }}
                >
                  <div className="ratio ratio-16x9">
                    <img src={it.img} alt={it.title} className="w-100 h-100" style={{ objectFit: 'cover', filter: 'saturate(0.9)' }} />
                  </div>
                  <div className="p-4 text-center">
                    <h5 className="fw-bold mb-2" style={{ color: theme.emphasis, letterSpacing: '.04em' }}>{it.title}</h5>
                    <p className="mb-3" style={{ color: theme.muted }}>{it.desc}</p>
                    <a href="/contact" className="btn btn-outline-primary" style={{ borderColor: theme.accent, color: theme.accent }}>
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ================= Render ================= */
  return (
    <>
      <HeroBanner />

      {/* Trái ảnh – Phải chữ */}
      <section className="py-5" style={{ background: theme.cardBg }}>
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="ratio ratio-4x3">
                <img src={workplace} alt="Hình minh họa" className="w-100 h-100 rounded-2" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="d-flex align-items-center mb-3">
                <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
                <span className="ms-3 fw-semibold" style={{ color: theme.accent }}>TS Global là gì?</span>
              </div>

<h2 className="mb-3" style={{ fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.25, color: theme.emphasis }}>
  CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI TS GLOBAL
</h2>

<p style={{ color: theme.muted, fontSize: '1.05rem' }}>
  Thành lập từ năm 2016, <strong>TS GLOBAL</strong> là đơn vị uy tín trong lĩnh vực sản xuất và thương mại may mặc, phục vụ cả thị trường nội địa và quốc tế.
</p>
<p style={{ color: theme.muted }}>
  Với dây chuyền hiện đại và đội ngũ tay nghề cao, chúng tôi chuyên cung cấp các sản phẩm may mặc chất lượng cao, đồng thời nhận gia công và bán sỉ (wholesale) với giá cả cạnh tranh, linh hoạt theo nhu cầu của khách hàng.
</p>
<p style={{ color: theme.muted, marginBottom: 0 }}>
  TS GLOBAL luôn cam kết mang đến <strong>chất lượng – tiến độ – sự hài lòng</strong>, trở thành đối tác tin cậy cho các thương hiệu, cửa hàng và chuỗi phân phối trong và ngoài nước.
</p>

            </div>
          </div>
        </div>
      </section>

      {/* Dịch vụ */}
      <section className="py-5" style={{ background: theme.sectionBg }}>
        <div className="container">
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center mb-2">
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
              <span className="mx-3 fw-semibold" style={{ color: theme.accent }}>Chúng tôi làm gì?</span>
              <div style={{ width: 56, height: 3, borderRadius: 2, background: theme.accent }} />
            </div>
            <h2 className="fw-bold m-0" style={{ color: theme.emphasis, textTransform: 'uppercase' }}>
              Dịch vụ của TS Global
            </h2>
          </div>

          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col"><ServiceCard icon="🧵" title="Kinh doanh hàng may mặc" desc="Các sản phẩm may mặc xuất khẩu và gia công nội địa" /></div>
            <div className="col"><ServiceCard icon="⚙️" title="Sản phẩm công nghệ cao" desc="Đồ chống nóng, áo quạt, áo điện" /></div>
            <div className="col"><ServiceCard icon="🩺" title="Hàng Y tế" desc="Hàng phòng dịch, khẩu trang và phụ kiện y tế" /></div>
            <div className="col"><ServiceCard icon="🧶" title="Vải không dệt" desc="Năng lực sản xuất lớn, ổn định" /></div>
          </div>
        </div>
      </section>

      {/* Đối tác */}
      <PartnersMarquee />

      {/* Giá trị */}
      <ValuesSection />

      {/* Đánh giá khách hàng */}
      <ReviewsSection />

      {/* CTA cuối trang */}
      <FeatureCTASection />
    </>
  );
}
