import { useState, useEffect } from 'react'
import ChartComponent from './components/ChartComponent'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import { Bar, Line, Scatter, Bubble } from '/node_modules/react-chartjs-2';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
    .then((response) => response.json())
    .then((chartData) => setChartData(chartData));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic Charts with React and Chart.js</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
    </div>
  );
}

export default App
