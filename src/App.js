import React, { Component } from 'react';
import './App.css';
import { getSampleData } from './api';

import Area from './components/Area';

class App extends Component{
  state = {
    resData: {
      dates: [],
      source: []
    }
  }
  async componentDidMount(){
    const data = await getSampleData();

    this.setState({ resData: data });
  }

  render(){
    return (
      <>
        <h1>Tweet Data</h1>
        <Area dates={this.state.resData.dates} data={this.state.resData.source} />
      </>
    );
  }
}

export default App;