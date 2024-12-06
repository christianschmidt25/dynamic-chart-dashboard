import React from "react";
import ChartComponent from "./ChartComponent";

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
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Months',
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

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;