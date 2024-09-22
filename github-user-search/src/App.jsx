
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import UserProfile from './components/UserProfile';  
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const Search = ({ onSearch, userData, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);  // Pass the search term back to the parent component
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub user"
          value={searchTerm}
          onChange={handleInputChange}
          className="input-field"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can’t find the user</p>}
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.login}</h2>
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

export default Search;
