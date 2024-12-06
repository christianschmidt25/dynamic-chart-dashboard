import { useState, useEffect } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null); // includes Null data until data is fetched

  useEffect(() => {
    fetch('/financial_data.json') //fetch the data from the JSON file
      .then((response) => response.json())
      .then((data) => setChartData(data)) // changes the data from null to our JSON information
      .catch((error) => ('Error Fetching JSON:', error))
  }, []);

  if (!chartData) {
    return <div>Loading...</div>; //adds a loading message while fetching data
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic Charts with React and Chart.js</h1>
      <BarChart chartData={chartData} /> 
      <LineChart chartData={chartData} /> 
      <ScatterChart chartData={chartData} /> 
      <BubbleChart chartData={chartData} /> 
    </div> //implements the charts from the other jsx files
  );
}

export default App
