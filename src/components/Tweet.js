import React, { Component } from 'react';
import { tweetData } from '../api';

class Tweet extends Component{
  async componentDidMount(){
    const data = await tweetData();
  }

  render(){
    return (
      <div className="container">
        <h1 className="center-align">Tweet</h1>
      </div>
    );
  }
}

export default Tweet;