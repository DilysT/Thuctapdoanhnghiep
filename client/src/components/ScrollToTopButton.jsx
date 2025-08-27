// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const PHONE_NUMBER = '+84938078488';
  const ZALO_LINK = 'https://zalo.me/938078488';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const wrapVis = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(.92)',
    pointerEvents: visible ? 'auto' : 'none',
    transition: 'opacity .25s ease, transform .25s ease',
  };

  return (
    <>
      <style>{`
        .ts-fab-stack{
          position: fixed; right: 22px; bottom: 22px;
          display: flex; flex-direction: column; gap: 12px; z-index: 1100;
        }
        .ts-fab{
          position: relative;
          width: 52px; height: 52px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center;
          border:none; outline:none; cursor:pointer; color:#fff;
          box-shadow: 0 6px 16px rgba(0,0,0,.30);
          transition: filter .2s ease, box-shadow .2s ease, transform .2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .ts-fab:hover{ filter:brightness(1.06); box-shadow:0 10px 20px rgba(0,0,0,.35); transform: translateY(-1px) scale(1.03); }

        /* Màu sắc và hiệu ứng cho các nút */
        .ts-zalo{
          background: linear-gradient(135deg, #0068ff, #0091ff);
          box-shadow: 0 8px 18px rgba(0, 104, 255, 0.35), inset 0 -2px 0 rgba(0,0,0,.08);
        }
        .ts-phone{ 
          background: linear-gradient(135deg, #75bf6eff, #07b11dff);
          box-shadow: 0 8px 18px rgba(191, 161, 110, 0.35), inset 0 -2px 0 rgba(0,0,0,.08);
        }
        .ts-top{ 
          background: linear-gradient(135deg, #00a6d6, #00c4ff);
          box-shadow: 0 8px 18px rgba(0, 166, 214, 0.35), inset 0 -2px 0 rgba(0,0,0,.08);
        }

        /* Hiệu ứng lắc và halo đồng bộ */
        .ts-wiggle{ animation: ts-wiggle 2.4s ease-in-out infinite; transform-origin:center; }
        .ts-fab:hover.ts-wiggle{ animation-play-state: paused; }
        @keyframes ts-wiggle{
          0%,100% { transform: rotate(0deg); }
          12%     { transform: rotate(-10deg); }
          24%     { transform: rotate(8deg); }
          36%     { transform: rotate(-6deg); }
          48%     { transform: rotate(5deg); }
          60%     { transform: rotate(-3deg); }
        }
        .ts-halo::after{
          content:""; position:absolute; inset:-6px; border-radius:50%;
          border:2px solid rgba(255,255,255,.65);
          animation: ts-halo 2.8s ease-out infinite; pointer-events:none;
        }
        .ts-fab:hover.ts-halo::after{ animation-play-state: paused; }
        @keyframes ts-halo{
          0%   { transform: scale(.6); opacity:.55; }
          70%  { transform: scale(1.25); opacity:0; }
          100% { opacity:0; }
        }
        
        /* Đồng bộ kích thước icon */
        .ts-icon {
          width: 26px;
          height: 26px;
        }
        
        /* Icon Zalo chính thức */
        .ts-zalo-icon {
          width: 50px;
          height: 50px;
        }
        
        /* Badge thông báo cho Zalo */
        .ts-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          background: #ff3b30;
          border: 2px solid #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: white;
          animation: ts-pulse 2s infinite;
        }
        
        @keyframes ts-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        /* Tối ưu hiển thị chữ Zalo */
        .zalo-text {
          font-family: 'Arial', 'Helvetica', sans-serif;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="ts-fab-stack">
        {/* ZALO - Với icon chính thức được cải thiện */}
        <div style={wrapVis}>
          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo Chat"
            title="Zalo Chat"
            className="ts-fab ts-zalo ts-wiggle ts-halo"
          >
            {/* Badge thông báo */}
            <div className="ts-badge">1</div>
            
            {/* Icon Zalo chính thức với chữ rõ ràng */}
            <svg className="ts-zalo-icon" viewBox="0 0 64 64" aria-hidden="true">
              {/* Bubble chat màu trắng với viền xanh nhẹ để nổi bật */}
              <path fill="#fff" stroke="#0068ff" stroke-width="0.5" d="M46.5,16h-29C9.5,16,4,21.5,4,28.1v0.2c0,6.5,5.5,11.8,13.5,11.8h1.7c1.8,0,3.6,0.5,5.1,1.4l7.5,4.1
                c0.9,0.5,1.9-0.4,1.7-1.4l-1.5-5.2c3.9-1.1,6.7-4.1,6.7-7.7v-0.2C58.5,21.5,53,16,46.5,16z"/>
              {/* Chữ Zalo màu xanh - rõ ràng và đậm hơn */}
              <text x="32" y="38" textAnchor="middle" className="zalo-text" fill="#0068ff">Zalo</text>
            </svg>
          </a>
        </div>

        {/* HOTLINE */}
        <div style={wrapVis}>
          <a
            href={`tel:${PHONE_NUMBER.replace(/[^+0-9]/g, '')}`}
            aria-label="Gọi hotline"
            title={PHONE_NUMBER}
            className="ts-fab ts-phone ts-wiggle ts-halo"
          >
            <svg className="ts-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1c0 1.25.19 2.46.56 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
            </svg>
          </a>
        </div>

        {/* SCROLL TO TOP */}
        <div style={wrapVis}>
          <button
            onClick={scrollToTop}
            aria-label="Lên đầu trang"
            title="Lên đầu trang"
            className="ts-fab ts-top"
          >
            <svg className="ts-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 4l-8 8h5v8h6v-8h5z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}