import React from "react";
import ChartComponent from "./ChartComponent";
import { Line } from "/node_modules/react-chartjs-2";

const LineChart = ({ chartData }) => {
    const lineChartData = {
      labels: chartData?.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: chartData?.profits,
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const lineChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;