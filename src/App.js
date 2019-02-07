import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Learning React</h1>
        <Person />
      </div>
    );
    //React se podría escribir así pero no es JSX
    /* return(
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola que tal?'))
    ) */
  }
}

export default App;
