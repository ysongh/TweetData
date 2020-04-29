import React, { Component } from 'react';
import { getSampleData } from '../../api';

import Area from './Area';
import Line from './Line';

class Charts extends Component{
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
        <h1 className="center-align">Charts</h1>
        <Area dates={this.state.resData.dates} data={this.state.resData.source} type="area" />
        <Line dates={this.state.resData.dates} data={this.state.resData.volume} />
        <Area dates={this.state.resData.dates} data={this.state.resData.source} type="radar" />
        <Area dates={this.state.resData.dates} data={this.state.resData.source} type="bar" />
        <Area dates={this.state.resData.dates} data={this.state.resData.source} type="scatter" />
        <Area dates={this.state.resData.dates} data={this.state.resData.source} type="heatmap" />
      </div>
    );
  }
}

export default Charts;