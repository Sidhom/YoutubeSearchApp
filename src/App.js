import React, { Component } from 'react';
import Home from './containes/Home'
import styles  from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className={styles.title}>Youtube</h1>
          <Home />
      </div>
    );
  }
}

export default App;
