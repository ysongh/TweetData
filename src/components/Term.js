import React, { Component } from 'react';
import CountUp from 'react-countup';
//import { getTypeData } from '../api';

import Donut from './charts/Donut';
//import wordImage from '../assets/wc_terms.png';

import { termtop5, termlist, termlabels, termvalues } from '../api/someData';

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
    //const {top5, list, labels, values, dates} = await getTypeData(1, this.state.date);

    this.setState({ data: termlist, top5: termtop5, labels: termlabels, values: termvalues, dates: [] });
  }

//   onChangeDate = async (date) => {
//     const {top5, list, labels, values} = await getTypeData(1, date);

//     this.setState({ data: list, top5: top5, labels: labels, values: values });
//   }

  render(){
    return (
      <div className="container">
        <div className="row mt-2">
            <h1 className="title col s12 m6 ">Term</h1>
            <h2 className="title col s12 m6 right-align">April 25, 2020</h2>
        </div>
        <div className="row">
            <div className="card col s12 m6">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Top 20 Terms</h4></li>
                    {this.state.data ? this.state.data.map((i) => {
                        return (
                            <li className="collection-item" key={i.name}>
                                <span>{i.name.toUpperCase()}</span>
                                <span className="right">
                                    <CountUp
                                        start={0}
                                        end={i.value}
                                        duration={1}
                                        separator="," />
                                </span>
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

export default Term;