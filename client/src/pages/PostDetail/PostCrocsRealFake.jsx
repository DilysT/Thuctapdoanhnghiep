import React from 'react';
import Sidebar from '../../components/Sidebar';
import hero3 from '../../assets/postdetail/croc.jpg';
import hero4 from '../../assets/postdetail/croc1.webp';

export default function PostCrocsRealFake() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Phân biệt Crocs real và fake</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>
          <h1 className="fw-bold mb-3">Top 12 cách phân biệt Crocs Real và Crocs Fake chính xác</h1>
          <p className="text-secondary">Ngày đăng: 12/03/2024</p>

          {/* Ảnh mở bài */}
          <img src={hero3} alt="Phân biệt Crocs real fake" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Ba điểm nhanh: chất liệu Croslite, mùi nhựa & chi tiết in/đúc sắc nét
          </p>

          <div className="post-detail-content">
            <p>
              Crocs thật sử dụng <strong>Croslite</strong> – chất liệu độc quyền cho cảm giác êm, nhẹ và đàn hồi.
              Hàng nhái thường nặng, mùi nhựa gắt và hoàn thiện thô. Bài viết này tổng hợp <strong>12 dấu hiệu</strong>
              kèm <strong>checklist 60 giây</strong> để bạn tự soi.
            </p>

            <h5 className="mt-4">1) Chất liệu & mùi</h5>
            <ul>
              <li><strong>Croslite real:</strong> êm, nhẹ, đàn hồi, không mùi/ít mùi.</li>
              <li><strong>Fake:</strong> nhựa cứng hoặc bọt xốp nhẹ nhưng giòn, mùi nhựa mạnh.</li>
            </ul>

            <h5 className="mt-4">2) Bề mặt & lỗ thoáng</h5>
            <p>Lỗ thoáng đều, mép cắt sạch, bề mặt hạt mịn đồng nhất. Hàng nhái dễ có bavia, lệch lỗ.</p>

            <h5 className="mt-4">3) Logo cá sấu & chữ</h5>
            <p>Logo sắc nét, cân đối; chữ “crocs™” đúng font, độ sâu khắc đều. Fake hay lem, nông – sâu không đều.</p>

            <h5 className="mt-4">4) Insole & outsole</h5>
            <ul>
              <li><strong>Insole real:</strong> pattern hạt đều, bám chân vừa phải, không rít.</li>
              <li><strong>Đế:</strong> rãnh đồng đều, mã size/series rõ nét.</li>
            </ul>

            {/* Ảnh giữa */}
            <img src={hero4} alt="Logo và insole Crocs" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">Logo, insole, đế là 3 khu vực thường lộ lỗi ở hàng fake</p>

            <h5 className="mt-4">5) Quai hậu & ốc tán</h5>
            <p>Quai xoay mượt, ốc tán chắc, không tróc sơn. Fake dễ lỏng lẻo, hoàn thiện sần sùi.</p>

            <h5 className="mt-4">6) Hộp, tag, mã QR</h5>
            <p>QR dẫn về trang chính hãng; tag in sắc nét; mã size–màu khớp model. Fake dễ sai font/sai mã.</p>

            <h5 className="mt-4">7) Giá & nơi mua</h5>
            <p>Giá quá rẻ là dấu hỏi. Ưu tiên đại lý uỷ quyền, nền tảng có bảo vệ người mua, giữ hoá đơn.</p>

            <h5 className="mt-4">8) Jibbitz & phụ kiện đi kèm</h5>
            <p>Phụ kiện chính hãng đúc sắc sảo, chân cài chắc; fake dễ lỏng và bavia thừa.</p>

            <h5 className="mt-4">9) Trọng lượng & cân đối</h5>
            <p>Hàng real đôi trái–phải đồng trọng lượng, đứng phẳng; fake dễ lệch.</p>

            <h5 className="mt-4">10) Độ đàn hồi & hồi form</h5>
            <p>Bóp – thả: real hồi form nhanh, không lằn. Fake dễ lõm, hồi chậm.</p>

            <h5 className="mt-4">11) Độ bền màu</h5>
            <p>Real màu tươi, không loang; fake dễ phai, không đều giữa các mảng.</p>

            <h5 className="mt-4">12) Trải nghiệm đi thực tế</h5>
            <p>Real ít điểm cấn, không rát gót; fake hay cấn mép lỗ, cứng gót, ám mùi.</p>

            <h5 className="mt-4">Checklist 60 giây trước khi chốt</h5>
            <ul>
              <li>Ngửi mùi nhựa, bóp–thả test đàn hồi.</li>
              <li>Soi logo, insole, đế; lỗ thoáng có đều?</li>
              <li>Quai xoay mượt không? Ốc tán chắc?</li>
              <li>Quét QR, đối chiếu mã trên tag/hộp.</li>
            </ul>

            <h5 className="mt-4">FAQ nhanh</h5>
            <p><strong>Hỏi:</strong> Có hàng “xuất dư” chính hãng không? <br/> <strong>Đáp:</strong> Rất hiếm; cảnh giác chiêu “xuất dư/tuồn kho”.</p>
            <p><strong>Hỏi:</strong> Mua online sợ fake? <br/> <strong>Đáp:</strong> Chọn shop có video, đổi trả rõ ràng, đánh giá thật.</p>

            <h5 className="mt-4">Kết luận</h5>
            <p>Kết hợp 12 dấu hiệu + checklist 60 giây, bạn sẽ phân biệt Crocs thật–giả tự tin, hạn chế rủi ro khi mua.</p>
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
