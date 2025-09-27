import React from 'react';

export default function ProductCard({ product }){
  return (
    <div className="bg-white p-3 rounded shadow flex items-center">
      <div className="w-20 h-20 bg-gray-100 mr-3 rounded flex items-center justify-center">
        Img
      </div>
      <div className="flex-1">
        <div className="font-semibold">{product.name} — {product.variety}</div>
        <div className="text-sm text-gray-600">{product.quantityKg} kg • ₹{product.pricePerKg}/kg</div>
        <div className="text-xs text-gray-500">Farmer: {product.farmer?.name} • {product.location}</div>
      </div>
    </div>
  );
}
