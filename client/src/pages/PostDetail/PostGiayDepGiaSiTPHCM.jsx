import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/giaydep1.jpg';
import hero4 from '../../assets/postdetail/giaydep.jpg';

export default function PostGiayDepGiaSiTPHCM() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Nguồn hàng giày dép giá sỉ uy tín tại TP.HCM</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-3">
            Nguồn hàng giày dép giá sỉ uy tín tại TP.HCM: bản đồ mua sỉ cho chủ shop online
          </h1>

          <p className="text-secondary">Ngày đăng: 05/08/2024</p>

          {/* Ảnh mở bài */}
          <img src={hero3} alt="Nguồn hàng giày dép sỉ TP.HCM" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Giày dép: danh mục “xoay vòng nhanh”, dễ lên set – dễ upsell – biên lợi nhuận tốt
          </p>

          <div className="post-detail-content">
            <p>
              Ở TP.HCM, nguồn giày dép sỉ tập trung theo cụm: chợ đầu mối – kho sỉ – xưởng OEM/ODM –
              nền tảng B2B. Bài viết này “vẽ bản đồ” kênh nhập, kèm checklist kiểm hàng và công thức
              giá bán để bạn bắt đầu trơn tru.
            </p>

            <h5 className="mt-4">1) Chợ đầu mối & kho sỉ</h5>
            <p>
              Khu <strong>Chợ Tân Bình – Chợ An Đông</strong> và các kho quanh Quận 5, 10 là nơi cập nhật
              mẫu nhanh (sneaker basic, sandal quai mảnh, giày búp bê, mule…). Ưu điểm: xem/đi thử trực tiếp,
              chốt màu/size linh hoạt. Nhược: giá biến động theo lô và mùa cao điểm.
            </p>

            <h5 className="mt-4">2) Xưởng OEM/ODM nội địa</h5>
            <p>
              Phù hợp khi muốn <strong>private label</strong> hoặc độc quyền phối màu/đế. MOQ thường 60–120 đôi/mẫu,
              lead time 10–25 ngày. Chốt rõ vật liệu (da PU/da bò/microfiber), keo dán, chỉ may, đế (EVA/TPR/Rubber) và
              quy chuẩn lỗi keo – lệch form.
            </p>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Kiểm định chất lượng giày" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Kiểm đường dán, keo tràn, độ bám đế và cân đối form để giảm đổi trả
            </p>

            <h5 className="mt-4">3) Nền tảng B2B (1688/Alibaba) & đại lý phân phối</h5>
            <p>
              Dễ so giá – đa nhà cung cấp. Lưu ý phí vận chuyển – thời gian thông quan – tỷ giá. Với giày da,
              yêu cầu <strong>ảnh cận – video bẻ gập</strong>, cân nặng đôi giày và thông số đế. Đại lý phân phối trong
              nước cho dòng thương hiệu sẽ có chính sách bảo hành tốt hơn, bù lại biên lợi nhuận thấp hơn.
            </p>

            <h5 className="mt-4">4) Size run & tồn kho: nhập thế nào cho hợp lý?</h5>
            <ul>
              <li>Nữ: run phổ biến 35–39, nên dồn size 36–38 (tệp VN).</li>
              <li>Nam: run 39–43, dồn 41–42 cho sneaker/giày lười.</li>
              <li>Giày hot trend: test 1–2 run trước, quay vòng nhanh rồi mới mở rộng màu/size.</li>
            </ul>

            <h5 className="mt-4">5) Checklist kiểm hàng 60 giây</h5>
            <ul>
              <li>Keo thừa, đường dán – chỉ may có đều và chắc?</li>
              <li>Đế bám tốt? Insole êm? Hai chiếc có lệch màu – lệch form?</li>
              <li>Logo/tem (nếu có) sắc nét, không lem mực?</li>
              <li>Mùi keo quá nặng? Lớp phủ da có trầy xước?</li>
            </ul>

            {/* Ảnh chèn tiếp */}
            <img src={hero4} alt="Thông số đế giày và vật liệu" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Ghi chú vật liệu – form – run size ngay khi nhận lô để chuẩn hoá nhập lần sau
            </p>

            <h5 className="mt-4">6) Công thức giá & combo bán kèm</h5>
            <p>
              Tham khảo: <strong>Giá bán = (Giá nhập + phí phát sinh) × 2.0–2.6</strong> tuỳ phân khúc.
              Tạo combo “giày + tất + miếng lót” hoặc “sandal + túi tote” để tăng AOV và tỷ lệ chốt.
            </p>

            <h5 className="mt-4">7) Hậu mãi & đổi trả</h5>
            <p>
              Chốt với nhà sỉ: <strong>đổi size trong 7 ngày</strong>, lỗi keo/đế xử lý thế nào, phí vận chuyển hai chiều.
              Với khách lẻ, duy trì hướng dẫn đo chân (cm) và bảng size rõ ràng để giảm rate đổi trả.
            </p>

            <h5 className="mt-4">Kết luận</h5>
            <p>
              Muốn danh mục giày dép “chạy mượt”, hãy bắt đầu từ <strong>nguồn uy tín</strong>, test nhỏ – xoay vòng nhanh,
              đo tỉ lệ lỗi và phản hồi thực tế. Sau 2–4 tuần, bạn sẽ tìm được công thức nhập – bán – tồn phù hợp tệp khách của mình.
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
