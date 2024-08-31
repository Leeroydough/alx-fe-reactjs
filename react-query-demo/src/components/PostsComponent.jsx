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
  // Use the useQuery hook to fetch data with additional options
  const { data, isError, error, isLoading, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 10, // 10 minutes
      staleTime: 1000 * 60 * 5,  // 5 minutes
      refetchOnWindowFocus: true, // Refetch on window focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map(post => (
        

