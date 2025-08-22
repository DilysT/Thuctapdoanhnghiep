// src/pages/AllPosts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hangsi from '../assets/postdetail/hang_si.png';
import phukien from '../assets/postdetail/phukien.jpg';
import giaydep from '../assets/postdetail/giaydep.jpg';
import kid from '../assets/postdetail/kid.jpg';
import croc from '../assets/postdetail/croc.jpg';
import watch from '../assets/postdetail/watch1.jpg';
import teen from '../assets/postdetail/teen1.png';
import lokim from '../assets/postdetail/lokim.jpg';
import chodaumoi from '../assets/postdetail/chodaumoi1.jpg'
import blouse2 from '../assets/banner1/blouse2.jpg';
import aonam from '../assets/banner1/aonam.webp';
import lowoeCamel from '../assets/banner1/lowoe3.jpg'
export default function AllPosts() {
  const posts = [
    { title: 'Cách tìm nguồn hàng quần áo giá sỉ bán online', date: '11/06/2024', excerpt: 'Tổng hợp kênh tìm nguồn hàng + checklist chọn nhà cung cấp cho chủ shop online.', link: '/bai-viet/nguon-hang-ban-si-online', img: hangsi, tag: 'Tin tức' },
    { title: 'Top 5 nguồn hàng phụ kiện thời trang không thể bỏ lỡ', date: '20/07/2024', excerpt: 'Chợ đầu mối, xưởng OEM/ODM, B2B và mẹo nhập phụ kiện lãi tốt.', link: '/bai-viet/phu-kien-thoi-trang-si', img: phukien, tag: 'Tin tức' },
    { title: 'Nguồn hàng giày dép giá sỉ uy tín tại TP.HCM', date: '05/08/2024', excerpt: 'Bản đồ mua sỉ giày dép tại Sài Gòn + checklist kiểm hàng nhanh.', link: '/bai-viet/giay-dep-gia-si-tphcm', img: giaydep, tag: 'Tin tức' },
    { title: 'Bí kíp nhập sỉ quần áo trẻ em hiệu quả', date: '30/05/2024', excerpt: 'Run size thông minh, tiêu chí kiểm chất lượng và chiến lược giá.', link: '/bai-viet/quan-ao-tre-em-si', img: kid, tag: 'Tin tức' },
    { title: 'Top 12 cách phân biệt Crocs Real và Crocs Fake chính xác', date: '12/03/2024', excerpt: '12 dấu hiệu + checklist 60 giây để phân biệt Crocs thật–giả.', link: '/bai-viet/phan-biet-crocs-real-fake', img: croc, tag: 'Hướng dẫn' },
    { title: 'Tổng hợp 5 chợ đầu mối phụ kiện trang sức chất lượng nhất', date: '21/04/2024', excerpt: 'An Đông – Tân Bình – Ninh Hiệp và tiêu chí chọn nhà sỉ trang sức.', link: '/bai-viet/cho-si-phu-kien-trang-suc', img: chodaumoi, tag: 'Nguồn hàng' },
    { title: 'Quần áo bị lỗ kim? Đã có cách khắc phục!', date: '10/02/2024', excerpt: 'Nguyên nhân, cách xử lý theo chất liệu và mẹo phòng tránh.', link: '/bai-viet/lo-kim-quan-ao', img: lokim, tag: 'Mẹo hay' },
    { title: 'Top 10 xưởng sỉ đồng hồ uy tín, chất lượng hiện nay', date: '18/01/2024', excerpt: 'Tiêu chí chọn xưởng, hồ sơ kỹ thuật và chính sách bảo hành.', link: '/bai-viet/xuong-si-dong-ho-uy-tin', img: watch, tag: 'Nguồn hàng' },
    { title: 'Xu hướng ăn mặc của giới trẻ 2024: phong cách nào đang thịnh hành?', date: '02/06/2024', excerpt: 'Tối giản nâng cấp, Y2K thực dụng và athleisure lên ngôi.', link: '/bai-viet/xu-huong-gioi-tre-2024', img: teen, tag: 'Xu hướng' },
    { title: 'Áo kiểu tay bồng nơ eo', date: '15/09/2025', excerpt: 'Thanh lịch cho công sở & dự tiệc.', link: '/bai-viet/victoria-secret-2025', img: blouse2, tag: 'Sự kiện' },
    { title: 'Áo nam Thu – Đông: gợi ý phối đồ', date: '12/10/2024', excerpt: 'Chọn chất liệu và layer ấm áp cho mùa Thu–Đông.', link: '/bai-viet/ao-nam-thu-dong', img: aonam, tag: 'Phong cách' },
    { title: 'Loewe Men Xuân – Hè 2025', date: '02/11/2024', excerpt: '“Bảo tàng nghệ thuật” thu nhỏ trên sàn diễn Loewe.', link: '/bai-viet/loewe-xuan-he-2025', img: lowoeCamel, tag: 'Sự kiện' },
  ];

  return (
    <div className="container my-4">
     <style>{`
  .post-grid-title { 
    font-weight:800; 
    margin-bottom:1rem; 
    color:#bfa16e; /* 🎯 Màu yêu cầu */
  }
  .post-card {
    border-radius:14px; 
    overflow:hidden;
    transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease;
    cursor: pointer;
    text-decoration: none;
    display: block;
  }
  .post-card:hover { transform: translateY(-6px) scale(1.02); }
  .post-thumb { object-fit: cover; width:100%; height: 170px; }
  @media (min-width: 768px){ .post-thumb{ height: 160px; } }
  @media (min-width: 1200px){ .post-thumb{ height: 150px; } }
  .post-title {
    font-weight: 800; margin:0 0 .35rem 0; font-size:1rem;
    display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
  }
  .post-excerpt {
    font-size:.9rem; margin:0;
    display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
  }
  .chip { display:inline-block; padding:.25rem .5rem; border-radius:999px; font-size:.75rem; font-weight:600; }
  .meta { font-size:.78rem; }
  /* Light theme */
  @media (prefers-color-scheme: light) {
    .post-card { background:#fff; border:1px solid rgba(0,0,0,.08); box-shadow:0 8px 20px rgba(0,0,0,.12); }
    .post-card:hover { box-shadow:0 14px 30px rgba(0,0,0,.18); border-color:rgba(13,110,253,.3); }
    .post-title { color:#212529; }
    .post-excerpt { color:#5c6f8b; }
    .chip { background:rgba(255,193,7,.18); color:#8a6a00; }
    .meta { color:rgba(0,0,0,.55); }
  }
  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    .post-card { background:#17181a; border:1px solid rgba(255,255,255,.1); box-shadow:0 8px 20px rgba(0,0,0,.45); }
    .post-card:hover { box-shadow:0 14px 30px rgba(0,0,0,.6); border-color:rgba(0,166,214,.5); }
    .post-title { color:#fff; }
    .post-excerpt { color:rgba(255,255,255,.78); }
    .chip { background:rgba(255,193,7,.15); color:#ffc107; }
    .meta { color:rgba(255,255,255,.6); }
  }
`}</style>


      <h1 className="post-grid-title">Tất cả bài viết</h1>
      <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-xl-4">
        {posts.map((p, i) => (
          <div className="col" key={i}>
            <Link to={p.link} className="post-card h-100">
              <img src={p.img} alt={p.title} className="post-thumb" />
              <div className="p-3 d-flex flex-column gap-2">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="chip">{p.tag}</span>
                  <span className="meta">🗓 {p.date}</span>
                </div>
                <h3 className="post-title">{p.title}</h3>
                <p className="post-excerpt">{p.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
