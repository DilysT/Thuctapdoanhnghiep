import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/phukien1.jpg';
import hero4 from '../../assets/postdetail/phukien.jpg';

export default function PostPhuKienThoiTrangSi() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Top 5 nguồn hàng phụ kiện thời trang không thể bỏ lỡ</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-3">
            Top 5 nguồn hàng phụ kiện thời trang không thể bỏ lỡ cho chủ shop online
          </h1>

          <p className="text-secondary">Ngày đăng: 20/07/2024</p>

          {/* Ảnh mở bài */}
          <img src={hero3} alt="Nguồn hàng phụ kiện thời trang sỉ" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Phụ kiện là “biến số lợi nhuận” nhờ vòng quay nhanh, biên tốt và dễ upsell
          </p>

          <div className="post-detail-content">
            <p>
              Với mô hình bán online, phụ kiện thời trang như túi, thắt lưng, mũ, trang sức… có lợi thế
              <strong> vốn thấp – vòng quay cao</strong>. Bài viết này gợi ý 5 nguồn hàng sỉ uy tín và cách nhập thông minh
              để bạn tối ưu tồn kho và lợi nhuận.
            </p>

            <h5 className="mt-4">1) Chợ đầu mối phụ kiện trong nước</h5>
            <p>
              Tập trung tại <strong>Chợ An Đông – Tân Bình (TP.HCM)</strong> và <strong>Ninh Hiệp (HN)</strong>.
              Ưu điểm: mẫu mã đa dạng, có thể xem – sờ – test khoá kéo, mạ màu, đính đá. Nhược điểm: cần lọc nhà sỉ kỹ,
              giá dao động theo mùa và lô.
            </p>

            <h5 className="mt-4">2) Xưởng sản xuất/đại lý OEM</h5>
            <p>
              Phù hợp khi bạn muốn <strong>private label</strong> (gắn nhãn riêng). Có thể yêu cầu chất liệu, phần cứng,
              màu mạ, bao bì. MOQ từ 50–200 tuỳ mặt hàng. Nên chốt rõ tiêu chuẩn lỗi mạ, bong tróc, xước kim loại.
            </p>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Đánh giá chất lượng phụ kiện" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Kiểm tra mối hàn, lớp xi mạ và độ sắc cạnh để giảm tỉ lệ đổi trả
            </p>

            <h5 className="mt-4">3) Chợ sỉ online (Zalo/Facebook/Telegram)</h5>
            <p>
              Tốc độ cập nhật mẫu rất nhanh. Hãy yêu cầu <strong>clip quay cận</strong>, cân nặng sản phẩm, chứng nhận mạ,
              và ảnh feedback thực tế. Dùng danh sách “nhà sỉ dự phòng” để chủ động khi đứt hàng.
            </p>

            <h5 className="mt-4">4) Nền tảng B2B (1688/Alibaba/Taobao)</h5>
            <p>
              Dễ so sánh giá và năng lực. Lưu ý phí ship – thông quan – tỷ giá. Với trang sức mạ,
              chọn nhà có <strong>salt-spray test</strong> hoặc cam kết không đen trong thời gian nhất định.
            </p>

            <h5 className="mt-4">5) Các brand nội địa & đại lý phân phối</h5>
            <p>
              Có chính sách bảo hành và đổi size. Phù hợp tệp khách đòi hỏi trải nghiệm tốt, giá trị đơn cao.
              Biên lợi nhuận thấp hơn nhưng ổn định.
            </p>

            <h5 className="mt-4">Checklist chọn nhà sỉ phụ kiện</h5>
            <ul>
              <li>Ảnh/video thật, thông số chất liệu (PU/da thật/xi mạ/khóa niken…).</li>
              <li>Chính sách đổi lỗi trong 7 ngày; quy chuẩn lỗi rõ ràng.</li>
              <li>Lead time, lịch restock, hỗ trợ ảnh marketing.</li>
              <li>Đơn test nhỏ 3–5 mẫu, mỗi mẫu 5–10 cái rồi mới mở rộng.</li>
            </ul>

            {/* Ảnh chèn tiếp */}
            <img src={hero4} alt="Bao bì phụ kiện" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Bao bì gọn – đẹp giúp tăng cảm nhận giá trị và giảm hư hỏng khi vận chuyển
            </p>

            <h5 className="mt-4">Công thức giá bán & upsell</h5>
            <p>
              Gợi ý: <strong>Giá bán = (Giá nhập + phí phát sinh) × 2.2–3.0</strong>, tuỳ phân khúc.
              Tạo combo “túi + ví mini + móc khoá” hoặc “mũ + kính + khăn” để tăng AOV và xoay vòng tồn kho nhanh.
            </p>

            <h5 className="mt-4">Kết luận</h5>
            <p>
              Chọn đúng nguồn hàng phụ kiện sẽ giúp shop của bạn <strong>linh hoạt sản phẩm</strong>,
              <strong> biên lợi nhuận tốt</strong> và <strong>dễ mở rộng</strong>. Hãy bắt đầu bằng đơn nhỏ,
              đo đếm tỉ lệ lỗi – tỉ lệ quay lại mua, sau 2–4 tuần là tối ưu được danh mục “hái ra tiền”.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
