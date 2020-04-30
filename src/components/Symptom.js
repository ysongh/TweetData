import React, { Component } from 'react';
import { symptomData } from '../api';

class Symptom extends Component{
  state = {
      data: []
  }
  async componentDidMount(){
    const data = await symptomData();
    delete data[0].date;

    const list = [];
    let dataAr = new Map(Object.entries(data));
    dataAr = Object.fromEntries(dataAr);
    for(let i in dataAr[0]){
        list.push({
            name: i,
            value: dataAr[0][i]
        })
    }

    this.setState({ data: list});
  }

  render(){
    return (
      <div className="container">
        <h1 className="center-align">Symptom</h1>
        {this.state.data ? this.state.data.map((i) => {
            return (
                <div className="chip" key={i.name}>
                    {i.name} {i.value}
                </div>
            )
        }) : null}
      </div>
    );
  }
}

export default Symptom;