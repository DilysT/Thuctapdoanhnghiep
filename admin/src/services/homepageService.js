// admin/src/services/homepageService.js
const KEY_HERO = 'hp_hero';
const KEY_INTRO = 'hp_intro';

const readJSON = (k, defVal) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? defVal; }
  catch { return defVal; }
};
const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

/* ===== HERO BANNER ===== */
export function getHeroes() {
  return readJSON(KEY_HERO, []);
}
export function getHero(id) {
  return getHeroes().find(h => String(h.id) === String(id));
}
export function createHero(data) {
  const list = getHeroes();
  const id = Date.now();
  list.push({ id, ...data });
  writeJSON(KEY_HERO, list);
  return id;
}
export function updateHero(id, data) {
  const list = getHeroes().map(h => String(h.id) === String(id) ? { ...h, ...data } : h);
  writeJSON(KEY_HERO, list);
}
export function deleteHero(id) {
  const list = getHeroes().filter(h => String(h.id) !== String(id));
  writeJSON(KEY_HERO, list);
}

/* ===== INTRO (“Donagamex là gì?”) ===== */
const INTRO_DEFAULT = {
  badgeText: 'Donagamex là gì?',
  heading: 'CTCP TỔNG CÔNG TY MAY ĐỒNG NAI, với tên giao dịch là DONAGAMEX',
  para1: 'Được thành lập từ năm 1975. Là thành viên của Tập Đoàn Dệt - May Việt Nam (“VINATEX”) thuộc Bộ công thương.',
  para2: 'Chúng tôi đã có hơn 45 năm kinh nghiệm trong ngành sản xuất và kinh doanh hàng may mặc xuất khẩu và tiêu thụ nội địa; kinh doanh các thiết bị, phụ tùng và các sản phẩm của ngành dệt may…',
  para3: 'Đến với DONAGAMEX quý khách hàng sẽ luôn hài lòng bởi giá cả cạnh tranh, chất lượng và thời gian giao hàng.',
  imageUrl: '',
};
export function getIntro() {
  return readJSON(KEY_INTRO, INTRO_DEFAULT);
}
export function saveIntro(data) {
  const merged = { ...getIntro(), ...data };
  writeJSON(KEY_INTRO, merged);
  return merged;
}
const ABOUT_KEY = 'about_page_content';

export function getAboutPage() {
  try {
    const raw = localStorage.getItem(ABOUT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveAboutPage(payload) {
  localStorage.setItem(ABOUT_KEY, JSON.stringify(payload));
}
