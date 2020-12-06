import React, {useState} from 'react';
import Header from './components/Header'
import Stats from './components/Stats'
import Map from './components/Map'
import {Card, CardContent} from '@material-ui/core'
import Table from './components/Table'
import LineGraph from './components/LineGraph'
import 'leaflet/dist/leaflet.css'

import './App.css';

function App() {
  const [countryInfo, setCountryInfo] = useState('')
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [caseType, setCaseType] = useState("cases")
  
  

  return (
    <div className="app">
      <div className="app__left">
      <Header setTableData={setTableData}  getCountryInfo={setCountryInfo} setMapCenter={setMapCenter} setMapZoom={setMapZoom} />
      <Stats caseType={caseType} countryInfo={countryInfo} setCaseType={setCaseType}/>
      <Map center={mapCenter} zoom={mapZoom} countries={tableData} caseType={caseType}/>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>live cases by country</h3>
          <Table  countries={tableData}/>
          <h3>Worldwide new {caseType}</h3>
          <LineGraph caseType={caseType}/>
        </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
