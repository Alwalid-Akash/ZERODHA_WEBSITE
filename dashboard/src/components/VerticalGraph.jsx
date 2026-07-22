import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const VerticalChart = ({ allHoldings = [] }) => {

  const chartData = {
    labels: allHoldings.map((stock) => stock.name),

    datasets: [
      {
        label: "Stock Price (₹)",
        data: allHoldings.map((stock) => stock.price),
      },
    ],
  };


  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Stock Price Comparison",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div
      style={{
        width: "700px",
        height: "400px",
        margin: "50px auto",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};


export default VerticalChart;