import React, { Component } from 'react';
import { getTypeAllData } from '../api';

import Line from './charts/Line';

const urls = [
  "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_terms.json",
  "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_symptoms.json",
  "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_hashtags.json",
  "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_emojis.json"
];

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
    const {dates, values, top5List} = await getTypeAllData(urls[this.state.urlNumber]);

    this.setState({ labels: dates,  values: values, top5List: top5List});
  }

  onChangeDate = async (num) => {
    const {dates, values, top5List} = await getTypeAllData(urls[num]);

    this.setState({ labels: dates,  values: values, top5List: top5List});
  }

  render(){

    return (
      <div className="container">
        <h1 className="center-align">Home</h1>
        <div className="row">
            <div className="col s12 m6 ">
                <label>Select Catergory</label>
                <select className="browser-default" defaultValue={this.state.urlNumber} onChange={(e) => this.onChangeDate(e.target.value)}>
                  <option value="0">Term</option>
                  <option value="1">Symptom</option>
                  <option value="2">Hash Tag</option>
                  <option value="3">Emoji</option>
                </select>
            </div>
        </div>
        <Line dates={this.state.labels} data={this.state.values} top5List={this.state.top5List}/>
      </div>
    );
  }
}

export default Home;