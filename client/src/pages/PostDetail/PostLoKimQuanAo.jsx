import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/lokim.jpg';
import hero4 from '../../assets/postdetail/lokim1.jpg';

export default function PostLoKimQuanAo() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Khắc phục lỗ kim quần áo</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>
          <h1 className="fw-bold mb-3">Quần áo bị lỗ kim? Đừng lo, đã có cách khắc phục!</h1>
          <p className="text-secondary">Ngày đăng: 10/02/2024</p>

          <img src={hero3} alt="Lỗ kim quần áo" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">Chọn đúng kỹ thuật vá theo chất liệu – vết gần như “vô hình”</p>

          <div className="post-detail-content">
            <h5 className="mt-4">Nguyên nhân thường gặp</h5>
            <ul>
              <li>Kim may to, mũi kim cùn; lực kéo khi mặc/giặt quá mạnh.</li>
              <li>Vải mỏng (rayon, chiffon) dễ bị “rút sợi”.</li>
              <li>Treo mắc mỏng, kẹp ghim/túi xách cà vải.</li>
            </ul>

            <h5 className="mt-4">Xử lý theo chất liệu</h5>
            <ul>
              <li><strong>Len/dệt kim:</strong> dùng kim khâu kéo sợi xung quanh về vị trí, ủi hơi nhẹ.</li>
              <li><strong>Thun mỏng:</strong> miếng dán vải mặt trong + ủi nhiệt 120–140°C, lót giấy nến.</li>
              <li><strong>Dệt thoi (cotton/linen):</strong> thêu mũi nhỏ cùng màu (invisible mending).</li>
              <li><strong>Lụa:</strong> đưa tiệm chuyên; tự xử dễ để lại vết bóng.</li>
            </ul>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Sửa lỗ kim" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">Miếng dán vải mặt trong ổn định cấu trúc, tránh rách lan</p>

            <h5 className="mt-4">Checklist 60 giây</h5>
            <ul>
              <li>Không kéo giãn mạnh vùng rách khi thao tác.</li>
              <li>Thử trên mảnh vải thừa trước khi ủi/dán.</li>
              <li>Dùng chỉ cùng màu; ủi hơi, không tì mạnh.</li>
            </ul>

            <h5 className="mt-4">Phòng tránh</h5>
            <p>Chọn kim đúng cỡ khi may; giặt túi lưới; treo mắc vai dày; tránh ghim/kẹp trực tiếp lên mặt vải.</p>

            <h5 className="mt-4">Khi nào nên mang ra tiệm?</h5>
            <p>Vải mỏng cao cấp, lỗ lớn &gt; 5mm, vị trí dễ thấy (ngực/bụng). Tiệm chuyên có kỹ thuật “invisible mending”.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>Hiểu chất liệu để chọn kỹ thuật phù hợp là chìa khoá sửa lỗ kim sạch – nhanh – khó nhận ra.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
