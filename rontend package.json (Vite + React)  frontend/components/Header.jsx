import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">SmartFarm Market</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm">Browse</Link>
          <Link to="/farmer" className="text-sm">Farmer Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
