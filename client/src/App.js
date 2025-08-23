// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PostDetailVictoria from './pages/PostDetail/PostDetailVictoria';
import PostDetailThuDong from './pages/PostDetail/PostDetailThuDong';
import PostDetailLoewe from './pages/PostDetail/PostDetailLoewe';

import PostNguonHangSiOnline from './pages/PostDetail/PostNguonHangSiOnline';
import PostPhuKienThoiTrangSi from './pages/PostDetail/PostPhuKienThoiTrangSi';
import PostGiayDepGiaSiTPHCM from './pages/PostDetail/PostGiayDepGiaSiTPHCM';
import PostQuanAoTreEmSi from './pages/PostDetail/PostQuanAoTreEmSi';

import PostCrocsRealFake from './pages/PostDetail/PostCrocsRealFake';
import PostChoSiPhuKienTrangSuc from './pages/PostDetail/PostChoSiPhuKienTrangSuc';
import PostLoKimQuanAo from './pages/PostDetail/PostLoKimQuanAo';
import PostXuongSiDongHoUyTin from './pages/PostDetail/PostXuongSiDongHoUyTin';
import PostXuHuongGioiTre2024 from './pages/PostDetail/PostXuHuongGioiTre2024';

import AllPosts from './pages/AllPosts';
import FashionMen from './pages/FashionMen';
import FashionWomen from './pages/FashionWomen';
import FashionKids from './pages/FashionKids';

import AboutPage from './pages/AboutPage';
import ScrollToTopButton from './components/ScrollToTopButton';

import ServicesPartners from './pages/ServicesPartners.jsx';
import SearchResults from './pages/SearchResults';
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dich-vu-doi-tac" element={<ServicesPartners />} />

          {/* Bài viết cho sidebar */}
          <Route path="/bai-viet/phu-kien-thoi-trang-si" element={<PostPhuKienThoiTrangSi />} />
          <Route path="/bai-viet/nguon-hang-ban-si-online" element={<PostNguonHangSiOnline />} />
          <Route path="/bai-viet/giay-dep-gia-si-tphcm" element={<PostGiayDepGiaSiTPHCM />} />
          <Route path="/bai-viet/quan-ao-tre-em-si" element={<PostQuanAoTreEmSi />} />
          <Route path="/bai-viet/phan-biet-crocs-real-fake" element={<PostCrocsRealFake />} />
          <Route path="/bai-viet/cho-si-phu-kien-trang-suc" element={<PostChoSiPhuKienTrangSuc />} />
          <Route path="/bai-viet/lo-kim-quan-ao" element={<PostLoKimQuanAo />} />
          <Route path="/bai-viet/xuong-si-dong-ho-uy-tin" element={<PostXuongSiDongHoUyTin />} />
          <Route path="/bai-viet/xu-huong-gioi-tre-2024" element={<PostXuHuongGioiTre2024 />} />
          <Route path="/bai-viet" element={<AllPosts />} />

          {/* Thời trang nam, nữ, trẻ em */}
          <Route path="/thoi-trang-nam" element={<FashionMen />} />
          <Route path="/thoi-trang-nu" element={<FashionWomen />} />
          <Route path="/thoi-trang-tre-em" element={<FashionKids />} />

          {/* Các bài viết khác */}
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/bai-viet/victoria-secret-2024" element={<PostDetailVictoria />} />
          <Route path="/bai-viet/ao-nam-thu-dong" element={<PostDetailThuDong />} />
          <Route path="/bai-viet/loewe-xuan-he-2025" element={<PostDetailLoewe />} />
          <Route path="/search" element={<SearchResults />} />

         
        </Routes>

        <ScrollToTopButton />
      </MainLayout>
    </Router>
  );
}

export default App;
