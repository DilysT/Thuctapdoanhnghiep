// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

// Ảnh trong assets (giữ như cũ)
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import aonam from '../assets/banner1/aonam.webp'
import aonam1 from '../assets/banner1/aonam1.jpg'
import aonam2 from '../assets/banner1/aonam2.jpg'

// ===== Thông tin công ty (chỉnh ở đây) =====
const COMPANY = {
  name: 'CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI TS GLOBAL',
  shortName: 'TS GLOBAL',
  address: '98/2C Đường Tuyến 2, Ấp 4, X. Xuân Thới Thượng, H. Hóc Môn, TP.HCM',
  taxCode: 'MST: 0314008306',
  email: 'info@tsglobal.vn',        // TODO: cập nhật email chính thức
  hotline: '(+84) 938 078 488',          // TODO: cập nhật hotline
  workingHours: 'T2 – T7 (08:30 – 18:00)',
  domain: 'tsglobal.vn',
}

export default function Footer() {
  // ảnh tin/album (giữ nguyên để làm gallery)
  const newsThumbs = [
    { src: hero4, to: '/bai-viet/victoria-secret-2024', alt: 'Victoria’s Secret 2024' },
    { src: hero2, to: '/bai-viet/ao-nam-thu-dong', alt: 'Áo nam Thu-Đông' },
    { src: hero3, to: '/bai-viet/loewe-xuan-he-2025', alt: 'Loewe Xuân-Hè 2025' },
    { src: hero1, to: '/', alt: 'Trang chủ' },
    { src: aonam1, to: '/bai-viet/ao-nam-thu-dong', alt: 'Áo nam Thu-Đông' },
    { src: aonam, to: '/bai-viet/loewe-xuan-he-2025', alt: 'Loewe Xuân-Hè 2025' },
  ]

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Giới thiệu TS GLOBAL + Wholesale */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">{COMPANY.shortName}</h5>
            <p className="small mb-1">
              {COMPANY.name}. Chuyên <strong>gia công – OEM/ODM –</strong> may mặc cho thị trường trong nước và xuất khẩu.
            </p>
            <p className="small mb-0">
              Dây chuyền hiện đại, quy trình QC nghiêm ngặt, giá sỉ linh hoạt theo nhu cầu <em>(MOQ thỏa thuận)</em>, cam kết <strong>chất lượng – tiến độ – uy tín</strong>.
            </p>
          </div>

          {/* Tin/Album (giữ layout cũ) */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Hình ảnh xưởng & tin mới</h5>
            <div className="footer-gallery d-flex flex-wrap gap-2">
              {newsThumbs.map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  className="d-inline-block position-relative"
                  title={item.alt}
                  style={{ width: 72, height: 72, overflow: 'hidden', borderRadius: 6 }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="footer-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform .25s ease, opacity .25s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Thông tin liên hệ TS GLOBAL */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Thông tin</h5>
            <p className="small mb-1"><strong>Địa chỉ:</strong> {COMPANY.address}</p>
            <p className="small mb-1"><strong>{COMPANY.taxCode}</strong></p>
            <p className="small mb-1"><strong>Email:</strong> {COMPANY.email}</p>
            <p className="small mb-1"><strong>Hotline:</strong> {COMPANY.hotline}</p>
            <p className="small"><strong>Giờ làm việc:</strong> {COMPANY.workingHours}</p>
          </div>

          {/* Chính sách (link nội bộ website) */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Chính sách</h5>
            <ul className="list-unstyled small">
              <li><Link to="/chinh-sach-bao-mat" className="footer-link">Chính sách bảo mật</Link></li>
              <li><Link to="/chinh-sach-doi-tra" className="footer-link">Chính sách đổi trả</Link></li>
              <li><Link to="/chinh-sach-mua-hang" className="footer-link">Chính sách mua hàng</Link></li>
              <li><Link to="/chinh-sach-van-chuyen" className="footer-link">Chính sách vận chuyển</Link></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} {COMPANY.shortName} • {COMPANY.domain}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
