import React, { Component } from 'react';
import { symptomData } from '../api';

class Symptom extends Component{
  state = {
      data: []
  }
  async componentDidMount(){
    const data = await symptomData();

    this.setState({ data: data});
  }

  render(){
    return (
      <div className="container">
        <h1 className="center-align">Symptom</h1>
        <div className="row">
            <div className="card col s12 m6">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Top 5 Symptom</h4></li>
                    <li className="collection-item">
                        <span>cold</span><span className="right">123</span>
                    </li>
                    <li className="collection-item">
                        <span>cold</span><span className="right">123</span>
                    </li>
                    <li className="collection-item">
                        <span>cold</span><span className="right">123</span>
                    </li>
                    <li className="collection-item">
                        <span>cold</span><span className="right">123</span>
                    </li>
                    <li className="collection-item">
                        <span>cold</span><span className="right">123</span>
                    </li>
                </ul>
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