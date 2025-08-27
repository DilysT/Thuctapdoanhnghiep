// src/pages/AboutPage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// === 5 công đoạn (ảnh) ===
import imgMayMau from '../assets/workplace/may_mau.jpg';
import imgCat from '../assets/workplace/cat.jpg';
import imgChuyenMay from '../assets/workplace/chuyen_may.jpg';
import imgUi from '../assets/workplace/ironing.jpg';
import imgHoanThanh from '../assets/workplace/hoan_thanh.jpg';

/* Đọc trạng thái dark ngay từ lần render đầu */
function readDarkNow() {
  if (typeof window === 'undefined') return false;
  const doc = document.documentElement;
  const body = document.body;
  const attr =
    doc.getAttribute('data-bs-theme') ||
    body.getAttribute('data-bs-theme') ||
    doc.getAttribute('data-theme') ||
    body.getAttribute('data-theme') ||
    (doc.classList.contains('dark') ||
    body.classList.contains('dark') ||
    body.classList.contains('bg-dark')
      ? 'dark'
      : null);
  if (attr) return attr === 'dark';

  try {
    const ls =
      localStorage.getItem('theme') ||
      localStorage.getItem('color-theme') ||
      localStorage.getItem('data-bs-theme');
    if (ls) return ls === 'dark';
  } catch (_) {}
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return true;

  const c = getComputedStyle(body).color;
  return c === 'rgb(255, 255, 255)';
}

