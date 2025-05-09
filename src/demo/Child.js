import React from 'react'

function Child(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <h2>Click the button to greet the parent component</h2>
            {/* Using arrow function to call the greetParent method with Params when the button is clicked */}
      <button onClick={() => props.greetHandler('Child Component')}>Greet</button>
    </div>
  )
}

export default Child
