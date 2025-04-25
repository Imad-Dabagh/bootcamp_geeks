import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // incrimentCounter = () => {
  //   if(this.state.counter < 5){
  //     this.setState({counter: this.state.counter + 1});
  //   } else {
  //     throw new Error('I crashed!');
  //   }
    
  // }

  incrimentCounter = () => {
      this.setState({counter: this.state.counter + 1});
  }


  render() {
    if(this.state.counter === 5){
      throw new Error('I crashed!');
    }
    return (
      <div>
        <h2 onClick={this.incrimentCounter}>{this.state.counter}</h2>
      </div>
    );
  }
}

export default BuggyCounter;