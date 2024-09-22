import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="p-2 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}

export default HomePage;
