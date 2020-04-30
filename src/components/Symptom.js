import React, { Component } from 'react';
import { symptomData } from '../api';

import Donut from './charts/Donut';

class Symptom extends Component{
  state = {
      data: [],
      top5: [],
      arr: []
  }
  async componentDidMount(){
    const {top5, list, arr} = await symptomData();

    this.setState({ data: list, top5: top5, arr: arr });
  }

  render(){
    return (
      <div className="container">
        <h1 className="center-align">Symptom</h1>
        <div className="row">
            <div className="card col s12 m6">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Top 5 Symptom</h4></li>
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
                    <Donut arr={this.state.arr}/>
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

export default Symptom;