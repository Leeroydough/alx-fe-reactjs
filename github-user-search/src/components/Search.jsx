
import React, { useState } from 'react';

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
      {error && <p>Looks like we cant find the user</p>} {/* Error message included */}
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
