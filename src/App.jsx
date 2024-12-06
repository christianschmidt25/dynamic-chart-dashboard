import { useState, useEffect } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => ('Error Fetching JSON:', error))
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic Charts with React and Chart.js</h1>
      <BarChart chartData={chartData} /> 
      <LineChart chartData={chartData} /> 
      <ScatterChart chartData={chartData} /> 
      <BubbleChart chartData={chartData} /> 
    </div>
  );
}

export default App
