import React, { Component } from 'react';
import data from './data.json'

class Example3 extends Component {

  render() {
    return (
      <div>
        <h1>Exercise 3: Example 3</h1>
        <ul>
        {data.Experiences.map((experience, index) => ( 
          <div key={index}>
            <img src={experience.logo} alt="" />
            <p><a href={experience.url}>{experience.companyName}</a></p>
            {experience.roles.map(role => (
              <>
                <b>{role.title}</b>
                <p>{role.startDate} | {role.location}</p>
                <p>{role.description}</p>
              </>
            ))}
            
          </div>
            

        ))}
        </ul>
      </div>
    );
  }
}

export default Example3;
