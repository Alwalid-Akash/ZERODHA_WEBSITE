import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);


const DoughnoutChart = ({ watchlist = [] }) => {

  const chartData = {
    labels: watchlist.map((stock) => stock.name),

    datasets: [
      {
        label: "Stock Price",

        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],

        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,

    plugins: {

      legend: {
        position: "right",
      },

      title: {
        display: true,
        text: "Watchlist Stock Distribution",
      },

    },
  };


  return (

    <div
      style={{
        width: "350px",
        height: "350px",
        margin: "20px auto",
      }}
    >

      <Doughnut
        data={chartData}
        options={options}
      />

    </div>

  );

};


export default DoughnoutChart;