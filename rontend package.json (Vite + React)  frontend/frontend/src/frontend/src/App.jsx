import React from 'react';
import Header from './components/Header';
import BuyerBrowse from './components/BuyerBrowse';
import FarmerDashboard from './components/FarmerDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<BuyerBrowse />} />
            <Route path="/farmer" element={<FarmerDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
