import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const Analytics = () => {
  const barData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{ label: 'Sales', data: [55, 23, 96], backgroundColor: 'rgba(153, 102, 255, 0.6)' }]
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Analytics</h1>
      <Bar data={barData} />
    </div>
  );
};

export default Analytics;
