import React, { Component } from 'react';
import { getTypeData } from '../api';

import Donut from './charts/Donut';
//import wordImage from '../assets/wc_hashtags.png';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_hashtags.json";

class HashTag extends Component{
  state = {
      data: [],
      top5: [],
      labels: [],
      values: [],
      dates: [],
      date: "2020-03-12"

  }
  async componentDidMount(){
    const {top5, list, labels, values, dates} = await getTypeData(url, this.state.date);

    this.setState({ data: list, top5: top5, labels: labels, values: values, dates: dates });
  }

  onChangeDate = async (date) => {
    const {top5, list, labels, values} = await getTypeData(url, date);

    this.setState({ data: list, top5: top5, labels: labels, values: values });
  }

  render(){
    return (
      <div className="container">
        <div className="row mt-2">
            <h1 className="title col s12 m6 l8">Hash Tag</h1>
            <div className="col s12 m6 l4">
                <label>Select Date</label>
                <select className="browser-default" defaultValue={this.state.date} onChange={(e) => this.onChangeDate(e.target.value)}>
                    {this.state.dates.map(i => {
                        return <option key={i} value={i}>{i}</option>
                    })}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="card col s12 m6">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Top 20 Hash Tags</h4></li>
                    {this.state.data ? this.state.data.map((i) => {
                        return (
                            <li className="collection-item" key={i.name}>
                                <span>{i.name.toUpperCase()}</span><span className="right">{i.value}</span>
                            </li>
                        )
                    }) : null}
                </ul>
            </div>
            <div className="col s12 m6">
                <div className="mt-2">
                    <Donut labels={this.state.labels} values={this.state.values} />
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default HashTag;