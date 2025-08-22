// src/pages/posts/PostDetailLoewe.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';

// 3 ảnh bạn cung cấp
import lowoeStreet from '../../assets/banner1/lowoe1.webp';  // street style + túi LOEWE
import lowoeRunway from '../../assets/banner1/lowoe.jpg';    // suit đen + tua vàng
import lowoeCamel from '../../assets/banner1/lowoe3.jpg';    // coat camel-green + feather

export default function PostDetailLoewe() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2">
              <i className="fa fa-home" /> Trang chủ
            </span>{' '}
            / <span className="ms-2">Tin tức</span> /{' '}
            <span className="ms-2 fw-bold">Loewe Men Xuân–Hè 2025</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-2">
            Loewe Men SS25: Tối giản – Thủ công – Siêu thực<br />
            3 “key look” từ sàn diễn đến đời thường
          </h1>
          <p className="text-secondary">Ngày đăng: 02/11/2024</p>

          {/* HERO: street style – ứng dụng thực tế */}
          <figure className="mb-3">
            <img
              src={lowoeStreet}
              alt="Street style Loewe: áo sơ mi patchwork và túi LOEWE màu olive"
              className="img-fluid rounded"
            />
            <figcaption className="fst-italic text-center text-secondary mt-1">
              Street style tinh thần Loewe: patchwork tối giản, phụ kiện da thủ công – dễ ứng dụng đời thường.
            </figcaption>
          </figure>

          <div className="post-detail-content">
            <h5 className="mt-4">Tinh thần show: điêu khắc trên trang phục</h5>
            <p>
              SS25 tiếp tục mở rộng ngôn ngữ của Jonathan Anderson: <strong>đường cắt tối giản</strong>, 
              <strong> tỉ lệ kéo dài</strong> và sự <strong>phô diễn kỹ nghệ thủ công</strong>.
              Các can thiệp siêu thực như <em>mặt nạ tua ánh kim</em> hay <em>feather</em> đặt thẳng chính diện
              tạo cảm giác sắp đặt nghệ thuật nhưng vẫn gợi mở hướng ứng dụng thương mại.
            </p>

            {/* LOOK 1: Quần sequin chân dung */}
            <h5 className="mt-4">Look 1 – Jogger “portrait” + sơ mi xanh baby + boots nâu</h5>
            <p>
              Chiếc <strong>jogger sequin chân dung pop-art</strong> gây bão mạng xã hội được ghép với 
              <strong> sơ mi Oxford xanh baby</strong> và <strong>work boots nâu</strong> để hạ nhiệt độ lấp lánh – 
              cân bằng giữa nghệ thuật và đời thường.
            </p>
            <ul>
              <li><strong>Ứng dụng thương mại:</strong> thay sequins toàn phần bằng <em>jacquard họa sĩ</em> hoặc <em>in digital</em>.</li>
              <li><strong>Phối màu:</strong> nền trung tính (xanh baby/kem) + mảng tươi (đỏ, vàng, hồng).</li>
            </ul>

            {/* LOOK 2: Suit đen + tua vàng */}
            <figure className="mb-3">
              <img
                src={lowoeRunway}
                alt="Loewe SS25 runway: suit đen tinh gọn với phụ kiện tua vàng"
                className="img-fluid rounded"
              />
              <figcaption className="fst-italic text-center text-secondary mt-1">
                Suit đen cắt gọn, mũi giày nhọn – đối thoại cùng phụ kiện mặt nạ tua ánh kim: tối giản gặp siêu thực.
              </figcaption>
            </figure>

            <h5 className="mt-3">Look 2 – Suit đen siêu tinh giản + “mặt nạ” ánh kim</h5>
            <p>
              Tỉ lệ <strong>vai mềm – eo mảnh – ống thẳng</strong> kéo dài cơ thể. Phụ kiện tua vàng là điểm nhấn sân khấu,
              gợi ý chuyển hóa thành <em>brooch kim loại</em> hoặc <em>necklace mảnh</em> khi bán lẻ.
            </p>
            <ul>
              <li><strong>Vải suit gợi ý:</strong> len lạnh/mohair 230–260gsm cho khí hậu nóng ẩm.</li>
              <li><strong>Form:</strong> 2 nút, ve nhọn nhỏ, quần ống thẳng 18–19cm.</li>
            </ul>

            {/* LOOK 3: Camel–green coat + feather */}
            <figure className="mb-3">
              <img
                src={lowoeCamel}
                alt="Loewe SS25: áo khoác camel-green với điểm feather trước trán"
                className="img-fluid rounded"
              />
              <figcaption className="fst-italic text-center text-secondary mt-1">
                Coat camel mở mảng xanh lá như “cắt khối”; feather đặt thẳng chính diện – thử nghiệm tạo hình đặc trưng Loewe.
              </figcaption>
            </figure>

            <h5 className="mt-3">Look 3 – Áo khoác camel viền xanh lá + feather</h5>
            <p>
              <strong>Coat camel hai hàng</strong> mở <strong>facing xanh lá</strong> sắc gọn. 
              Feather ở trung tâm nhấn motif tự nhiên. Bản thương mại có thể lược bỏ feather và thay bằng <em>piping tương phản</em>.
            </p>
            <ul>
              <li><strong>Tỷ lệ:</strong> tà vừa hông, tay dài qua cổ tay ~1cm; phối quần suông thẳng để kéo chân.</li>
            </ul>

            <h5 className="mt-4">Vật liệu &amp; kỹ nghệ</h5>
            <p>
              Nhấn vào <strong>thêu tay/đính sequin</strong>, <strong>len–mohair suit</strong> và <strong>da đánh bóng</strong>.
              Bản ứng dụng: dùng <em>in chuyển nhiệt</em> cho họa tiết, <em>poly–viscose</em> cho suit mùa hè, 
              <em>PU premium</em> cho phụ kiện để tối ưu giá.
            </p>

            <h5 className="mt-4">Phối đồ nhanh cho khách hàng</h5>
            <ul>
              <li><strong>Ngày thường:</strong> sơ mi xanh baby + quần họa tiết + boots nâu/derby đen.</li>
              <li><strong>Sự kiện:</strong> suit đen tối giản + brooch ánh kim + clutch cứng.</li>
              <li><strong>Chuyển mùa:</strong> coat camel–green + T-shirt trắng + quần âu đen + loafer.</li>
            </ul>

            <h5 className="mt-4">Gợi ý phát triển mẫu cho TS GLOBAL (OEM/ODM)</h5>
            <ul>
              <li><strong>Jogger jacquard chân dung:</strong> bản in digital/DTF; bo gấu; lưng thun + dây rút; lót mỏng chống cọ.</li>
              <li><strong>Oxford xanh baby:</strong> cotton 60s–80s; cổ button-down; nẹp ẩn.</li>
              <li><strong>Suit đen slim:</strong> 2 nút; ve nhọn nhỏ; half-lining; ống thẳng.</li>
              <li><strong>Coat camel–green:</strong> two-tone facing; piping tương phản; khuy kim loại.</li>
            </ul>
            <p className="mb-0">
              <strong>MOQ gợi ý:</strong> 30–50 sp/mã — <strong>Lead time:</strong> 12–20 ngày (không thêu sequin dày). 
              Có thể kèm gói <em>nhãn riêng</em> + lookbook trưng bày.
            </p>

            <h5 className="mt-4">Kết luận</h5>
            <p>
              SS25 cho thấy cách Loewe dùng <strong>tối giản</strong> làm nền cho <strong>thủ công – ý niệm</strong>.
              Ba “key look” đều có phiên bản ứng dụng được cho boutique tại Việt Nam: hiện đại, khác biệt nhưng vẫn thương mại.
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
