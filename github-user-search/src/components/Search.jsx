import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      setLoading(true);
      setError(''); // Clear previous errors
      try {
        const data = await fetchUserData(searchTerm); // Fetch user data
        setUserData(data);
        onSearch(searchTerm); // Pass the search term back to the parent
      } catch (err) {
        setError("Looks like we can't find the user"); // Handle error
      } finally {
        setLoading(false);
      }
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
      {error && <p>{error}</p>} {/* Display the error message */}
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
