// admin/src/pages/Dashboard.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const stats = [
  { title: 'Sản phẩm', value: 128 },
  { title: 'Đơn hàng', value: 230 },
  { title: 'Khách hàng', value: 87 },
  { title: 'Liên hệ', value: 14 },
];

const salesData = [
  { name: 'T1', sales: 400 },
  { name: 'T2', sales: 300 },
  { name: 'T3', sales: 500 },
  { name: 'T4', sales: 200 },
  { name: 'T5', sales: 600 },
  { name: 'T6', sales: 700 },
];

const products = [
  { id: 1, name: 'Áo thun nữ form rộng', sku: 'AT-FR1', price: '85.000đ' },
  { id: 2, name: 'Quần jeans nam cao cấp', sku: 'QJ-NCC2', price: '190.000đ' },
  { id: 3, name: 'Đầm công sở tay phồng', sku: 'D-CS3', price: '220.000đ' },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Trang quản trị</h1>

      {/* 1. Thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">{stat.title}</p>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* 2. Biểu đồ */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Doanh số bán hàng (tháng)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Bảng sản phẩm */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm mới nhất</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">#</th>
              <th className="py-2">Tên sản phẩm</th>
              <th className="py-2">SKU</th>
              <th className="py-2">Giá</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={p.id} className="border-b hover:bg-gray-100">
                <td className="py-2">{idx + 1}</td>
                <td className="py-2">{p.name}</td>
                <td className="py-2">{p.sku}</td>
                <td className="py-2">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
