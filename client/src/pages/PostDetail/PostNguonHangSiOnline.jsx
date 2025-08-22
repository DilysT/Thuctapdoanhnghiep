import React from 'react';
import Sidebar from '../../components/Sidebar';

import hero4 from '../../assets/postdetail/hang_si1.jpg';
import hero3 from '../../assets/postdetail/hang_si.png';
import hero5 from '../../assets/postdetail/hang_si2.jpg';


export default function PostNguonHangSiOnline() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Cách tìm nguồn hàng quần áo giá sỉ bán online</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-3">
            Cách tìm nguồn hàng quần áo giá sỉ bán online: hướng dẫn thực chiến từ A–Z
          </h1>

          <p className="text-secondary">Ngày đăng: 11/06/2024</p>

          {/* Ảnh mở bài */}
          <img src={hero3} alt="Nguồn hàng quần áo giá sỉ online" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Chọn đúng nguồn hàng = biên lợi nhuận tốt + vận hành nhàn hơn
          </p>

          <div className="post-detail-content">
            <p>
              Bán online muốn bền phải bắt đầu từ <strong>nguồn hàng ổn định</strong>: chất lượng đồng đều,
              giá nhập cạnh tranh, quy trình đặt – giao – đổi trả rõ ràng. Bài viết này tổng hợp các kênh tìm nguồn
              hàng phổ biến, cách đánh giá nhà cung cấp và checklist thương lượng để bạn “chốt kèo” tự tin.
            </p>

            <h5 className="mt-4">1) Các kênh tìm nguồn hàng phổ biến</h5>
            <ul>
              <li><strong>Chợ đầu mối</strong> (An Đông, Ninh Hiệp, Tân Bình…): đa mẫu, thử hàng trực tiếp, dễ thương lượng.</li>
              <li><strong>Nhà xưởng/xưởng may</strong>: giá sỉ sâu, chủ động nhãn riêng (private label), MOQ linh hoạt tùy xưởng.</li>
              <li><strong>Chợ sỉ online</strong> (Zalo, Facebook group, Telegram): cập nhật mẫu nhanh, cần lọc kỹ uy tín.</li>
              <li><strong>Nền tảng B2B</strong> (1688, Taobao, Alibaba, Made-in-Vietnam B2B): nhiều nhà cung cấp, hỗ trợ logistics.</li>
              <li><strong>Agency/đại lý phân phối</strong>: có chính sách bảo hành, đổi size, đổi mẫu theo đợt.</li>
            </ul>

            <h5 className="mt-4">2) Cách đánh giá nhà cung cấp trong 10 phút</h5>
            <p>
              Dùng “3C”: <strong>Cost</strong> (giá & chiết khấu), <strong>Consistency</strong> (độ ổn định chất lượng),
              <strong>Capacity</strong> (năng lực đáp ứng). Yêu cầu nhà cung cấp gửi:
            </p>
            <ul>
              <li>Bảng size – chất liệu – ảnh thật – video quay cận tag/đường may.</li>
              <li>Chính sách đổi trả lỗi, thời gian giao hàng, phí ship nội/ngoại tỉnh.</li>
              <li>Min order (MOQ), chính sách giữ mẫu, lịch restock.</li>
              <li>Ảnh feedback khách sỉ khác (làm mờ thông tin nếu cần).</li>
            </ul>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Đánh giá nhà cung cấp" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Checklist đơn giản giúp bạn lọc nhanh nhà cung cấp phù hợp mô hình
            </p>

            <h5 className="mt-4">3) Công thức giá bán: lời – nhưng không “đốt” khách</h5>
            <p>
              Một công thức tham khảo: <strong>Giá bán = (Giá nhập + phí ship + bao bì) × hệ số 1.7–2.2</strong>.
              Với sản phẩm cạnh tranh cao (áo thun basic), ưu tiên vòng quay nhanh; sản phẩm ngách (đồ thiết kế, local brand)
              có thể nâng biên lợi nhuận nhờ câu chuyện thương hiệu và trải nghiệm.
            </p>

            <h5 className="mt-4">4) Ký gửi, đặt cọc & hợp đồng</h5>
            <ul>
              <li>Đơn đầu nên <strong>test nhỏ</strong> 3–5 mẫu, mỗi mẫu 5–10 size/màu.</li>
              <li>Thỏa thuận rõ <strong>đổi size/đổi lỗi</strong> trong 7 ngày, quy chuẩn lỗi (rách, lem màu, lệch size &gt; 2cm…).</li>
              <li>Nếu OEM/đặt nhãn riêng: chốt file kỹ thuật, chất liệu, tem mác, bao bì, timeline, phạt trễ.</li>
            </ul>

            {/* Ảnh chèn tiếp */}
            <img src={hero5} alt="Chính sách đổi trả sỉ" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Hợp đồng rõ ràng giúp giảm rủi ro tồn kho và lỗi chất lượng
            </p>

            <h5 className="mt-4">5) Mẹo mua sỉ “đỡ đau ví”</h5>
            <ul>
              <li>Mua theo <strong>bộ sưu tập mini</strong> (áo + quần + phụ kiện) để upsell, tăng AOV.</li>
              <li>Đặt lịch nhận hàng cố định mỗi tuần để gom ship và kiểm soát tồn kho.</li>
              <li>Xin <strong>ảnh/quay sẵn</strong> từ nhà cung cấp để chạy test ads nhanh trước khi nhập sâu.</li>
              <li>Tạo <strong>bảng đánh giá</strong> mỗi nhà cung cấp sau 1–2 tháng: tỉ lệ lỗi, lead time, phản hồi, giá.</li>
            </ul>

            <h5 className="mt-4">FAQ nhanh</h5>
            <p><strong>Hỏi:</strong> Không đi chợ sỉ được thì sao? <br />
               <strong>Đáp:</strong> Yêu cầu gọi video, sample ship nhanh; thanh toán COD cho đơn thử; dùng dịch vụ kiểm hàng của bên thứ ba.</p>
            <p><strong>Hỏi:</strong> Có nên nhập quá nhiều size không? <br />
               <strong>Đáp:</strong> Start với size “đinh” theo tệp khách (VD nữ: M–L; nam: L–XL), theo dõi số liệu rồi mới mở rộng.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>
              Tìm nguồn hàng sỉ online không khó, quan trọng là <strong>quy trình chọn lọc</strong> và
              <strong>đo lường hiệu quả</strong>. Bắt đầu nhỏ, kiểm thử nhanh, đàm phán thông minh—
              bạn sẽ có một chuỗi cung ứng gọn, ổn định và lợi nhuận tốt.
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
