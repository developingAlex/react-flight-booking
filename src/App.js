import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Buttons';  
import Emoji from './components/Emoji';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> this is a heading </h1>
        < Emoji />
        < Emoji cat />
        < Emoji emotion='sad' />
        < Emoji cat emotion='sad' />
        <Button primary>
          Find Flights
        </Button>
        <Button>
          < Emoji cat emotion='sad' />
          Sign Up
        </Button>
        <Button children='Enter Competition' magic />
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <p>deleted all content</p>
        </ul>
      </div>
    );
  }
}

export default App;
