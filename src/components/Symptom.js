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
        <div className="card">
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
    );
  }
}

export default Symptom;