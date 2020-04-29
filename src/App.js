import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import { getSampleData } from './api';

import 'leaflet/dist/leaflet.css';

import Area from './components/Area';
import Line from './components/Line';
import MapUS from './components/MapUS';

class App extends Component{
  state = {
    resData: {
      dates: [],
      source: [],
      volume: []
    }
  }
  async componentDidMount(){
    const data = await getSampleData();

    this.setState({ resData: data });
  }

  render(){
    return (
      <Router>
        <h1 className="center-align">Tweet Data</h1>
        <MapUS />
        <Area dates={this.state.resData.dates} data={this.state.resData.source} />
        <Line dates={this.state.resData.dates} data={this.state.resData.volume} />
      </Router>
    );
  }
}

export default App;