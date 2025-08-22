import React from 'react';
import Sidebar from '../../components/Sidebar';
import aonam from '../../assets/banner1/aonam.webp';
import aonam1 from '../../assets/banner1/aonam1.jpg';
import aonam2 from '../../assets/banner1/aonam2.jpg';

export default function PostDetailThuDong() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Nội dung chính */}
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <div className="mb-3 text-secondary small">
            <span className="me-2"><i className="fa fa-home"></i> Trang chủ</span> /
            <span className="ms-2">Tin tức</span> /
            <span className="ms-2 fw-bold">Áo dài nam Thu–Đông gấm jacquard màu gạch</span>
          </div>

          <button className="btn btn-sm btn-warning text-white mb-2">Tin tức</button>

          <h1 className="fw-bold mb-3">
            Áo dài nam Thu–Đông gấm jacquard màu gạch<br />
            Lịch lãm cho lễ Tết, sự kiện &amp; doanh nghiệp
          </h1>

          <p className="text-secondary">Ngày đăng: 06/11/2024</p>

          {/* Ảnh mở bài */}
          <img src={aonam2} alt="Áo dài nam gấm jacquard màu gạch" className="img-fluid rounded mb-2" />
          <p className="fst-italic text-center text-secondary">
            Họa tiết gấm chìm sang trọng, tông đỏ gạch ấm áp – lựa chọn lý tưởng cho mùa Thu–Đông.
          </p>

          <div className="post-detail-content">
            <h5 className="mt-4">Vì sao áo dài gấm là “must–have” mùa Thu–Đông?</h5>
            <p>
              Chất liệu <strong>gấm jacquard</strong> có độ dày vừa phải, giữ ấm tốt nhưng vẫn thoáng; bề mặt hoa văn chìm
              phản chiếu ánh sáng giúp lên ảnh cực kỳ sang trọng. Tông <strong>đỏ gạch/terracotta</strong> tôn da, hợp mọi bối cảnh:
              du Xuân, cưới hỏi, sự kiện công ty, chụp kỷ yếu – look trang trọng mà không quá rực.
            </p>
            <ul>
              <li><strong>Giữ phom đẹp</strong>: thân áo đứng, ít nhăn, tôn dáng nam giới.</li>
              <li><strong>Dễ phối</strong>: hợp quần âu/khaki đen – nâu sẫm; giày loafer/oxford.</li>
              <li><strong>Ý nghĩa may mắn</strong>: gam ấm tượng trưng tài lộc – phù hợp dịp lễ Tết.</li>
            </ul>

            <h5 className="mt-4">Thiết kế nổi bật</h5>
            <p>
              Phom <strong>cổ trụ (Mandarin)</strong> tối giản, <strong>xẻ tà hai bên</strong> tạo độ thoải mái khi di chuyển,
              <strong>túi ẩn</strong> tiện dụng. Họa tiết gấm mô-típ cung đình/hoa văn cổ điển chạy toàn thân, đường may kỹ,
              nẹp trong gọn – diện lên <em>chỉnh tề và hiện đại</em>.
            </p>

            {/* Ảnh minh họa giữa */}
            <img src={aonam1} alt="Chi tiết chất liệu gấm jacquard áo dài nam" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Gấm jacquard ánh nhẹ – bền màu, đứng phom, ít nhăn; hoàn hảo cho ảnh sự kiện &amp; lookbook.
            </p>

            <h5 className="mt-4">Chất liệu &amp; hoàn thiện</h5>
            <ul>
              <li><strong>Fabric:</strong> Gấm jacquard dày vừa (gợi ý 220–260gsm), mặt trong êm, không cấn da.</li>
              <li><strong>Định hình:</strong> Ép mex cổ – nẹp vừa đủ để giữ dáng nhưng không cứng.</li>
              <li><strong>Đường may:</strong> Mũi dày 3–3.5mm, lược chỉ thừa, lai gọn; kiểm chất lượng 2 lớp (in-line &amp; final).</li>
            </ul>
            <p>
              <strong>Bảo quản:</strong> giặt tay/giặt máy chế độ dịu 30°C, lộn trái khi ủi (110–120°C), treo bằng móc bản rộng;
              tránh ma sát mạnh để bảo toàn vân gấm.
            </p>

            <h5 className="mt-4">Phối đồ &amp; dịp sử dụng</h5>
            <ul>
              <li><strong>Công sở/sự kiện:</strong> quần tây đen + loafer nâu đậm; đồng hồ mặt nhỏ, nhẫn kim loại.</li>
              <li><strong>Lễ Tết/cưới hỏi:</strong> thêm khăn gấm đồng tông hoặc brooch kim loại nhỏ.</li>
              <li><strong>Chụp ảnh nhóm/doanh nghiệp:</strong> phối đồng bộ tông ấm (đỏ gạch – nâu – đen) để nổi bật tập thể.</li>
            </ul>

            <h5 className="mt-4">Bảng size &amp; cách chọn nhanh (tham khảo)</h5>
            <ul>
              <li><strong>S:</strong> 1m60–1m68 / 55–63kg</li>
              <li><strong>M:</strong> 1m67–1m73 / 63–70kg</li>
              <li><strong>L:</strong> 1m72–1m78 / 70–78kg</li>
              <li><strong>XL:</strong> 1m77–1m83 / 78–86kg</li>
              <li><strong>2XL:</strong> 1m82–1m88 / 86–95kg</li>
            </ul>
            <p className="mb-0">
              Đo 4 vị trí: vai – ngực – eo – dài áo. Nếu đứng giữa hai size, chọn size lớn hơn để giữ độ thoải mái khi cử động.
            </p>

            <h5 className="mt-4">Chính sách sỉ &amp; đặt may đồng phục nam</h5>
            <p>
              TS GLOBAL nhận <strong>wholesale/OEM</strong> áo dài nam cho studio, công ty, sự kiện – linh hoạt số lượng.
              <strong>MOQ gợi ý:</strong> từ 20–50 chiếc mỗi màu; <strong>lead time</strong> 7–15 ngày tùy size run.
              Hỗ trợ thêu logo, gắn patch, set đồng phục gia đình/corporate theo bảng màu riêng.
            </p>
            <ul>
              <li>Báo giá theo bậc số lượng – tối ưu khi gom size set.</li>
              <li>Nhận chỉnh form theo bảng đo hoặc may đo cá nhân (surcharge nhẹ).</li>
              <li>QC 100% trước đóng gói – cung cấp ảnh kiểm hàng &amp; checklist.</li>
            </ul>

            {/* Ảnh minh họa tiếp */}
            <img src={aonam} alt="Phối cùng quần đen và phụ kiện tối giản" className="img-fluid rounded mb-2" />
            <p className="fst-italic text-center text-secondary">
              Phối quần đen &amp; phụ kiện tối giản để giữ trọng tâm vào chất liệu và tông màu ấm của áo dài.
            </p>

            <h5 className="mt-4">Quy trình đặt hàng nhanh (5 bước)</h5>
            <ol>
              <li><strong>Chọn mẫu &amp; màu</strong> (gạch ngói/terracotta, đỏ rượu, đen ánh).</li>
              <li><strong>Chốt size/đo</strong> theo bảng đo hoặc form chuẩn S–2XL.</li>
              <li><strong>Báo giá &amp; đặt cọc</strong> 30–50%, chốt lịch giao.</li>
              <li><strong>Sản xuất &amp; QC</strong> theo tiến độ; gửi ảnh thành phẩm trước khi đóng gói.</li>
              <li><strong>Giao hàng</strong> &amp; hỗ trợ đổi size trong 3–7 ngày (hàng nguyên tag).</li>
            </ol>

            <h5 className="mt-4">Gợi ý trưng bày &amp; truyền thông</h5>
            <ul>
              <li>Backdrop gỗ/đèn vàng ấm để tôn vân gấm; chụp cận chất liệu &amp; cổ trụ.</li>
              <li>Combo “Ready for Tết”: áo dài + quần đen + loafer – kèm voucher chỉnh form miễn phí.</li>
              <li>Video 30–45s khi bước đi/xoay người để thấy độ rủ và ánh gấm.</li>
            </ul>

            <h5 className="mt-4">TS GLOBAL – Đối tác OEM/ODM &amp; wholesale</h5>
            <p>
              TS GLOBAL đồng hành từ khâu chọn vải – phát triển mẫu – sản xuất – QC – đóng gói. Chúng tôi cam kết
              <strong> chất lượng, tiến độ, dịch vụ sau bán</strong> để áo dài của bạn luôn “đẹp trên người &amp; đẹp trên hình”.
              Liên hệ để nhận lookbook, bảng màu và báo giá sỉ cập nhật.
            </p>

            <p className="mt-4">
              Một chiếc áo dài gấm chuẩn mực sẽ giúp phái mạnh nổi bật theo cách tinh tế nhất. Chọn đúng chất liệu, đúng phom,
              bạn đã sở hữu outfit Thu–Đông <strong>ấm áp – lịch lãm – bền mốt</strong>.
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
