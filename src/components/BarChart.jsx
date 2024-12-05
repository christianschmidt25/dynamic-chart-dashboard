import React from "react";
import ChartComponent from "./ChartComponent";
import { Bar } from "/node_modules/react-chartjs-2";

const BarChart = ({ chartData }) => {
    const barChartData = {
      labels: chartData.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: chartData.sales,
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;