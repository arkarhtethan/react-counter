import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header/Header"
import Clicker from "./component/Clicker/Clicker"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Clicker/>
      </div>
    );
  }
}

export default App;
