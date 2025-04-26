import React, { Component } from 'react';
import data from './data.json'

class Example1 extends Component {

  render() {
    return (
      <div>
        <h1>Exercise 3: Example 1</h1>
        <ul>
        {data.SocialMedias.map((item, index) => ( 
            <li key={index}><a href={item}>{item}</a></li>
        ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
