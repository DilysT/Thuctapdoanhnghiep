// src/data/searchIndex.js
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

// ====== BÀI VIẾT (giữ nguyên như bạn đang có) ======
const posts = [
  { title: 'Cách tìm nguồn hàng quần áo giá sỉ bán online', path: '/bai-viet/nguon-hang-ban-si-online', keywords: 'nguon hang si quan ao shop online', img: hero3, tag: 'Tin tức', date: '11/06/2024', excerpt: 'Tổng hợp kênh tìm nguồn hàng + checklist chọn nhà cung cấp cho chủ shop online.' },
  { title: 'Top 5 nguồn hàng phụ kiện thời trang không thể bỏ lỡ', path: '/bai-viet/phu-kien-thoi-trang-si', keywords: 'phu kien si trang suc nhap si', img: hero2, tag: 'Tin tức', date: '20/07/2024', excerpt: 'Chợ đầu mối, xưởng OEM/ODM, B2B và mẹo nhập phụ kiện lãi tốt.' },
  { title: 'Nguồn hàng giày dép giá sỉ uy tín tại TP.HCM', path: '/bai-viet/giay-dep-gia-si-tphcm', keywords: 'giay dep si tphcm wholesale shoes', img: hero1, tag: 'Tin tức', date: '05/08/2024', excerpt: 'Bản đồ mua sỉ giày dép tại Sài Gòn + checklist kiểm hàng nhanh.' },
  { title: 'Bí kíp nhập sỉ quần áo trẻ em hiệu quả', path: '/bai-viet/quan-ao-tre-em-si', keywords: 'kidswear quan ao tre em si', img: hero4, tag: 'Tin tức', date: '30/05/2024', excerpt: 'Run size thông minh, tiêu chí kiểm chất lượng và chiến lược giá.' },
  { title: 'Top 12 cách phân biệt Crocs Real và Crocs Fake chính xác', path: '/bai-viet/phan-biet-crocs-real-fake', keywords: 'crocs that gia real fake', img: hero1, tag: 'Hướng dẫn', date: '12/03/2024', excerpt: '12 dấu hiệu + checklist 60 giây để phân biệt Crocs thật–giả.' },
  { title: 'Tổng hợp 5 chợ đầu mối phụ kiện trang sức chất lượng nhất', path: '/bai-viet/cho-si-phu-kien-trang-suc', keywords: 'cho phu kien trang suc si', img: hero2, tag: 'Nguồn hàng', date: '21/04/2024', excerpt: 'An Đông – Tân Bình – Ninh Hiệp và tiêu chí chọn nhà sỉ trang sức.' },
  { title: 'Quần áo bị lỗ kim? Đã có cách khắc phục!', path: '/bai-viet/lo-kim-quan-ao', keywords: 'lo kim quan ao sua loi det may', img: hero3, tag: 'Mẹo hay', date: '10/02/2024', excerpt: 'Nguyên nhân, cách xử lý theo chất liệu và mẹo phòng tránh.' },
  { title: 'Top 10 xưởng sỉ đồng hồ uy tín, chất lượng hiện nay', path: '/bai-viet/xuong-si-dong-ho-uy-tin', keywords: 'dong ho si xuong si', img: hero4, tag: 'Nguồn hàng', date: '18/01/2024', excerpt: 'Tiêu chí chọn xưởng, hồ sơ kỹ thuật và chính sách bảo hành.' },
  { title: 'Xu hướng ăn mặc của giới trẻ 2024', path: '/bai-viet/xu-huong-gioi-tre-2024', keywords: 'xu huong 2024 style gioi tre', img: hero2, tag: 'Xu hướng', date: '02/06/2024', excerpt: 'Tối giản nâng cấp, Y2K thực dụng và athleisure lên ngôi.' },
  { title: 'Victoria’s Secret 2024', path: '/bai-viet/victoria-secret-2024', keywords: 'victoria secret show 2024', img: hero4, tag: 'Sự kiện', date: '15/09/2024', excerpt: 'Điểm lại những khoảnh khắc ấn tượng của Victoria’s Secret 2024.' },
  { title: 'Áo nam Thu – Đông: gợi ý phối đồ', path: '/bai-viet/ao-nam-thu-dong', keywords: 'ao nam thu dong layer', img: hero3, tag: 'Phong cách', date: '12/10/2024', excerpt: 'Chọn chất liệu và layer ấm áp cho mùa Thu–Đông.' },
  { title: 'Loewe Men Xuân – Hè 2025', path: '/bai-viet/loewe-xuan-he-2025', keywords: 'loewe ss25 show', img: hero1, tag: 'Sự kiện', date: '02/11/2024', excerpt: '“Bảo tàng nghệ thuật” thu nhỏ trên sàn diễn Loewe.' },
];

