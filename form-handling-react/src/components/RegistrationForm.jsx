import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');  // Add state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation logic
    if (!username) {
      newErrors.username = 'Username is required';  // Validate username
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Submit form or make API call here
      console.log('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Handle username input
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;


