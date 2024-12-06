import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null); // Reference to the canvas
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); // Destroy any existing chart instance
    }

    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    return () => {
      // Cleanup chart instance on unmount or update
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [type, data, options]); // Recreate chart when props change

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
