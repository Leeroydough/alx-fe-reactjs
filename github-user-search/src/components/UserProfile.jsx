import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching the user', error);
      }
    };
    fetchUser();
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center">
      <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{user.login}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <a href={user.html_url} className="text-blue-500">View Profile on GitHub</a>
    </div>
  );
}

export default UserProfile;
