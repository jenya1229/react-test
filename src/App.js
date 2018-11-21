import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 28},
      {name: 'dsddd', age: 22},
      {name: 'lolo', age: 32},
      {name: 'erik', age: 52},
      {name: 'dady', age: 62},
      {name: 'pils', age: 44},
    ]
  }
  switchName = () => {
    if(this.state.persons[0].name === 'max'){
      this.setState({
        persons: [
          {name: 'maximus', age: 28},
          {name: 'doktor', age: 22},
          {name: 'lolypop', age: 32},
          {name: 'erik_swarc', age: 52},
          {name: 'dady_pony', age: 62},
          {name: 'pils_love', age: 44},
        ]
      })
    }else{
      this.setState({
        persons: [
          {name: 'max', age: 28},
          {name: 'dsddd', age: 22},
          {name: 'lolo', age: 32},
          {name: 'erik', age: 52},
          {name: 'dady', age: 62},
          {name: 'pils', age: 44},
        ]
      })
    }
    
  }
  render() {
    // Нет необходимости оборачивать в дополнительный элемент!
    return (
       <div className="App">
           <h1> im a cool driver </h1>
           <h1> im a cool driver too </h1>
           <button onClick={this.switchName}>switch name</button>
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
           <Person name={this.state.persons[3].name} age={this.state.persons[3].age}> my hobbies: golf </Person>
           <Person name={this.state.persons[4].name} age={this.state.persons[4].age}/>
           <Person name={this.state.persons[5].name} age={this.state.persons[5].age}/>
       </div>
       
    );
    // return React.createElement('div', {className: 'wrap'}, React.createElement('h1', null, 'Привет я React.createElement'))
  }
  
}

export default App;
