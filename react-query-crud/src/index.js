import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering React components
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider from React Query
import App from './App'; // Import the main App component

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Render the App component wrapped with QueryClientProvider
ReactDOM.render(
  <QueryClientProvider client={queryClient}> 
    <App />
  </QueryClientProvider>,
  document.getElementById('root') // Target the root element in the HTML file
);