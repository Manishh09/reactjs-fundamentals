import React, { Component } from "react";
import User from "./User";

/**
 * UserList component class that manages a list of users.
 * This component demonstrates passing methods as props to child components.
 * 
 * @component
 * @extends {Component}
 * 
 * @example
 * <UserList />
 * 
 * @property {Object[]} state.users - Array to store user objects.
 * 
 * @method getUser
 * @description Simulates fetching users from an API.
 * @returns {Object[]} Array of user objects with id and name properties.
 * 
 * @method render
 * @description Renders the UserList component with a User child component.
 * @returns {JSX.Element} The rendered component.
 */
export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

/**
 * Retrieves a list of users.
 * This method simulates an API call to fetch user data. In a real-world scenario,
 * this would be replaced with an actual API call.
 * 
 * @param {string} param - The source identifier of the call
 * @returns {Array<Object>} An array of user objects, each containing id and name properties
 */
  getUser = (param) => {
    

    // test with alert to see the param value passed from User component
    // This is just for demonstration purposes. In a real application, you would likely use console.log or other debugging methods.
    alert(`From ${param}`);
   
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
    ];
  }


  render() {
    return <div>
        <h1>User List</h1>
        {/* Passing method getUser as a prop to User Component */}
        <User getUserHandler={this.getUser}/>
    </div>;
  }
}

export default UserList;
