import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ chartData }) => {
    const scatterChartData = {
      labels: chartData?.expenses,
      datasets: [
        {
          label: 'Profit to Expense Ratios',
          data: chartData?.profits,
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