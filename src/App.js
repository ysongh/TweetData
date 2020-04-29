import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import 'leaflet/dist/leaflet.css';

import Navbar from './components/layout/Navbar';
import Charts from './components/charts/Charts';
import MapUS from './components/MapUS';
import Tweet from './components/Tweet';

class App extends Component{
  render(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Charts} />
        <Route exact path="/map" component={MapUS} />
        <Route exact path="/tweet" component={Tweet} />
      </Router>
    );
  }
}

export default App;