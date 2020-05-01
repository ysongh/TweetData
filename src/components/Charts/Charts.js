import React, { Component } from 'react';
import { getScores } from '../../api';

import Area from './Area';

class Charts extends Component{
  state = {
    resData: {
      dates: [],
      source: [],
      cases: []
    }
  }
  async componentDidMount(){
    const {dates, sentimentScores, cases} = await getScores();

    this.setState({ dates: dates, source: sentimentScores, cases: cases });
  }

  render(){
    return (
      <Area dates={this.state.dates} data={this.state.source} cases={this.state.cases} type="line" />
    );
  }
}

export default Charts;