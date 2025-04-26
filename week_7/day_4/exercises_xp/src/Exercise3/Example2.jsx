import React, { Component } from 'react';
import data from './data.json'

class Example2 extends Component {

  render() {
    return (
      <div>
        <h1>Exercise 3: Example 2</h1>

        {data.Skills.map((item, index) => ( 
          <div key={index}>
            <h2>{item.Area}</h2>
            <ul>
              {item.SkillSet.map((skill, skillIndex) => (
                <li key={skillIndex}> {skill.Name} </li>
              ) )}
            </ul>
          </div>
            

        ))}

      </div>
    );
  }
}

export default Example2;
