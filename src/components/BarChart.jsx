import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ chartData }) => {
    const barChartData = {
      labels: chartData?.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: chartData?.sales,
          backgroundColor: 'rgba(94, 41, 255, 0.5)',
          borderColor: 'rgba(94, 41, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
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
                    text: 'Sales',
                },
            },
        },
    };

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;