import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ chartData }) => {
    const scatterChartData = {
      labels: chartData?.expenses,
      datasets: [
        {
          label: 'Profit to Expense Ratios',
          data: chartData?.profits,
          backgroundColor: 'rgba(32, 201, 142, 0.5)',
          borderColor: 'rgba(32, 201, 142, 1)',
          borderWidth: 1,
        },
      ],
    };

    const scatterChartOptions = {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Expenses',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Profits',
                },
            },
        },
    }

    return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;