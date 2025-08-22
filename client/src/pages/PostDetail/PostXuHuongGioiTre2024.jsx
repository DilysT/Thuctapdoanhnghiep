import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/teen1.png';
import hero4 from '../../assets/postdetail/teen.webp';

export default function PostXuHuongGioiTre2024() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Xu hướng ăn mặc giới trẻ 2025</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>
          <h1 className="fw-bold mb-3">Xu hướng ăn mặc của giới trẻ 2024: phong cách nào đang thịnh hành?</h1>
          <p className="text-secondary">Ngày đăng: 02/06/2024</p>

          <img src={hero3} alt="Xu hướng giới trẻ 2024" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">Tối giản nâng cấp, Y2K thực dụng, thể thao đường phố</p>

          <div className="post-detail-content">
            <h5 className="mt-4">1) Tối giản “nâng cấp” (Elevated Minimal)</h5>
            <ul>
              <li>Phom sạch, vừa vặn; ưu tiên vải cotton dày, linen, rayon lạnh.</li>
              <li>Bảng màu trung tính: trắng, be, xám, navy, đen.</li>
              <li>Điểm nhấn 1–2 phụ kiện (đồng hồ, túi nhỏ).</li>
            </ul>

            <h5 className="mt-4">2) Y2K phiên bản thực dụng</h5>
            <p>Low-rise mềm, crop vừa phải, sneaker retro. Tập trung tính ứng dụng: đi học/đi làm vẫn gọn gàng.</p>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Phong cách Y2K" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">Giữ tinh thần vui nhộn nhưng cắt gọt để dễ mặc mỗi ngày</p>

            <h5 className="mt-4">3) Thể thao đường phố (Street Athleisure)</h5>
            <ul>
              <li>Áo jersey, quần dù, áo khoác gió, mũ lưỡi trai.</li>
              <li>Màu nền + 1 màu nhấn (đỏ rượu, xanh lá, vàng mù tạt).</li>
              <li>Giày: retro runner, court, chunky vừa phải.</li>
            </ul>

            <h5 className="mt-4">4) Công thức mix nhanh 3 bước</h5>
            <ol>
              <li>Chọn item “chủ đạo” (áo khoác/giày/túi).</li>
              <li>Giữ phần còn lại trung tính, cân bằng phom ôm–rộng.</li>
              <li>Thêm 1 phụ kiện kim loại nhỏ để hoàn thiện.</li>
            </ol>

            <h5 className="mt-4">5) Xây tủ “core” tiết kiệm</h5>
            <ul>
              <li>2 quần (denim xanh đậm, chinos be), 3 áo (tee trắng/đen, shirt xanh nhạt).</li>
              <li>1 outer (denim/áo khoác mỏng), 2 đôi giày (trắng + đen/navy).</li>
              <li>1 túi đeo chéo nhỏ + đồng hồ tối giản.</li>
            </ul>

            <h5 className="mt-4">FAQ nhanh</h5>
            <p><strong>Hỏi:</strong> Mặc Y2K mà không “quá tay”? <br/> <strong>Đáp:</strong> Giữ tỷ lệ 80% basic + 20% trend (1 item Y2K là đủ).</p>
            <p><strong>Hỏi:</strong> Mặc tối giản mà không nhàm? <br/> <strong>Đáp:</strong> Chơi chất liệu (linen, da lộn), layer mỏng, phụ kiện nhỏ.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>Giữ tủ core + vài điểm nhấn theo trend giúp outfit hợp thời, dễ mặc và tối ưu ngân sách dài hạn.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
