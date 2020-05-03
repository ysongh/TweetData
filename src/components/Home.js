import React, { Component } from 'react';
import { getTypeAllData } from '../api';

import Chart from './charts/Charts';

class Home extends Component{
  state = {
      data: [],
      top5: [],
      labels: [],
      values: [],
      top5List: [],
      urlNumber: "0"
  }

  async componentDidMount(){
    const {dates, values, top5List} = await getTypeAllData(this.state.urlNumber);

    this.setState({ labels: dates,  values: values, top5List: top5List});
  }

  onChangeDate = async (num) => {
    const {dates, values, top5List} = await getTypeAllData(num);

    this.setState({ labels: dates,  values: values, top5List: top5List});
  }

  render(){

    return (
      <div className="container">
         <div className="row mt-2">
            <div className="col s12 m6 l4">
                <label>See most frequent entities mentioned that day</label>
                <select className="browser-default" defaultValue={this.state.urlNumber} onChange={(e) => this.onChangeDate(e.target.value)}>
                  <option value="0">Symptom</option>
                  <option value="1">Term</option>
                  <option value="2">Hash Tag</option>
                  <option value="3">Emoji</option>
                </select>
            </div>
        </div>
        <Chart top5List={this.state.top5List}/>
      </div>
    );
  }
}

export default Home;