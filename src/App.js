import React, { Component } from 'react';
import BandMember from "./components/BandMember";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Red Hot Chili Peppers Clicky Game!</h1>
        </header>
        <BandMember />
      </div>
    );
  }
}

export default App;
