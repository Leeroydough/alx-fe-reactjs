import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  // Access the context value
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
