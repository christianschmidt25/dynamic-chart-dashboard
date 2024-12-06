import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ chartData }) => {

    const minSize = 5;
    const maxSize = 30;

    const maxSales = Math.max(...chartData.sales);
    const minSales = Math.min(...chartData.sales);

    const scaleRadius = (value) => {
        if (maxSales === minSales) return (minSize + maxSize) / 2; 
        return ((value - minSales) / (maxSales - minSales)) * (maxSize - minSize) + minSize;
    };

    const bubbleChartData = {
      datasets: [
        {
          label: 'Expenses, Profits, and Sales',
          data: chartData?.expenses.map((expense, index) => ({
            x: expense,
            y: chartData.profits[index],
            r: scaleRadius(chartData.sales[index]),
        })),
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const bubbleChartOptions = {
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
    };

    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;