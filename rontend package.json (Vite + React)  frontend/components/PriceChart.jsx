import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PriceChart(){
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{ label: '₹ per kg', data: [20,22,21,24,26,25], fill: false }]
  };
  return <div style={{width: '100%', height: 200}}><Line data={data} /></div>;
}
