import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;  // Returns user data if successful
  } catch (error) {
    throw new Error('User not found');  // Throw an error if API call fails
  }
};
