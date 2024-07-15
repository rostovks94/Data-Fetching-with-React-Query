import React, { useState } from 'react'; // Import React and useState hook
import { useMutation, useQueryClient } from '@tanstack/react-query'; // Import useMutation and useQueryClient hooks from React Query
import { createPost } from '../api/posts'; // Import createPost function

const CreatePostForm = () => {
  const [title, setTitle] = useState(''); // State for post title
  const [body, setBody] = useState(''); // State for post body
  const queryClient = useQueryClient(); // Get QueryClient instance

  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts'); // Invalidate posts query to refetch the list
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    createPostMutation.mutate({ title, body }); // Mutate to create a new post
    setTitle(''); // Reset title input
    setBody(''); // Reset body input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;