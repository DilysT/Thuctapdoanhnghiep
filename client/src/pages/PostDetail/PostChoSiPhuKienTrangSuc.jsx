import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/chodaumoi.jpg';
import hero4 from '../../assets/postdetail/chodaumoi1.jpg';

export default function PostChoSiPhuKienTrangSuc() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Chợ sỉ phụ kiện trang sức</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>
          <h1 className="fw-bold mb-3">Tổng hợp 5 chợ đầu mối phụ kiện trang sức chất lượng nhất</h1>
          <p className="text-secondary">Ngày đăng: 21/04/2024</p>

          <img src={hero3} alt="Chợ sỉ phụ kiện trang sức" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">Nguồn tốt = mẫu nhanh, giá ổn, tỉ lệ đổi trả thấp</p>

          <div className="post-detail-content">
            <h5 className="mt-4">1) An Đông – Tân Bình (TP.HCM)</h5>
            <p>Thiên về phụ kiện phổ thông: bông tai, vòng cổ, lắc tay, nhẫn, kẹp tóc. Nên test mạ, khoá, mối hàn.</p>

            <h5 className="mt-4">2) Ninh Hiệp – Đồng Xuân (HN)</h5>
            <p>Đa dạng đầu mối, cập nhật theo mùa & xu hướng. Lưu ý bao bì chống xước để giảm trả hàng.</p>

            <h5 className="mt-4">3) Chợ sỉ online (Zalo/Facebook/Telegram)</h5>
            <p>Cập nhật mẫu nhanh, dễ so sánh giá. Yêu cầu <strong>clip cận</strong>, cân nặng, cam kết mạ không đen.</p>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Kiểm tra trang sức mạ" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">Salt-spray test & tiêu chuẩn mạ giúp sàng lọc nhà sỉ</p>

            <h5 className="mt-4">4) Xưởng OEM/ODM & Private Label</h5>
            <p>Chủ động thiết kế/logo/bao bì. MOQ 50–200. Chốt rõ tiêu chuẩn <strong>độ dày mạ (micron)</strong>.</p>

            <h5 className="mt-4">5) Đại lý phân phối brand nội địa</h5>
            <p>Giá cao hơn nhưng ổn định, bảo hành rõ ràng. Phù hợp tệp khách đòi hỏi trải nghiệm.</p>

            <h5 className="mt-4">Checklist nhập hàng</h5>
            <ul>
              <li>Không sắc cạnh; đính đá chắc; bề mặt mạ không rỗ.</li>
              <li>Khoá hoạt động mượt; không trầy xước ngay từ khi nhận.</li>
              <li>Đổi lỗi 7 ngày; hỗ trợ ảnh/video marketing.</li>
            </ul>

            <h5 className="mt-4">Công thức giá & combo</h5>
            <p><strong>Giá bán = (Giá nhập + phí phát sinh) × 2.2–3.0</strong>. Tạo combo nhẫn + lắc + bông tai để tăng AOV.</p>

            <h5 className="mt-4">FAQ nhanh</h5>
            <p><strong>Hỏi:</strong> Mạ bạc có đen không? <br/> <strong>Đáp:</strong> Có thể, nếu tiếp xúc hoá chất/mồ hôi. Dùng túi chống ẩm, khăn lau bạc.</p>
            <p><strong>Hỏi:</strong> Mốc sản phẩm? <br/> <strong>Đáp:</strong> Do ẩm và keo; cần bao bì khô, silica gel.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>Chốt nhà sỉ có tiêu chuẩn mạ & đổi lỗi rõ ràng, xoay vòng mẫu nhanh để tối ưu tồn kho.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
