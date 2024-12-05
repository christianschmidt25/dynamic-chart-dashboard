import React from "react";
import ChartComponent from "./ChartComponent";
import { Scatter } from "/node_modules/react-chartjs-2";

const ScatterChart = ({ chartData }) => {
    const scatterChartData = {
      labels: chartData.expenses,
      datasets: [
        {
          label: 'Monthly Sales',
          data: chartData.profits,
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const scatterChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;