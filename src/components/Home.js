import React, { Component } from 'react';
import { getTypeAllData } from '../api';

import Line from './charts/Line';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_terms.json";

class Home extends Component{
  state = {
      data: [],
      top5: [],
      labels: [],
      values: [],
  }

  async componentDidMount(){
    const {dates, values} = await getTypeAllData(url);

    this.setState({ labels: dates,  values: values});
  }

  render(){
    
    return (
      <div className="container">
        <h1 className="center-align">Home</h1>
        <Line dates={this.state.labels} data={this.state.values} />
      </div>
    );
  }
}

export default Home;