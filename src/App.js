import React, {useState} from 'react';
import './App.css';
import CSVUploader from '../src/CSVUploader';
import DataVisualization from './DataVisualization';



function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <h1>Interactive Dashboard For DataVisualization</h1>
      <CSVUploader onDataUploaded={setData}/>
      <div className="data-visualization-container">
          <DataVisualization data={data} />
      </div>
    </div>
  );
}


export default App;