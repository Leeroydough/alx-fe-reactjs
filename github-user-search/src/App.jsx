
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import UserProfile from './components/UserProfile';  
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);  // Reset the previous state

    try {
      const data = await fetchUserData(username);
      setUserData(data);  // Update the state with the fetched user data
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

       {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.name}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
