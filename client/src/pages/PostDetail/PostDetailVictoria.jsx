import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Sidebar from '../../components/Sidebar';
import blouse from '../../assets/banner1/blouse.jpg';
import blouse1 from '../../assets/banner1/blouse1.webp';
import blouse2 from '../../assets/banner1/blouse2.jpg';

export default function PostDetailVictoria() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Sản phẩm</span> /
            <span className="ms-2 fw-bold">Áo kiểu tay bồng nơ eo – Trắng</span>
          </div>
          <button className="btn btn-sm btn-warning text-white mb-2">Sản phẩm</button>
          <h1 className="fw-bold mb-3">
            Áo kiểu tay bồng nơ eo – Trắng: <br />
            Thanh lịch cho công sở &amp; dự tiệc
          </h1>
          <p className="text-secondary">Ngày đăng: 21/11/2024</p>
          <img src={blouse} alt="Áo kiểu tay bồng nơ eo trắng" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Mẫu áo tay bồng phối nơ bản lớn tôn dáng, dễ phối quần tây hoặc chân váy.
          </p>

          {/* ĐÂY! Đổi text-body thành post-detail-content */}
          <div className="post-detail-content">
            <h5 className="mt-4">Thiết kế nổi bật</h5>
            <p>
              Mẫu áo tập trung vào chi tiết <strong>tay bồng nhẹ</strong> và <strong>nơ buộc bản lớn ở eo</strong>,
              tạo điểm nhấn nữ tính nhưng vẫn giữ sự chỉn chu. Hàng <strong>cúc ngọc trai</strong> chạy dọc thân áo
              giúp tổng thể sang trọng hơn, phù hợp môi trường công sở lẫn sự kiện cần lịch thiệp.
            </p>
            <p>
              Phần cổ ve nhỏ gọn kết hợp nẹp cúc tinh tế giúp chiếc áo giữ phom tốt khi lên ảnh hay đi làm hàng ngày.
              Dáng áo chuẩn giúp che khuyết điểm vòng eo và tôn vóc dáng.
            </p>

            <h5 className="mt-4">Chất liệu &amp; hoàn thiện</h5>
            <p>
              Chất vải chọn lọc <em>(đề xuất: lụa lạnh/voan lụa pha)</em> có độ rủ, mịn tay và ít nhăn. Đường may
              được hoàn thiện kỹ, mép trong sạch sẽ, đảm bảo form đứng vừa phải nhưng vẫn thoải mái di chuyển.
            </p>

            <img src={blouse1} alt="Chi tiết nơ eo và tay bồng" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Nơ eo bản lớn giúp định hình vòng 2, tay bồng nhẹ tạo độ cân đối phần vai.
            </p>

            <p>
              Gợi ý bảng size từ S–XL; có thể sản xuất theo số đo hoặc yêu cầu riêng cho đơn hàng đồng phục.
              Màu chủ đạo: <strong>trắng</strong>; nhận gia công các gam màu khác theo đơn đặt hàng.
            </p>

            <h5 className="mt-4">Phối đồ &amp; ứng dụng</h5>
            <p>
              Kết hợp cùng <strong>quần tây đen</strong> cho outfit công sở tối giản, hoặc <strong>chân váy bút chì</strong>
              khi cần nhấn sự chuyên nghiệp. Với sự kiện, có thể phối thêm giày mũi nhọn và khuyên tai ngọc để tăng độ nổi bật.
            </p>
            <p>
              Phù hợp: đi làm, gặp đối tác, dự tiệc nhẹ, chụp lookbook. Dễ bảo quản, giặt tay nhẹ hoặc giặt máy chế độ dịu.
            </p>

            <h5 className="mt-4">Chính sách sỉ &amp; đặt hàng</h5>
            <p>
              TS GLOBAL nhận <strong>OEM/ODM &amp; wholesale</strong> với số lượng linh hoạt, thời gian giao hàng nhanh,
              hỗ trợ logo – nhãn riêng. Vui lòng liên hệ để được tư vấn chất liệu, bảng màu và báo giá tốt nhất.
            </p>

            <img src={blouse2} alt="Áo kiểu công sở trắng phối quần tây" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Giải pháp đồng phục nữ công sở: thanh lịch, tôn dáng, dễ phối.
            </p>

            <h5 className="mt-4">Lưu ý bảo quản</h5>
            <p>
              Giặt ở 30°C, không tẩy, ủi ở nhiệt độ thấp và treo phơi nơi thoáng mát. Gấp gọn theo nếp để hạn chế nhăn
              và giữ phom áo luôn chuẩn.
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
