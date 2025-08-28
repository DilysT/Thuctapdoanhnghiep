// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
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

const carouselItems = [
  {
    img: hangsi,
    title: 'Cách tìm nguồn hàng quần áo giá sỉ bán online',
    date: 'June 11, 2024',
    link: '/bai-viet/nguon-hang-ban-si-online',
  },
  {
    img: phukien,
    title: 'Top 5 nguồn hàng phụ kiện thời trang không thể bỏ lỡ',
    date: 'July 20, 2024',
    link: '/bai-viet/phu-kien-thoi-trang-si',
  },
  {
    img: giaydep,
    title: 'Nguồn hàng giày dép giá sỉ uy tín tại TP.HCM',
    date: 'August 5, 2024',
    link: '/bai-viet/giay-dep-gia-si-tphcm',
  },
  {
    img: kid,
    title: 'Bí kíp nhập sỉ quần áo trẻ em hiệu quả',
    date: 'May 30, 2024',
    link: '/bai-viet/quan-ao-tre-em-si',
  },
];

export default function Sidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide mỗi 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="sidebar-section text-white">

      {/* Box 1: Theo dõi */}
      <div className="bg-dark p-3 mb-4 rounded">
        <h6 className="mb-2 fw-bold">Theo dõi</h6>
        <hr className="border-light" />
        <div className="bg-warning text-dark p-2 rounded small">
          Vui lòng liên hệ với chúng tôi để được tư vấn và hợp tác:
        </div>
      </div>

      {/* Box 2: Carousel tổng hợp 5 */}
      <div className="bg-dark mb-4 rounded position-relative overflow-hidden">
        <img
          src={carouselItems[currentSlide].img}
          alt="carousel slide"
          className="img-fluid w-100"
          style={{ height: '170px', objectFit: 'cover' }}
        />
        <button
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
          onClick={handlePrev}
          style={{ zIndex: 2 }}
        >
          ‹
        </button>
        <button
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
          onClick={handleNext}
          style={{ zIndex: 2 }}
        >
          ›
        </button>
        <div className="position-absolute bottom-0 bg-dark bg-opacity-75 text-white p-2 w-100">
          <small className="text-light d-block mb-1">🗓️ {carouselItems[currentSlide].date}</small>
          <Link to={carouselItems[currentSlide].link} className="text-white fw-semibold text-decoration-none">
            {carouselItems[currentSlide].title}
          </Link>
        </div>
      </div>

 <div className="bg-dark p-3 mb-4 rounded">
  <h6 className="mb-3 fw-bold">🔥 Nhiều lượt xem</h6>
  {[
    {
      number: 1,
      img: croc,
      title: 'Top 12 Cách Phân Biệt Crocs Real và Crocs Fake Chính Xác',
      link: '/bai-viet/phan-biet-crocs-real-fake',
    },
    {
      number: 2,
      img: chodaumoi,
      title: 'Tổng hợp 5 chợ đầu mối phụ kiện trang sức chất lượng nhất',
      link: '/bai-viet/cho-si-phu-kien-trang-suc',
    },
    {
      number: 3,
      img: lokim,
      title: 'Quần áo bị lỗ kim? Đừng lo, đã có cách khắc phục!',
      link: '/bai-viet/lo-kim-quan-ao',
    },
    {
      number: 4,
      img: watch,
      title: 'Top 10 xưởng sỉ đồng hồ uy tín, chất lượng nhất hiện nay',
      link: '/bai-viet/xuong-si-dong-ho-uy-tin',
    },
    {
      number: 5,
      img: teen,
      title: 'Xu hướng ăn mặc của giới trẻ hiện nay: phong cách nào đang thịnh hành?',
      link: '/bai-viet/xu-huong-gioi-tre-2024',
    },
  ].map((item, idx) => (
    <Link
      to={item.link}
      key={idx}
      className="d-flex mb-3 text-decoration-none text-white"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.text-title').style.color = '#bfa16e';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.text-title').style.color = '';
      }}
    >
      <div className="position-relative me-2 flex-shrink-0">
        <img
          src={item.img}
          alt={`view-${item.number}`}
          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
          className="rounded"
        />
      </div>
      <div className="small">
        <div className="fw-semibold text-title">{item.title}</div>
        <div className="text-muted">{item.date}</div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}
