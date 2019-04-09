import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  state = {
    message: "hello world",
  }

  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Goodbye</button>
        <Greeting msg={this.state.message} />
      </>
    );
  }
  greet = () => {
    this.setState({message: 'hello web17'})
  }
  bye = () => {
    this.setState({message: 'later!'})
  }
}

export default App;
