// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavProvider } from './context/FavContext'; // <-- import here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavProvider> {/* Wrap your app here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavProvider>
  </React.StrictMode>
);
