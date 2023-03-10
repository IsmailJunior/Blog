import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './userContext';
import { PostContextProvider } from './postContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostContextProvider>
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContextProvider>
  </PostContextProvider>
);