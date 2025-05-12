import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Usar createRoot en lugar de ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

