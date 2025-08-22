// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

export default function ProductCard({ id, title, image }) {
  return (
    <div className="card h-100 border-0 product-card bg-light shadow-sm">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="img-fluid rounded" />
      </div>
      <div className="mt-2">
        <Link
          to={`/product/${id}`}
          className="d-block fw-semibold product-title-link"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
