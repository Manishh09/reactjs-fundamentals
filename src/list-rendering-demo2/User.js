import React from "react";

/**
 * User component displays a user's information
 * @param {Object} props - The component props
 * @param {Object} props.user - The user object to display
 * @param {string} props.user.name - The user's display name
 * @param {string} props.user.realName - The user's real name
 * @returns {JSX.Element} A div containing the user's information
 */
function User(props) {
  const { user } = props;
  // destructuring user object
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Real Name: {user.realName}</p>
    </div>
  );
}

export default User;
