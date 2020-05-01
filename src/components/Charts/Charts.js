import React, { Component } from 'react';
import { getSampleData } from '../../api';

import Area from './Area';

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
      <Area dates={this.state.resData.dates} data={this.state.resData.source} type="area" />
    );
  }
}

export default Charts;