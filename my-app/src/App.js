import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      {name: 'Hawre', age: 40},
      {name: 'Famke', age: 36},
      {name: 'Fleur', age: 39}
    ], 
    otherState: 'some other value', 
    usernames: "HappyWinc"
  }

  switchNameHandler=()=>{
//console.log('Was Clicked!');
  this.setState ({
    persons:[
      {name: 'Hawre', age: 40},
      {name: 'Famke', age: 35},
      {name: 'Fleur', age: 39} 
    ]
  })
}

  render() {
    return (
      <div className="App">
       <h2> Hi, I'm a react app.</h2>
       <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <UserInput/>
      <UserOutput username={this.state.usernames}/>
      <UserOutput/>
      <UserOutput/>
   
      </div>
    );
  }
}

export default App;
