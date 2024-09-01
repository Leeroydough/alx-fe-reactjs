import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Check if the user is authenticated

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