// ====== SẢN PHẨM THỜI TRANG NAM (click -> /contact) ======
const menProducts = [
  { title: 'Suit tối giản Navy', keywords: 'suit navy nam cong so ao vest', img: hero3, date: '12/06/2024', excerpt: 'Form slim, chất liệu mát tay cho công sở.' },
  { title: 'Áo polo pique', keywords: 'ao polo pique nam thoang mat', img: hero4, date: '07/07/2024', excerpt: 'Thấm hút tốt, phối quần chinos cực gọn.' },
  { title: 'Quần jeans straight', keywords: 'quan jeans nam straight wash xanh', img: hero3, date: '19/08/2024', excerpt: 'Wash xanh đậm, dễ phối giày sneaker.' },
  { title: 'Áo khoác gió nhẹ', keywords: 'ao khoac gio nam chong mua nhe', img: hero4, date: '03/05/2024', excerpt: 'Chống mưa nhẹ, phù hợp đi làm/đi học.' },
  { title: 'Sơ mi oxford', keywords: 'so mi oxford nam cotton day', img: hero3, date: '28/04/2024', excerpt: 'Cotton dày dặn, đứng form, ít nhăn.' },
  { title: 'Giày sneaker retro', keywords: 'giay sneaker retro nam', img: hero4, date: '10/03/2024', excerpt: 'Phong cách cổ điển, đế êm.' },
  { title: 'Thắt lưng da tối màu', keywords: 'that lung da nam khoa kim', img: hero3, date: '14/02/2024', excerpt: 'Phối suit hoặc jeans đều đẹp.' },
  { title: 'Áo len cổ tròn', keywords: 'ao len co tron nam layer', img: hero4, date: '05/01/2024', excerpt: 'Layer với sơ mi, giữ ấm gọn gàng.' },
].map(p => ({
  ...p,
  path: `/contact?from=men&item=${encodeURIComponent(p.title)}`,
  tag: 'Nam',
}));

// ====== SẢN PHẨM THỜI TRANG NỮ (click -> /contact; đổi nếu muốn) ======
const womenProducts = [
  { title: 'Đầm lụa midi', keywords: 'dam lua midi nu di tiec cong so', img: hero4, date: '09/06/2024', excerpt: 'Dáng A, rơi mềm, hợp đi tiệc/công sở.' },
  { title: 'Áo blazer oversize', keywords: 'ao blazer oversize nu', img: hero3, date: '18/07/2024', excerpt: 'Layer cùng crop-top/jeans cực thời thượng.' },
  { title: 'Chân váy suông', keywords: 'chan vay suong nu qua goi', img: hero4, date: '02/08/2024', excerpt: 'Dài qua gối, che khuyết điểm khéo.' },
  { title: 'Áo sơ mi satin', keywords: 'ao so mi satin nu', img: hero3, date: '25/05/2024', excerpt: 'Bóng vừa, không mỏng, lên đồ tối giản.' },
  { title: 'Set athleisure', keywords: 'athleisure set do the thao nu', img: hero4, date: '03/05/2024', excerpt: 'Thoải mái và trendy.' },
  { title: 'Giày slingback', keywords: 'giay slingback nu got vua', img: hero3, date: '19/03/2024', excerpt: 'Gót vừa phải, dễ đi cả ngày.' },
  { title: 'Túi mini crossbody', keywords: 'tui mini crossbody nu', img: hero4, date: '21/02/2024', excerpt: 'Điểm nhấn nữ tính, gọn gàng.' },
  { title: 'Áo cardigan dệt kim', keywords: 'ao cardigan det kim nu', img: hero3, date: '06/01/2024', excerpt: 'Mềm, ấm, phối đầm/jeans đều xinh.' },
].map(p => ({
  ...p,
  path: `/contact?from=women&item=${encodeURIComponent(p.title)}`,
  tag: 'Nữ',
}));

// ====== SẢN PHẨM THỜI TRANG TRẺ EM (click -> /contact; đổi nếu muốn) ======
const kidsProducts = [
  { title: 'Set nỉ thể thao bé trai', keywords: 'set ni the thao be trai', img: hero2, date: '08/04/2024', excerpt: 'Thoáng, co giãn, chơi cả ngày.' },
  { title: 'Đầm cotton bé gái', keywords: 'dam cotton be gai', img: hero1, date: '22/05/2024', excerpt: 'Mềm, thấm hút, dễ mặc.' },
  { title: 'Áo khoác gió bé trai', keywords: 'ao khoac gio tre em', img: hero2, date: '15/06/2024', excerpt: 'Chống mưa nhẹ, màu tươi.' },
  { title: 'Bộ pyjama bé gái', keywords: 'bo pijama be gai', img: hero1, date: '11/07/2024', excerpt: 'Cotton mềm, an toàn da bé.' },
  { title: 'Quần short bé trai', keywords: 'quan short be trai', img: hero2, date: '03/08/2024', excerpt: 'Form thoải mái, nhiều màu.' },
  { title: 'Áo thun in hình bé gái', keywords: 'ao thun in hinh be gai', img: hero1, date: '12/08/2024', excerpt: 'Hình ngộ nghĩnh, vải mát.' },
].map(p => ({
  ...p,
  path: `/contact?from=kids&item=${encodeURIComponent(p.title)}`,
  tag: 'Trẻ em',
}));

// ====== DANH MỤC/TRANG TĨNH (tuỳ chọn) ======
const pages = [
  { title: 'Thời trang nam', path: '/thoi-trang-nam', keywords: 'menswear', img: hero3, tag: 'Danh mục' },
  { title: 'Thời trang nữ', path: '/thoi-trang-nu', keywords: 'womenswear', img: hero4, tag: 'Danh mục' },
  { title: 'Thời trang trẻ em', path: '/thoi-trang-tre-em', keywords: 'kidswear', img: hero2, tag: 'Danh mục' },
  { title: 'Giới thiệu', path: '/gioi-thieu', keywords: 'about', img: hero1, tag: 'Trang' },
  { title: 'Liên hệ', path: '/contact', keywords: 'contact', img: hero2, tag: 'Trang' },
  { title: 'Tất cả bài viết', path: '/bai-viet', keywords: 'blog news', img: hero1, tag: 'Trang' },
];

// ====== GỘP CHỈ MỤC ======
const searchIndex = [
  ...posts,
  ...menProducts,
  ...womenProducts,
  ...kidsProducts,
  ...pages,
];

export default searchIndex; 


