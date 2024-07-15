import React from 'react'; // Import React library
import { useQuery } from '@tanstack/react-query'; // Import useQuery hook from React Query
import { fetchPosts } from '../api/posts'; // Import fetchPosts function
import PostItem from './PostItem'; // Import PostItem component

const PostList = () => {
  const { data: posts, isLoading, error } = useQuery('posts', fetchPosts); // Use useQuery to fetch posts

  if (isLoading) return <div>Loading...</div>; // Display loading message if data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Display error message if there is an error

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} /> // Render PostItem for each post
      ))}
    </div>
  );
};

export default PostList;