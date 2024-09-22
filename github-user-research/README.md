# GitHub User Search Application

This is a React-based web application that allows users to search for GitHub profiles by username. The application fetches and displays user information from the GitHub API, including their avatar, username, number of repositories, followers, and a link to their GitHub profile.

## Features

- Search for GitHub users by username.
- Display user profile details such as:
  - Avatar
  - Username
  - Public repositories count
  - Followers count
  - A link to their GitHub profile
- Responsive design using Tailwind CSS.
- Axios used for API requests.

## Project Structure

```plaintext
src/
├── components/       # Reusable React components
│   ├── SearchBar.jsx # Component for searching users
│   ├── UserProfile.jsx # Component for displaying user details
│   └── UserList.jsx  # Component for listing users
├── services/         # API services
│   └── githubService.js  # Axios functions for GitHub API calls
├── App.jsx           # Main application component
├── index.jsx         # Application entry point
├── data.json         # Static JSON for mock data (optional)
├── index.css         # Global styles
└── assets/           # Images or other assets (if needed)
