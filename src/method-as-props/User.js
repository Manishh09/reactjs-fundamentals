import React from 'react'

/**
 * User component that displays a button to fetch user data.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.getUserHandler - Function passed from parent component to fetch user data.
 * @returns {JSX.Element} A button that triggers the getUserHandler when clicked.
 * 
 * @example
 * <User getUserHandler={() => fetchUserData()} />
 */
const User = (props) => {
    // This component receives the getUserHandler method as a prop from the UserList component
    // and calls it when the button is clicked.
    // The getUserHandler method is defined in the UserList component and is responsible for fetching user data.
    // When the button is clicked, it will call the getUserHandler method passed from the UserList component.
    // This allows the User component to trigger the user fetching logic defined in the UserList component.
    // This is an example of "method as props" in React, where a method from a parent component is passed down to a child component.
  return (
    <div>
      <h1>User Component</h1>
      <p>Click the button to give the selected or clicked user to UserList Component</p>

     {/* Without parameters */}
    <div>
      <button onClick={props.getUserHandler}>Get User</button>
    </div>

     {/* Using arrow function to call the getUserHandler method with Params when the button is clicked */}
    <div>
      <button onClick={() => props.getUserHandler('User Component')}>Get User</button>
    </div>
    </div>

  )
}

export default User
