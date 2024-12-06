import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ chartData }) => {
    const bubbleChartData = {
      datasets: [
        {
          label: 'Expenses, Profits, and Sales',
          data: {
            x: [chartData?.expenses],
            y: [chartData?.profits],
            size: [chartData?.sales],
          },
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const bubbleChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <ChartComponent type="scatter" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;