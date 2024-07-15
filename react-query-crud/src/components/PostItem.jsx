import React, { useState } from 'react'; // Import React and useState hook
import { useMutation, useQueryClient } from '@tanstack/react-query'; // Import useMutation and useQueryClient hooks from React Query
import { updatePost, deletePost } from '../api/posts'; // Import updatePost and deletePost functions

const PostItem = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [title, setTitle] = useState(post.title); // State for post title
  const [body, setBody] = useState(post.body); // State for post body
  const queryClient = useQueryClient(); // Get QueryClient instance

  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts'); // Invalidate posts query to refetch the list
    }
  });

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts'); // Invalidate posts query to refetch the list
    }
  });

  const handleUpdate = () => {
    updatePostMutation.mutate({ ...post, title, body }); // Mutate to update the post
    setIsEditing(false); // Exit edit mode
  };

  const handleDelete = () => {
    deletePostMutation.mutate(post.id); // Mutate to delete the post
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default PostItem;