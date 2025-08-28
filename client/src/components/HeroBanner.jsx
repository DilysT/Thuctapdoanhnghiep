import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeroBanner.css';

// ảnh nền chính
import hero1 from '../assets/hero1.jpg';

// 3 ảnh bạn muốn dùng
import blouse2 from '../assets/banner1/blouse.jpg';
import aonam from '../assets/banner1/aonam.webp';
import lowoeCamel from '../assets/banner1/lowoe2.webp';

const posts = [
  {
    id: 1,
    title: 'Áo kiểu tay bồng nơ eo – Trắng: Thanh lịch cho công sở & dự tiệc',
    date: 'January 21, 2025',
    image: blouse2,
    link: '/bai-viet/victoria-secret-2024',
    teaser: 'Chất liệu mềm rũ, tôn dáng – phối quần âu hay chân váy đều ổn.',
  },
  {
    id: 2,
    title: 'Áo dài nam Thu–Đông gấm jacquard: Lịch lãm cho lễ Tết, sự kiện & doanh nghiệp',
    date: 'September 6, 2025',
    image: aonam,
    link: '/bai-viet/ao-nam-thu-dong',
    teaser: 'Phom đứng, hoạ tiết jacquard tinh tế – lên ảnh cực sang.',
  },
  {
    id: 3,
    title: 'Loewe Men Xuân-Hè 2025: 3 key look từ sàn diễn đến đời thường',
    date: 'February 2, 2025',
    image: lowoeCamel,
    link: '/bai-viet/loewe-xuan-he-2025',
    teaser: 'Gam màu camel – tối giản nhưng chi tiết rất “đắt”.',
  },
];

export default function HeroBanner() {
  return (
    <div className="hero-banner position-relative text-white">
      {/* Background lớn mờ */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <div className="container-fluid position-relative z-2 py-5">
        {/* Tiêu đề chung */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Thời trang giá sỉ – Nguồn hàng thời trang đa dạng, giá cả cạnh tranh
          </h2>
          <p className="lead">
            Cập nhật liên tục những xu hướng mới nhất, đáp ứng mọi nhu cầu của
            các shop thời trang.
          </p>
        </div>

        {/* Card 3 banner */}
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-12 col-md-4">
              <Link
                to={post.link}
                className="hero-card text-white text-decoration-none d-block h-100"
              >
                <div className="hero-img-wrapper">
                  <img src={post.image} alt={post.title} className="hero-img" />
                  <div className="hero-overlay">
                    {/* Phần đứng yên ở trên */}
                    <div className="hero-meta">
                      <p className="hero-date">{post.date}</p>
                      <h5 className="hero-title">{post.title}</h5>
                    </div>
                    {/* Teaser: chỉ trồi lên khi hover */}
                    {post.teaser && (
                      <p className="hero-teaser">{post.teaser}</p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
