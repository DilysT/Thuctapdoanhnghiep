import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Thêm ảnh minh họa công ty
import kid from '../assets/postdetail/kid.jpg';
import croc from '../assets/postdetail/croc.jpg';

export default function AboutPage() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const c = getComputedStyle(document.body).color;
      return c === 'rgb(255, 255, 255)';
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const c = getComputedStyle(document.body).color;
      setIsDark(c === 'rgb(255, 255, 255)');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  const cardStyle = useMemo(() => {
    return {
      backgroundColor: isDark ? '#17181a' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)'}`,
      borderRadius: 12,
      boxShadow: isDark
        ? '0 4px 16px rgba(0,0,0,.4)'
        : '0 4px 16px rgba(0,0,0,.08)',
      padding: 24,
    };
  }, [isDark]);

  const subtleText = { opacity: 0.85 };

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
            <h1 className="fw-bold mb-3">
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
              src={kid}
              alt="TS Global sản xuất"
              className="img-fluid rounded shadow-sm my-3"
            />

            <h5 className="mt-4">Sứ mệnh</h5>
            <p>
              TS Global cam kết mang đến <em>giải pháp sản xuất và thương mại tối ưu</em>, đặt lợi ích
              và sự hài lòng của khách hàng làm trọng tâm, hướng tới phát triển bền vững và lâu dài.
            </p>

            <h5 className="mt-4">Danh mục &amp; chất lượng</h5>
            <p>
              Chúng tôi chú trọng vào chất lượng sản phẩm, áp dụng quy trình kiểm soát chặt chẽ
              và liên tục cải tiến để đáp ứng tiêu chuẩn ngày càng cao của thị trường.
            </p>
            <ul className="mb-0">
              <li>Danh mục sản phẩm phong phú, đáp ứng nhiều phân khúc.</li>
              <li>Kiểm soát chất lượng nghiêm ngặt trước khi xuất xưởng.</li>
              <li>Luôn cập nhật xu hướng và công nghệ mới trong sản xuất.</li>
            </ul>

            {/* Ảnh minh họa 2 */}
            <img
              src={croc}
              alt="TS Global thương mại"
              className="img-fluid rounded shadow-sm my-3"
            />

            <hr
              className="my-4"
              style={{
                borderColor: isDark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
              }}
            />

            <h5 className="mt-2">Giá trị cốt lõi</h5>
            <ul className="mb-0">
              <li><strong>Uy tín:</strong> lấy chữ tín làm nền tảng cho mọi hợp tác.</li>
              <li><strong>Chất lượng:</strong> duy trì kiểm soát chất lượng nghiêm ngặt.</li>
              <li><strong>Đồng hành:</strong> lắng nghe và hỗ trợ khách hàng lâu dài.</li>
            </ul>

            <h5 className="mt-4">Tầm nhìn &amp; phát triển</h5>
            <p>
              Trở thành doanh nghiệp uy tín trong lĩnh vực sản xuất và thương mại tại Việt Nam,
              mở rộng hợp tác quốc tế, xây dựng thương hiệu TS Global bền vững và vươn xa.
            </p>

            <h5 className="mt-4">Liên hệ</h5>
            <p className="mb-2">
              Vui lòng liên hệ với chúng tôi để được hỗ trợ và hợp tác:
            </p>
            <ul className="list-unstyled mb-0">
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

        {/* SIDEBAR (không nằm trong khung) */}
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
