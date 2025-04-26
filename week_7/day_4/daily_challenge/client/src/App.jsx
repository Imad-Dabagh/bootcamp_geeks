import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '', inputText: "", serverResponse: "", };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3000/api/hello');
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  handleChange = (e) => {
    this.setState({inputText: e.target.value});
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/world', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: this.state.inputText }),
      });

      const text = await response.text();
      this.setState({ serverResponse: text });

    } catch (error) {
      console.log("Error: "+ error)
    }
  }

  render() {
    return (
      <>
      <div>
        <h1>{this.state.message}</h1>
      </div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>

      <h2>{this.state.serverResponse}</h2>
      </>
    );
  }
}

export default App;
