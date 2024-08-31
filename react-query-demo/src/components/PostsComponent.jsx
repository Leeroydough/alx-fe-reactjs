import React from 'react';
import { useQuery } from 'react-query';

// Define the fetch function
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data
  const { data, isError, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;


