import React, { Component } from "react";
import User from "./User";

/**
 * @class UserList
 * @extends {Component}
 * @description A component that renders a list of superhero users using a nested User component.
 * The component maps through a predefined array of user objects and renders each one
 * by passing the user data to individual User components.
 * 
 * @example
 * <UserList />
 * 
 * @returns {JSX.Element} A div containing a heading and a list of User components
 */
export class UserList extends Component {
  render() {
    const userList = [
      {
        id: 1,
        name: "Iron Man",
        realName: "Tony Stark",
      },
      {
        id: 2,
        name: "Captain America",
        realName: "Steve Rogers",
      },
      {
        id: 3,
        name: "Thor",
        realName: "Thor Odinson",
      },
      {
        id: 4,
        name: "Hulk",
        realName: "Bruce Banner",
      },
      {
        id: 5,
        name: "Black Widow",
        realName: "Natasha Romanoff",
      },
      {
        id: 6,
        name: "Spider-Man",
        realName: "Peter Parker",
      },
    ];
    // using map to render a list of items in React
    // use separate component for each item

    const userListItems = userList.map((user) => <User  user={user} />);

    return (
      <div>
        <h2>List Rendering Demo using Nested Component Without Key Prop</h2>

        {userListItems}
      </div>
    );
  }
}

export default UserList;
