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
      top5List: []
  }

  async componentDidMount(){
    const {dates, values, top5List} = await getTypeAllData(url);

    this.setState({ labels: dates,  values: values, top5List: top5List});
  }

  render(){

    return (
      <div className="container">
        <h1 className="center-align">Home</h1>
        <Line dates={this.state.labels} data={this.state.values} top5List={this.state.top5List}/>
      </div>
    );
  }
}

export default Home;