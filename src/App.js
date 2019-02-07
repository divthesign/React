import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!')
  }

  render() {
    return (
      <div className="App">
        <h1>Learning React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //React se podría escribir así pero no es JSX
    /* return(
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola que tal?'))
    ) */
  }
}

export default App;
