import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/watch.jpg';
import hero4 from '../../assets/postdetail/watch1.jpg';

export default function PostXuongSiDongHoUyTin() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Xưởng sỉ đồng hồ uy tín</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>
          <h1 className="fw-bold mb-3">Top 10 xưởng sỉ đồng hồ uy tín, chất lượng hiện nay</h1>
          <p className="text-secondary">Ngày đăng: 18/01/2024</p>

          <img src={hero3} alt="Xưởng sỉ đồng hồ uy tín" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">Hồ sơ kỹ thuật minh bạch & hậu mãi là nền tảng hợp tác lâu dài</p>

          <div className="post-detail-content">
            <h5 className="mt-4">Tiêu chí chọn xưởng</h5>
            <ul>
              <li><strong>Máy:</strong> Nhật/Thuỵ Sĩ có mã chuẩn; linh kiện thay thế sẵn.</li>
              <li><strong>Vật liệu:</strong> kính sapphire/khoáng; thép 316L; lớp mạ bền màu.</li>
              <li><strong>Chống nước:</strong> test áp suất thực; niêm khít gioăng.</li>
              <li><strong>Bảo hành:</strong> 6–12 tháng; quy trình đổi lỗi nhanh.</li>
            </ul>

            <h5 className="mt-4">Hồ sơ kỹ thuật cần yêu cầu</h5>
            <ul>
              <li>Thông số máy (caliber, sai số, power reserve).</li>
              <li>Chống nước (ATM), loại kính, vật liệu vỏ/dây.</li>
              <li>Kiểm định chất lượng (QC checklist, AQL).</li>
            </ul>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Kiểm định đồng hồ" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">Kiểm sai số, dạ quang, chống nước trước khi nhập lô</p>

            <h5 className="mt-4">Mẹo nhập lô đầu tiên</h5>
            <ul>
              <li>Test 5–10 mẫu bán chạy (dress, sport, field, minimalist).</li>
              <li>Đa kích cỡ 38–42mm cho tệp rộng; dồn màu dễ bán (đen, bạc, xanh navy).</li>
              <li>Trước khi mở rộng dòng máy, gom feedback 2–4 tuần.</li>
            </ul>

            <h5 className="mt-4">Công thức giá & combo</h5>
            <p><strong>Giá bán = (Giá nhập + phí phát sinh) × 2.2–3.0</strong>. Combo “đồng hồ + dây da + tool” tăng AOV.</p>

            <h5 className="mt-4">FAQ nhanh</h5>
            <p><strong>Hỏi:</strong> 5ATM có bơi được không? <br/> <strong>Đáp:</strong> Rửa tay, mưa nhẹ; bơi cần 10ATM trở lên.</p>
            <p><strong>Hỏi:</strong> Dây thép xước? <br/> <strong>Đáp:</strong> Dùng khăn vi sợi + kem đánh bóng nhẹ; xước sâu cần đánh lại.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>Chọn xưởng có tiêu chuẩn rõ ràng, hỗ trợ hậu mãi sẽ giúp shop xây uy tín và giảm rủi ro đổi trả.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
