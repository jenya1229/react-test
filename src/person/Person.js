import React from 'react'


const person = (props) => {

  return <div>
      <p>I'm a {props.name} end i`m {props.age} old !!!</p>
      <p>{props.children}</p>
  </div>
}

export default person;