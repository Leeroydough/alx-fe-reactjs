
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  // Will create this component soon
import UserProfile from './components/UserProfile';  // Will create this component soon

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-center text-4xl font-bold my-10">GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
