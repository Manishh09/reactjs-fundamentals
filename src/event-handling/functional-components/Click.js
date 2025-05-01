import React from 'react'

function  Click() {
  const clickHandler = () => {
    alert('Button clicked in Functional Component')
  }
  return (
    <div>
      <h1>Event Handling in Functional Components</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default Click
