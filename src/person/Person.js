import React from 'react'
import './Person.css';

const person = (props) => {

  return <div className="Person">
      <p onClick={props.click}> I'm a  {props.name} end i`m {props.age} old !!!> </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
  </div>
}

export default person;