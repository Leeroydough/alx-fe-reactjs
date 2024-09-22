import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure this handles advanced search

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinReposChange = (event) => {
    setMinRepos(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() || location.trim() || minRepos.trim()) {
      setLoading(true);
      setError('');
      try {
        const data = await fetchUserData(searchTerm, location, minRepos); // Updated to fetch advanced data
        setUserData(data);
        onSearch(searchTerm); // Pass the search term back to the parent
      } catch (err) {
        setError("Looks like we cant find any users");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Search GitHub user"
          value={searchTerm}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={handleMinReposChange}
          className="input-field"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div className="user-profile">
          {userData.map(user => (
            <div key={user.id} className="user-item">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
              <h2>{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos || 0}</p>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
