import React, { useState } from 'react';

const Search = ({ onSearch }) => {
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
    </div>
  );
};

export default Search;
