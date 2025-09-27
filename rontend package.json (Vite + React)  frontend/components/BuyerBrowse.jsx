import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import PriceChart from './PriceChart';

export default function BuyerBrowse(){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/products')
      .then(r => setProducts(r.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Available Produce</h2>
        <div className="space-y-4">
          {products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </div>
      <aside className="p-4 bg-white rounded shadow">
        <h3 className="font-medium mb-2">Price Trends (Tomato)</h3>
        <PriceChart />
      </aside>
    </div>
  );
}
