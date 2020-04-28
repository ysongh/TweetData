import React, { Component } from 'react';
import './App.css';
import { getSampleData } from './api';

import Area from './components/Area';
import Line from './components/Line';

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
      <div className="container">
        <h1>Tweet Data</h1>
        <Area dates={this.state.resData.dates} data={this.state.resData.source} />
        <Line dates={this.state.resData.dates} data={this.state.resData.volume} />
      </div>
    );
  }
}

export default App;