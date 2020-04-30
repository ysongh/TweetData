import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import 'leaflet/dist/leaflet.css';

import Navbar from './components/layout/Navbar';
import Charts from './components/charts/Charts';
import MapUS from './components/MapUS';
import Symptom from './components/Symptom';
import Tweet from './components/Tweet';
import HashTag from './components/HashTag';

class App extends Component{
  render(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Charts} />
        <Route exact path="/map" component={MapUS} />
        <Route exact path="/symptom" component={Symptom} />
        <Route exact path="/tweet" component={Tweet} />
        <Route exact path="/hashTag" component={HashTag} />
      </Router>
    );
  }
}

export default App;