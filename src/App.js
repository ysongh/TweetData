import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import 'leaflet/dist/leaflet.css';

import Charts from './components/Charts/Charts';
import MapUS from './components/MapUS';

class App extends Component{
  render(){
    return (
      <Router>
        <h1 className="center-align">Tweet Data</h1>
        <Route exact path="/" component={Charts} />
        <MapUS />
      </Router>
    );
  }
}

export default App;