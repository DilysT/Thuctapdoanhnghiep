import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/kid.jpg';
import hero4 from '../../assets/postdetail/kid1.jpg';

export default function PostQuanAoTreEmSi() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Bí kíp nhập sỉ quần áo trẻ em hiệu quả</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-3">
            Bí kíp nhập sỉ quần áo trẻ em hiệu quả cho shop mới và lâu năm
          </h1>

          <p className="text-secondary">Ngày đăng: 30/05/2024</p>

          {/* Ảnh mở bài */}
          <img src={hero3} alt="Quần áo trẻ em giá sỉ" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Thị trường quần áo trẻ em: ít rủi ro lỗi mốt, biên lợi nhuận ổn định, nhu cầu quanh năm
          </p>

          <div className="post-detail-content">
            <p>
              Kinh doanh quần áo trẻ em là lựa chọn hấp dẫn vì <strong>cầu ổn định</strong> và vòng quay hàng
              đều. Nhưng để nhập sỉ hiệu quả, chủ shop cần biết kênh lấy hàng, cách kiểm chất lượng và tính toán
              run size hợp lý để tránh tồn kho.
            </p>

            <h5 className="mt-4">1) Kênh nhập hàng phổ biến</h5>
            <ul>
              <li><strong>Xưởng may</strong>: chủ động thiết kế, logo, chất liệu; MOQ từ 50–100 sản phẩm/mẫu.</li>
              <li><strong>Chợ đầu mối</strong> (An Đông, Ninh Hiệp, Đồng Xuân…): đa dạng mẫu mã, cập nhật nhanh theo mùa.</li>
              <li><strong>Nhà phân phối</strong> thương hiệu: chính sách bảo hành, chất lượng đồng đều, giá cao hơn.</li>
              <li><strong>Online sỉ</strong> (Zalo, Facebook, sàn TMĐT B2B): nhanh, tiện, cần lọc kỹ nhà cung cấp uy tín.</li>
            </ul>

            <h5 className="mt-4">2) Run size thông minh</h5>
            <p>
              Thống kê tệp khách để đặt size phù hợp. Ví dụ: 
              <ul>
                <li>0–1 tuổi: dồn size 3M–12M</li>
                <li>1–3 tuổi: dồn size 2–3</li>
                <li>4–6 tuổi: dồn size 4–5</li>
              </ul>
              Với mẫu hot, nhập thêm 1–2 run để xoay vòng nhanh.
            </p>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Kiểm tra chất lượng quần áo trẻ em" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Chất lượng vải và đường may ảnh hưởng trực tiếp đến trải nghiệm trẻ nhỏ
            </p>

            <h5 className="mt-4">3) Checklist kiểm hàng</h5>
            <ul>
              <li>Chất liệu mềm, không gây kích ứng, co giãn tốt.</li>
              <li>Đường may chắc chắn, không tuột chỉ, không lộ mép vải.</li>
              <li>In/Thêu hình rõ nét, màu bền khi giặt.</li>
              <li>Size chuẩn, chênh lệch không quá ±1cm.</li>
            </ul>

            <h5 className="mt-4">4) Tính giá & chiến lược bán</h5>
            <p>
              Công thức gợi ý: <strong>Giá bán = (Giá nhập + chi phí vận hành) × 2.0–2.5</strong>.
              Tạo combo “áo + quần” hoặc “set áo + mũ + phụ kiện” để tăng giá trị đơn hàng và giảm tồn kho lẻ.
            </p>

            {/* Ảnh chèn tiếp */}
            <img src={hero4} alt="Trưng bày quần áo trẻ em" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Trưng bày khoa học giúp khách hàng dễ lựa chọn và tăng tỉ lệ mua
            </p>

            <h5 className="mt-4">5) Lưu ý theo mùa</h5>
            <p>
              Nắm lịch nhập hàng theo mùa (Xuân – Hè: chất liệu cotton mỏng; Thu – Đông: nỉ, len, dạ). 
              Chủ động đặt trước 2–3 tuần để có hàng sớm, tránh thiếu size/màu hot.
            </p>

            <h5 className="mt-4">Kết luận</h5>
            <p>
              Nhập sỉ quần áo trẻ em hiệu quả là sự kết hợp giữa <strong>chọn nguồn uy tín</strong>,
              <strong> quản lý tồn kho khoa học</strong> và <strong>chiến lược giá hợp lý</strong>. 
              Làm tốt các bước này, shop của bạn sẽ luôn có hàng “chạy” và khách quay lại thường xuyên.
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
