import axios from 'axios'; // Import Axios for making HTTP requests

// Base URL for JSONPlaceholder API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch posts
export const fetchPosts = async () => {
  const response = await axios.get(API_URL); // Make a GET request to fetch posts
  return response.data; // Return the data from the response
};

// Function to create a new post
export const createPost = async (newPost) => {
  const response = await axios.post(API_URL, newPost); // Make a POST request to create a new post
  return response.data; // Return the data from the response
};

// Function to update an existing post
export const updatePost = async (updatedPost) => {
  const response = await axios.put(`${API_URL}/${updatedPost.id}`, updatedPost); // Make a PUT request to update a post
  return response.data; // Return the data from the response
};

// Function to delete a post
export const deletePost = async (postId) => {
  await axios.delete(`${API_URL}/${postId}`); // Make a DELETE request to delete a post
};