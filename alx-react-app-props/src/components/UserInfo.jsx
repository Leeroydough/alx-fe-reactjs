// src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails'; // Import the UserDetails component

const UserInfo = () => {
  return (
    <div>
      <h2>User Information</h2>
      <UserDetails /> {/* Include UserDetails component */}
    </div>
  );
};

export default UserInfo;
