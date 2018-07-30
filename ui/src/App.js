import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/img/logo-simplus.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">SIMPLUS - GRANDstack</h1>
        </header>
        
        <UserList />
      </div>
    );
  }
}

export default App;
