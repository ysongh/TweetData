import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import 'leaflet/dist/leaflet.css';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
//import Charts from './components/charts/Charts';
import MapUS from './components/MapUS';
import Symptom from './components/Symptom';
import Term from './components/Term';
import HashTag from './components/HashTag';
import Emoji from './components/Emojis';

class App extends Component{
  render(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapUS} />
        <Route exact path="/symptom" component={Symptom} />
        <Route exact path="/term" component={Term} />
        <Route exact path="/hashtag" component={HashTag} />
        <Route exact path="/emoji" component={Emoji} />
      </Router>
    );
  }
}

export default App;