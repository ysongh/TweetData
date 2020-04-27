import React, { Component } from 'react';
import './App.css';
import { getSampleData } from './api';

class App extends Component{
  async componentDidMount(){
    const data = await getSampleData();

    console.log(data);
  }

  render(){
    return (
      <>
        <h1>Chart</h1>
      </>
    );
  }
}

export default App;