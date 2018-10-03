import React, { Component } from 'react';
import './App.css';

import FOO_QUERY from './foo.gql'

console.log(FOO_QUERY)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {FOO_QUERY}
        </header>
      </div>
    );
  }
}

export default App;
