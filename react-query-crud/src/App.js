import React from 'react'; // Import React library
import PostList from './components/PostList'; // Import PostList component
import CreatePostForm from './components/CreatePostForm'; // Import CreatePostForm component

const App = () => {
  return (
    <div>
      <h1>React Query CRUD</h1>
      <CreatePostForm /> {/* Render CreatePostForm component for creating new posts */}
      <PostList /> {/* Render PostList component for displaying the list of posts */}
    </div>
  );
};

export default App;