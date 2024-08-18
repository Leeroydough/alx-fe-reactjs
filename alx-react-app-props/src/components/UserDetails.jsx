// src/components/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';

const UserDetails = () => {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserDetails;
