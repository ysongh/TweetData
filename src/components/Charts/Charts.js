import React, { Component } from 'react';
import { getScores } from '../../api';

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
    const {dates, sentimentScores} = await getScores();
    console.log(dates)

    this.setState({ dates: dates, source: sentimentScores });
  }

  render(){
    return (
      <Area dates={this.state.dates} data={this.state.source} type="line" />
    );
  }
}

export default Charts;