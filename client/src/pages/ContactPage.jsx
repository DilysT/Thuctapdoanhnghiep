// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { createQuote } from "../services/quotes";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: (fd.get("name") || "").trim(),
      company: (fd.get("company") || "").trim(),
      email: (fd.get("email") || "").trim(),
      phone: (fd.get("phone") || "").trim(),
      message: (fd.get("message") || "").trim(),
      // product_ids: [1,2] // nếu cần gửi kèm
    };

    setSubmitting(true);
    try {
      await createQuote(payload);          // ⬅️ gọi API qua service
      formEl.reset();
      setSent(true);
      setTimeout(() => setSent(false), 2800);
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Gửi yêu cầu thất bại";
      alert(`❌ ${msg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <style>{`
        /* ===== Theme tokens ===== */
        :root { --primary:#bfa16e; --primary-2:#e8d6a7; }
        @media (prefers-color-scheme:light){
          .contact-page{ --bg:#f8fafc; --text:#0b1e36; --muted:#5c6f8b; --card:#ffffff; --border:rgba(0,0,0,.08); --shadow:0 10px 30px rgba(0,0,0,.10); --shadow-lg:0 18px 46px rgba(0,0,0,.16); --line:#cbd5e1; }
        }
        @media (prefers-color-scheme:dark){
          .contact-page{ --bg:#0b1220; --text:#ffffff; --muted:rgba(255,255,255,.75); --card:#12161d; --border:rgba(255,255,255,.12); --shadow:0 10px 30px rgba(0,0,0,.55); --shadow-lg:0 24px 60px rgba(0,0,0,.65); --line:#263143; }
        }

        /* ===== page bg + container ===== */
        .contact-page{
          background:
            radial-gradient(900px 400px at 100% -10%, rgba(191,161,110,.18), transparent 60%),
            radial-gradient(1000px 500px at -10% 0%, rgba(191,161,110,.12), transparent 60%),
            var(--bg);
          min-height:100%;
        }
        .wrap{max-width:1100px;margin:0 auto;padding:40px 16px 56px;}

        /* ===== heading ===== */
        .heading{text-align:center;margin-bottom:22px;}
        .title{font-weight:900;letter-spacing:.01em;font-size:clamp(28px,3.2vw,42px);margin:0;color:var(--text);}
        .sub{color:var(--muted);margin-top:8px;max-width:760px;margin-inline:auto;}

        /* ===== card big ===== */
        .card{
          background:var(--card);
          border:1px solid var(--border);
          border-radius:22px;
          box-shadow:var(--shadow);
          overflow:hidden;
        }
        .grid{display:grid;grid-template-columns:320px 1fr;}
        @media (max-width: 992px){ .grid{grid-template-columns:1fr;} }

        /* ===== left panel (gold) ===== */
        .left{
          background: linear-gradient(165deg, var(--primary) 0%, #a58a55 55%, #7d6a3e 100%);
          color:#fff; padding:26px 22px; position:relative;
        }
        .left h3{font-weight:800; margin:0 0 6px 0;}
        .left p{opacity:.9; margin:0 0 18px 0;}
        .bubble{
          position:absolute; right:-60px; bottom:-60px; width:220px; height:220px; border-radius:50%;
          background: linear-gradient(180deg, rgba(255,255,255,.25), rgba(255,255,255,.05));
          filter: blur(1px);
        }
        .line{display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px dashed rgba(255,255,255,.35);}
        .line:last-child{border-bottom:0;}
        .ico{
          width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center;
          background:rgba(255,255,255,.15);
          border:1px solid rgba(255,255,255,.25);
          font-size:18px;
        }
        .left a{ color:#fff; text-decoration:none; border-bottom:1px solid rgba(255,255,255,.35); }
        .left a:hover{ border-color:#fff; }

        /* ===== right form ===== */
        .right{ padding:26px 24px;}
        .form-row{display:grid; grid-template-columns:1fr 1fr; gap:18px;}
        @media (max-width: 768px){ .form-row{grid-template-columns:1fr;} }
        .group{ margin-bottom:18px; }
        .label{
          color:var(--muted); font-size:.88rem; margin-bottom:6px; display:block; font-weight:600;
        }
        .input{
          width:100%; padding:10px 6px;
          background:transparent; color:var(--text);
          border:0; border-bottom:2px solid var(--line);
          outline:none; transition:border-color .18s ease, box-shadow .18s ease;
        }
        .input::placeholder{ color:#94a3b8; opacity:.7; }
        .input:focus{
          border-bottom-color: var(--primary);
          box-shadow: 0 6px 0 -4px var(--primary);
        }
        textarea.input{ min-height:120px; resize:vertical; }

        .actions{display:flex; align-items:center; gap:14px; margin-top:10px;}
        .btn{
          position:relative; display:inline-block; border:0; outline:0; cursor:pointer;
          padding:12px 18px; border-radius:12px; font-weight:800; letter-spacing:.06em; text-transform:uppercase;
          background: linear-gradient(90deg, var(--primary-2), var(--primary));
          color:#1b2838;
          transition: transform .15s ease, box-shadow .2s ease;
          box-shadow: 0 8px 18px rgba(191,161,110,.28);
        }
        .btn:hover{ transform: translateY(-1px); box-shadow: 0 12px 28px rgba(191,161,110,.36); }
        .btn:active{ transform: translateY(0); }

        .btn:hover::after{ transform: translateX(120%); }

        /* ===== toast ===== */
        .toast{
          position:fixed; right:16px; bottom:16px; background:var(--card); color:var(--text);
          border:1px solid var(--border); border-left:6px solid var(--primary);
          padding:12px 16px; border-radius:14px; box-shadow:var(--shadow-lg); z-index:1080;
          animation:slide .35s ease;
        }
        @keyframes slide { from{ transform:translateY(10px); opacity:0; } to{ transform:translateY(0); opacity:1; } }
      `}</style>

      <div className="wrap">
        {/* Head */}
        <header className="heading">
          <h1 className="title">Get In Touch</h1>
          <p className="sub">
            Hãy cho chúng tôi biết nhu cầu của bạn. Đội ngũ sẽ phản hồi trong vòng <strong>24 giờ</strong> với tư vấn phù hợp
            và báo giá minh bạch.
          </p>
        </header>

        {/* Card */}
        <div className="card grid">
          {/* Left panel */}
          <aside className="left">
            <h3>Contact Information</h3>
            <p>Chúng tôi đồng hành từ tư vấn chất liệu, thiết kế mẫu đến sản xuất và giao hàng đúng hẹn.</p>

<div className="line"> 
  <div className="ico">📞</div>
  <div>
    <div><a href="tel:0938078488">(+84) 938 078 488</a></div>
  </div>
</div>

<div className="line">
  <div className="ico">✉️</div>
  <div><a href="mailto:info@tsglobal.vn">info@tsglobal.vn</a></div> 

</div>

<div className="line">
  <div className="ico">📍</div>
  <div>98/2C Đường Tuyến 2, Ấp 4, Xã Xuân Thới Thượng, Huyện Hóc Môn, TP. Hồ Chí Minh, Việt Nam</div>
</div>

            <div className="bubble" aria-hidden="true"></div>
          </aside>

          {/* Right form */}
          <section className="right">
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <div className="group">
                  <label className="label">Tên khách hàng</label>
                  <input className="input" name="Tên" type="text" placeholder="Tên của bạn" required />
                </div>
                <div className="group">
                  <label className="label">Email</label>
                  <input className="input" name="email" type="email" placeholder="Email của bạn" required />
                </div>
              </div>

              <div className="form-row">
                <div className="group">
                  <label className="label">Công ty</label>
                  <input className="input" name="Tên công ty" type="text" placeholder="Công Ty ABC" required />
                </div>
                <div className="group">
                  <label className="label">Số điện thoại</label>
                  <input className="input" name="phone" type="tel" placeholder="0xxxxxxxx" required />
                </div>
              </div>

              <div className="group">
                <label className="label">Lời nhắn</label>
                <textarea className="input" name="message" placeholder="Viết lời nhắn tại đây..." required />
              </div>

              <div className="actions">
                <button className="btn" type="submit" disabled={submitting}>
                  {submitting ? "Đang gửi..." : "Gửi thông tin"}
                </button>
                <span style={{ color: "var(--muted)" }}>Hoặc email trực tiếp cho chúng tôi.</span>
              </div>
            </form>
          </section>
        </div>
      </div>

      {sent && <div className="toast">✅ Đã nhận thông tin! Chúng tôi sẽ phản hồi sớm.</div>}
    </div>
  );
}
