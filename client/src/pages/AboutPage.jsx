import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import workplace3 from '../assets/workplace/workplace4.jpg';
import workplace2 from '../assets/workplace/workplace2.jpg';
import workplace1 from '../assets/workplace/workplace1.jpg';
import workplace from '../assets/workplace/workplace.jpg'; // <-- ẢNH BẠN MỚI CUNG CẤP

/* Đọc trạng thái dark một cách ổn định ngay từ lần render đầu */
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
      muted: isDark ? 'rgba(255,255,255,.86)' : '#495057',
      title: isDark ? '#ffffff' : '#0f172a',
      cardBg: isDark ? '#17181a' : '#ffffff',
      border: isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
      shadow: isDark ? '0 4px 16px rgba(0,0,0,.4)' : '0 4px 16px rgba(0,0,0,.08)',
      hr: isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
      accent: '#bfa16e',
      softAccent: 'rgba(191,161,110,.18)',
    }),
    [isDark]
  );

  const cardStyle = {
    backgroundColor: colors.cardBg,
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    boxShadow: colors.shadow,
    padding: 24,
    color: colors.text,
  };

  const subtleText = { color: colors.muted };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* CONTENT (được bọc khung) */}
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

            {/* Badge + Title */}
            <button className="btn btn-sm btn-warning text-white mb-2">Giới thiệu</button>
            <h1 className="fw-bold mb-3" style={{ color: colors.title }}>
              TS Global – Đối tác sản xuất và thương mại đáng tin cậy
            </h1>

            {/* Nội dung */}
            <p style={subtleText}>
              <strong>Công ty TNHH Sản Xuất và Thương Mại TS Global</strong> hoạt động trong lĩnh vực
              sản xuất và phân phối, cung cấp các sản phẩm và dịch vụ chất lượng cao, đáp ứng nhu cầu
              đa dạng của khách hàng trong và ngoài nước.
            </p>

            {/* Ảnh minh họa 1 */}
            <img
              src={workplace1}
              alt="TS Global sản xuất"
              className="img-fluid rounded shadow-sm my-3"
            />

            <h5 className="mt-4" style={{ color: colors.title }}>Sứ mệnh</h5>
            <p style={{ color: colors.text }}>
              TS Global cam kết mang đến <em>giải pháp sản xuất và thương mại tối ưu</em>, đặt lợi ích
              và sự hài lòng của khách hàng làm trọng tâm, hướng tới phát triển bền vững và lâu dài.
            </p>

            <h5 className="mt-4" style={{ color: colors.title }}>Danh mục &amp; chất lượng</h5>
            <p style={{ color: colors.text }}>
              Chúng tôi chú trọng vào chất lượng sản phẩm, áp dụng quy trình kiểm soát chặt chẽ
              và liên tục cải tiến để đáp ứng tiêu chuẩn ngày càng cao của thị trường.
            </p>
            <ul className="mb-0" style={{ color: colors.text }}>
              <li>Danh mục sản phẩm phong phú, đáp ứng nhiều phân khúc.</li>
              <li>Kiểm soát chất lượng nghiêm ngặt trước khi xuất xưởng.</li>
              <li>Luôn cập nhật xu hướng và công nghệ mới trong sản xuất.</li>
            </ul>

            {/* Ảnh minh họa 2 */}
            <img
              src={workplace3}
              alt="TS Global thương mại"
              className="img-fluid rounded shadow-sm my-3"
            />

            <hr className="my-4" style={{ borderColor: colors.hr }} />

            <h5 className="mt-2" style={{ color: colors.title }}>Giá trị cốt lõi</h5>
            <ul className="mb-0" style={{ color: colors.text }}>
              <li><strong>Uy tín:</strong> lấy chữ tín làm nền tảng cho mọi hợp tác.</li>
              <li><strong>Chất lượng:</strong> duy trì kiểm soát chất lượng nghiêm ngặt.</li>
              <li><strong>Đồng hành:</strong> lắng nghe và hỗ trợ khách hàng lâu dài.</li>
            </ul>

            <h5 className="mt-4" style={{ color: colors.title }}>Tầm nhìn &amp; phát triển</h5>
            <p style={{ color: colors.text }}>
              Trở thành doanh nghiệp uy tín trong lĩnh vực sản xuất và thương mại tại Việt Nam,
              mở rộng hợp tác quốc tế, xây dựng thương hiệu TS Global bền vững và vươn xa.
            </p>

            {/* Ảnh minh họa 13 */}
            <img
              src={workplace2}
              alt="TS Global sản xuất"
              className="img-fluid rounded shadow-sm my-3"
            />

            {/* ====== PHẦN MỚI: XƯỞNG TRẢI & CẮT VẢI ====== */}
            <div className="mt-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div style={{ width: 42, height: 3, background: colors.accent, borderRadius: 2 }} />
                <span className="fw-semibold" style={{ color: colors.accent }}>Năng lực xưởng</span>
              </div>
              <h4 className="fw-bold" style={{ color: colors.title }}>Xưởng trải &amp; cắt vải</h4>
              <p style={{ color: colors.text }}>
                Ảnh dưới là khu vực <strong>trải vải và cắt rập</strong> của chúng tôi – nơi phôi liệu
                được chuẩn bị trước khi chuyển qua các chuyền may. Bàn trải dài, bề mặt phẳng giúp hạn
                chế sai số, đảm bảo biên vải ổn định và tối ưu tiêu hao vải theo sơ đồ giác.
              </p>

              <div className="row g-3 align-items-center">
                <div className="col-md-6">
                  <div className="ratio ratio-16x9">
                    <img
                      src={workplace}
                      alt="Khu trải & cắt vải"
                      className="w-100 h-100 rounded shadow-sm"
                      style={{ objectFit: 'cover', border: `1px solid ${colors.border}` }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <ul style={{ color: colors.text, marginBottom: 0 }}>
                    <li>Quy trình trải vải có kiểm soát độ giãn, nghỉ vải theo chất liệu.</li>
                    <li>Giác sơ đồ tối ưu định mức, đánh dấu canh sợi &amp; khuyết tật.</li>
                    <li>Cắt dao thẳng/dao vòng, bó size và <em>đánh số lớp</em> để truy vết.</li>
                    <li>QC hai bước: sau cắt &amp; trước khi giao chuyền may.</li>
                    <li>Vệ sinh cuối ca, phân luồng lối đi – hạn chế lẫn chéo phôi liệu.</li>
                  </ul>
                </div>
              </div>

              {/* Quy trình & 5S */}
              <div className="row g-3 mt-3">
                <div className="col-md-6">
                  <div
                    className="h-100 rounded-3 p-3"
                    style={{ border: `1px solid ${colors.border}`, background: isDark ? 'rgba(255,255,255,.03)' : '#f9fafb' }}
                  >
                    <h6 className="fw-bold mb-2" style={{ color: colors.title }}>Quy trình tiêu chuẩn</h6>
                    <ol className="mb-0" style={{ color: colors.text }}>
                      <li>Tiếp nhận &amp; kiểm vải đầu vào (shrinkage, độ bền màu).</li>
                      <li>Trải vải – nghỉ vải – giác sơ đồ – ghim biên.</li>
                      <li>Cắt – bó lô – gắn tem size/lot – đóng gói phôi.</li>
                      <li>Chuyển chuyền may kèm hồ sơ kỹ thuật &amp; tiêu chuẩn kiểm.</li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="h-100 rounded-3 p-3"
                    style={{ border: `1px solid ${colors.border}`, background: isDark ? 'rgba(255,255,255,.03)' : '#f9fafb' }}
                  >
                    <h6 className="fw-bold mb-2" style={{ color: colors.title }}>An toàn &amp; 5S</h6>
                    <ul className="mb-0" style={{ color: colors.text }}>
                      <li>Bố trí điện/dao cắt an toàn, lối thoát hiểm rõ ràng.</li>
                      <li>Dụng cụ bảo hộ &amp; huấn luyện thao tác định kỳ.</li>
                      <li>5S tại khu cắt: sắp xếp – sạch – chuẩn – sẵn sàng.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cam kết */}
              <div
                className="rounded-3 p-3 mt-3"
                style={{
                  border: `1px dashed ${colors.accent}`,
                  background: colors.softAccent,
                }}
              >
                <strong style={{ color: colors.title }}>Cam kết:</strong>{' '}
                <span style={{ color: colors.text }}>
                  kiểm soát sai số chi tiết theo rập, truy vết theo lô/lớp, bàn giao phôi đồng bộ – sẵn sàng vào chuyền.
                </span>
              </div>
            </div>
            {/* ====== HẾT PHẦN MỚI ====== */}

            <h5 className="mt-4" style={{ color: colors.title }}>Liên hệ</h5>
            <p className="mb-2" style={{ color: colors.text }}>
              Vui lòng liên hệ với chúng tôi để được hỗ trợ và hợp tác:
            </p>
            <ul className="list-unstyled mb-0" style={{ color: colors.text }}>
              <li>
                <strong>Địa chỉ:</strong> 98/2C Đường Tuyến 2, Ấp 4, Xã Xuân Thới Thượng, Huyện Hóc Môn, TP. Hồ Chí Minh
              </li>
              <li>
                <strong>Hotline:</strong> (+84) 938 078 488
              </li>
              <li>
                <strong>Email:</strong> info@tsglobal.vn
              </li>
            </ul>
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
