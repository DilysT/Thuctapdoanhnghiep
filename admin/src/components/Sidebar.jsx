// admin/src/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import {
    FaTachometerAlt, FaBoxOpen, FaPlusCircle, FaEnvelope,
    FaImage, FaInfoCircle, FaChevronRight, FaFileAlt
} from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react';

export default function Sidebar() {
    const { pathname } = useLocation();

    const isExactActive = (path) => pathname === path;
    const isHomeGroupActive = useMemo(() => pathname.startsWith('/homepage'), [pathname]);

    const [openHome, setOpenHome] = useState(isHomeGroupActive);
    useEffect(() => setOpenHome(isHomeGroupActive), [isHomeGroupActive]);

    const baseItem =
        'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all';
    const normal = 'text-gray-300 hover:bg-gray-700 hover:text-white';
    const active = 'bg-blue-600 text-white';

    const navItems = [
        { path: '/dashboard', label: 'Bảng điều khiển', icon: <FaTachometerAlt /> },
        { path: '/products', label: 'Danh sách sản phẩm', icon: <FaBoxOpen /> },
        { path: '/products/add', label: 'Thêm sản phẩm', icon: <FaPlusCircle /> },
        { path: '/contacts', label: 'Liên hệ', icon: <FaEnvelope /> },
    ];

    return (
        <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 shadow-md">
            <div className="text-2xl font-bold mb-8 tracking-wide">🛍 Admin Panel</div>

            <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`${baseItem} ${isExactActive(item.path) ? active : normal}`}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}

                {/* ====== NHÓM HOMEPAGE ====== */}
                <button
                    type="button"
                    onClick={() => setOpenHome((v) => !v)}
                    aria-expanded={openHome}
                    aria-controls="submenu-homepage"
                    className={`${baseItem} ${isHomeGroupActive ? active : normal} w-full justify-between`}
                >
                    <span className="flex items-center gap-3">
                        <span className="inline-block">🏠</span> Homepage
                    </span>
                    <FaChevronRight className={`text-xs transition-transform ${openHome ? 'rotate-90' : ''}`} />
                </button>

                <div
                    id="submenu-homepage"
                    className={`grid transition-[grid-template-rows] ${openHome ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                    <div className="overflow-hidden">
                        <Link
                            to="/homepage/hero"
                            className={`${baseItem} pl-8 ${pathname === '/homepage/hero' ? active : normal}`}
                        >
                            <FaImage /> Hero Banner
                        </Link>
                        <Link
                            to="/homepage/intro"
                            className={`${baseItem} pl-8 ${pathname === '/homepage/intro' ? active : normal}`}
                        >
                            <FaInfoCircle /> Donagamex là gì?
                        </Link>
                    </div>
                </div>
                {/* ====== /NHÓM HOMEPAGE ====== */}

                {/* ====== ITEM MỚI: Giới thiệu chung (nằm BÊN DƯỚI Homepage) ====== */}
                <Link
                    to="/about"
                    className={`${baseItem} ${pathname === '/about' ? active : normal}`}
                >
                    <FaFileAlt />
                    Giới thiệu chung về page
                </Link>
            </nav>
        </aside>
    );
}
