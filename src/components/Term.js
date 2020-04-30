import React, { Component } from 'react';
import { getTypeData } from '../api';

import Donut from './charts/Donut';

const url = "https://raw.githubusercontent.com/yenlow/tmp_funicular/master/data/global_daily_terms.json";

class Term extends Component{
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
        <h1 className="center-align">Term</h1>
        <div className="row">
            <div className="col s12 m6 ">
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
                    <li className="collection-header"><h4>Top 5 Terms</h4></li>
                    {this.state.top5 ? this.state.top5.map((i) => {
                        return (
                            <li className="collection-item" key={i.name}>
                                <span>{i.name.toUpperCase()}</span><span className="right">{i.value}</span>
                            </li>
                        )
                    }) : null}
                </ul>
            </div>
            <div className="card col s12 m6">
                <div className="card-content">
                    <Donut labels={this.state.labels} values={this.state.values} />
                </div>
            </div>
            <div className="card col s12">
                <div className="card-content">
                    {this.state.data ? this.state.data.map((i) => {
                        return (
                            <div className="chip" key={i.name}>
                                {i.name} {i.value}
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Term;