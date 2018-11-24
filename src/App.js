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
    ],
    showPerson: false
  }

  switchName = () => {
    
      this.setState({
        persons: [
          {name: 'maximus', age: 28},
          {name:  'wewe', age: 22},
          {name: 'lolypop', age: 32},
          {name: 'erik_swarc', age: 52},
          {name: 'dady_pony', age: 62},
          {name: 'pils_love', age: 44},
        ]
      })
    }


  chengeName = (event) => {
    
      this.setState({
        persons: [
          {name: 'maximus', age: 28},
          {name:  'wewe', age: 22},
          {name:  event.target.value, age: 32},
          {name: 'erik_swarc', age: 52},
          {name: 'dady_pony', age: 62},
          {name: 'pils_love', age: 44},
        ]
      })
    
}

toggleSowDiv = () => {
  const doesSow = this.state.showPerson;
  this.setState({showPerson: !doesSow})
}
  render() {
    // Нет необходимости оборачивать в дополнительный элемент!
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'


    }
    return (
       <div className="App">
           <h1> im a cool driver </h1>
           <h1> im a cool driver too </h1>

           <button 
             style={style}
             onClick={this.toggleSowDiv}>switch name
           </button>

        { this.state.showPerson === true ? 
          <div>
           <Person 
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age}/>
           <Person 
             name={this.state.persons[1].name} 
             age={this.state.persons[1].age}/>
           <Person 
             name={this.state.persons[2].name} 
             age={this.state.persons[2].age}
             change={this.chengeName}
             />
        </div>: null
      }
           
       </div>
       
    );
    // return React.createElement('div', {className: 'wrap'}, React.createElement('h1', null, 'Привет я React.createElement'))
  }
  
}

export default App;