export default function AboutPage() {
  const [isDark, setIsDark] = useState(() => readDarkNow());

  useEffect(() => {
    const apply = () => setIsDark(readDarkNow());
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-bs-theme', 'data-theme', 'style'],
    });
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ['class', 'data-bs-theme', 'data-theme', 'style'],
    });
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    mq && mq.addEventListener('change', apply);
    const onStorage = (e) => {
      if (['theme', 'color-theme', 'data-bs-theme'].includes(e.key)) apply();
    };
    window.addEventListener('storage', onStorage);
    apply();
    return () => {
      obs.disconnect();
      mq && mq.removeEventListener('change', apply);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Tokens màu
  const colors = useMemo(
    () => ({
      text: isDark ? '#e9eef6' : '#212529',
      muted: isDark ? 'rgba(255,255,255,.80)' : '#5b6472',
      title: isDark ? '#ffffff' : '#0f172a',
      cardBg: isDark ? '#0f1113' : '#ffffff',
      glass: isDark ? 'rgba(255,255,255,.04)' : 'rgba(191,161,110,.06)',
      border: isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
      shadow: isDark ? '0 12px 30px rgba(0,0,0,.55)' : '0 12px 30px rgba(0,0,0,.08)',
      hr: isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
      accent: '#bfa16e',
      accentDark: '#a88b57',
      softAccent: 'rgba(191,161,110,.15)',
      softBg: isDark ? 'rgba(255,255,255,.03)' : '#f8fafc',
    }),
    [isDark]
  );

  const cardStyle = {
    backgroundColor: colors.cardBg,
    border: `1px solid ${colors.border}`,
    borderRadius: 18,
    boxShadow: colors.shadow,
    padding: 28,
    color: colors.text,
  };
  const subtleText = { color: colors.muted };

  // Dữ liệu 5 công đoạn
  const steps = [
    {
      id: 1,
      title: 'MAY MẪU & DUYỆT KỸ THUẬT',
      img: imgMayMau,
      bullets: [
        'Phân tích rập, thông số size, tiêu chuẩn may.',
        'May mẫu/fit sample – chỉnh sửa & duyệt PP.',
        'Lập TDS: quy cách may, thông số, điểm QC.',
      ],
    },
    {
      id: 2,
      title: 'TRẢI VẢI & CẮT RẬP',
      img: imgCat,
      bullets: [
        'Trải vải có kiểm soát độ giãn – nghỉ vải theo chất liệu.',
        'Giác sơ đồ tối ưu định mức, đánh dấu canh sợi/khuyết tật.',
        'Cắt – bó size – đánh số lớp để truy vết.',
      ],
    },
    {
      id: 3,
      title: 'CHUYỀN MAY',
      img: imgChuyenMay,
      bullets: [
        'Bố trí line hợp lý theo công đoạn, cân bằng chuyền.',
        'Inline QC tại điểm trọng yếu – giảm lỗi tái diễn.',
        'Theo dõi sản lượng theo giờ – giảm tắc công đoạn.',
      ],
    },
    {
      id: 4,
      title: 'ỦI – HOÀN THIỆN',
      img: imgUi,
      bullets: [
        'Ủi định hình theo chất liệu – chống bóng cháy.',
        'Dán nhãn, gắn tag, vệ sinh chỉ thừa.',
        'Kiểm tra ngoại quan 100% trước đóng gói.',
      ],
    },
    {
      id: 5,
      title: 'KIỂM – ĐÓNG GÓI – BÀN GIAO',
      img: imgHoanThanh,
      bullets: [
        'Final QC theo AQL – test ngẫu nhiên theo lot.',
        'Đóng gói theo chuẩn xuất hàng/khách yêu cầu.',
        'Bàn giao kèm hồ sơ truy xuất & biên bản QC.',
      ],
    },
  ];

  // Component thẻ công đoạn
  const StepCard = ({ step, reversed = false }) => (
    <div className="step-card row g-4 align-items-center mb-4 position-relative">
      {/* line nối timeline */}
      <div
        className="d-none d-lg-block"
        style={{
          position: 'absolute',
          top: 18,
          left: reversed ? 'auto' : -26,
          right: reversed ? -26 : 'auto',
          width: 22,
          height: 2,
          background: colors.border,
        }}
      />
      {/* Số thứ tự */}
      <div
        className="step-badge"
        style={{
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentDark})`,
          color: '#fff',
          width: 44,
          height: 44,
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          position: 'absolute',
          left: reversed ? 'auto' : -48,
          right: reversed ? -48 : 'auto',
          top: -6,
          boxShadow: '0 10px 18px rgba(0,0,0,.18)',
        }}
      >
        {String(step.id).padStart(2, '0')}
      </div>

      {/* Ảnh */}
      <div className={`col-lg-6 ${reversed ? 'order-lg-2' : ''}`}>
        <div
          className="ratio ratio-16x9 rounded-4 overflow-hidden shine"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: colors.shadow,
          }}
        >
          <img src={step.img} alt={step.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {/* Nội dung */}
      <div className={`col-lg-6 ${reversed ? 'order-lg-1' : ''}`}>
        <div
          className="h-100 rounded-4 p-3 p-md-4"
          style={{
            background: colors.glass,
            border: `1px solid ${colors.border}`,
            backdropFilter: 'blur(6px)',
          }}
        >
          <h5 className="fw-bold mb-2" style={{ color: colors.title }}>
            {step.title}
          </h5>
          <ul className="mb-0" style={{ color: colors.text }}>
            {step.bullets.map((b, i) => (
              <li key={i} className="mb-1">{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-4">
      {/* local CSS for effects */}
      <style>{`
        .hero-cover{ position:relative; overflow:hidden; border-radius:18px; }
        .hero-cover .bg{
          position:absolute; inset:0; background-position:center; background-size:cover; filter:brightness(.6);
          transform: scale(1.06);
        }
        .hero-cover .overlay{
          position:absolute; inset:0;
          background: radial-gradient(1200px 400px at 20% -10%, rgba(191,161,110,.35), transparent 60%),
                      linear-gradient(180deg, rgba(0,0,0,.25), transparent 40%, rgba(0,0,0,.35));
        }
        .hero-content{ position:relative; z-index:2; }
        .shine::after{
          content:''; position:absolute; inset:-100%;
          background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,.25), transparent 60%);
          transform: translateX(-60%);
          animation: shine 4s infinite;
        }
        @keyframes shine{ 0%{transform:translateX(-60%);} 100%{transform:translateX(60%);} }
        .kpi-card{ transition: transform .2s ease, box-shadow .2s ease; }
        .kpi-card:hover{ transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0,0,0,.12); }
        .step-card{ transition: transform .2s ease; }
        .step-card:hover{ transform: translateY(-2px); }
        .floating-cta{ position:sticky; bottom:20px; z-index:10 }
      `}</style>

      <div className="row g-4">
        {/* CONTENT */}
        <div className="col-lg-8">
          <div style={cardStyle}>
            {/* Breadcrumb */}
            <div className="mb-3 small" style={subtleText}>
              <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                <i className="fa fa-home me-2" />Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <span className="fw-bold">Giới thiệu</span>
            </div>

            {/* Hero banner */}
            <div className="hero-cover mb-3" style={{ border: `1px solid ${colors.border}`, boxShadow: colors.shadow }}>
              <div
                className="bg"
                style={{ backgroundImage: `url(${imgChuyenMay})` }}
              />
              <div className="overlay" />
              <div className="hero-content p-4 p-md-5">
                <button className="btn btn-sm" style={{ background: colors.accent, color: '#fff', fontWeight: 700 }}>
                  Giới thiệu
                </button>
                <h1 className="fw-black mt-3 mb-2" style={{ color: '#fff', lineHeight: 1.2 }}>
                  TS Global – Đối tác sản xuất & thương mại đáng tin cậy
                </h1>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,.88)' }}>
                  <strong>Công ty TNHH Sản Xuất và Thương Mại TS Global</strong> chuyên gia công – sản xuất – phân phối,
                  lấy <em>chất lượng</em> và <em>tiến độ</em> làm trọng tâm, đồng hành dài hạn cùng đối tác.
                </p>
              </div>
            </div>

            {/* KPI strip */}
            <div className="row g-3 mb-4">
              {[
                {label:'Công nhân', value:'80+'},
                {label:'Chuyền may', value:'10'},
                {label:'Công suất/tháng', value:'5,000+ sp'},
              ].map((k, i)=>(
                <div className="col-md-4" key={i}>
                  <div
                    className="kpi-card rounded-4 p-3 h-100"
                    style={{
                      background: colors.glass,
                      border: `1px solid ${colors.border}`,
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <div className="small" style={{color: colors.muted}}>{k.label}</div>
                    <div className="fs-4 fw-bold" style={{color: colors.title}}>{k.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline title */}
            <div className="d-flex align-items-center gap-2 mb-2">
              <div style={{ width: 56, height: 5, background: colors.accent, borderRadius: 5 }} />
              <span className="fw-semibold" style={{ color: colors.accent }}>Quy trình tiêu chuẩn (5 công đoạn)</span>
            </div>

            {/* Timeline rail */}
            <div className="position-relative mb-4" style={{ height: 12 }}>
              <div
                style={{
                  position: 'absolute', left: 0, right: 0, top: 5, height: 2, background: colors.border,
                }}
              />
              <div className="d-flex justify-content-between" style={{ position: 'relative' }}>
                {[1,2,3,4,5].map(n => (
                  <div
                    key={n}
                    title={`Bước ${n}`}
                    style={{
                      width: 16, height: 16, borderRadius: 999,
                      background: colors.accent, position: 'relative', top: -2,
                      boxShadow: '0 6px 16px rgba(0,0,0,.18)', cursor:'default'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 5 công đoạn */}
            {steps.map((s, idx) => (
              <StepCard key={s.id} step={s} reversed={idx % 2 === 1} />
            ))}

            {/* Cam kết */}
            <div
              className="rounded-4 p-3 p-md-4 mt-3"
              style={{
                border: `1px dashed ${colors.accent}`,
                background: colors.softAccent,
              }}
            >
              <strong style={{ color: colors.title }}>Cam kết:</strong>{' '}
              <span style={{ color: colors.text }}>
                sản xuất theo tiêu chuẩn, minh bạch quy trình – đảm bảo tiến độ & chất lượng đến tay khách hàng.
              </span>
            </div>

            <hr className="my-4" style={{ borderColor: colors.hr }} />

            {/* Liên hệ */}
            <h5 className="mt-2" style={{ color: colors.title }}>Liên hệ</h5>
            <p className="mb-2" style={{ color: colors.text }}>
              Vui lòng liên hệ với chúng tôi để được tư vấn và hợp tác:
            </p>
            <ul className="list-unstyled mb-0" style={{ color: colors.text }}>
              <li>
                <strong>Địa chỉ:</strong> 98/2C Đường Tuyến 2, Ấp 4, Xã Xuân Thới Thượng, Huyện Hóc Môn, TP. Hồ Chí Minh
              </li>
              <li><strong>Hotline:</strong> (+84) 938 078 488</li>
              <li><strong>Email:</strong> info@tsglobal.vn</li>
            </ul>

            {/* CTA dính cuối trang */}
            <div className="floating-cta mt-4">
              <Link
                to="/contact"
                className="btn btn-lg w-100"
                style={{ background: colors.accent, color: '#fff', fontWeight: 700 }}
              >
                Liên hệ nhận báo giá & tư vấn
              </Link>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
