import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Create root and render the App
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Optional: Measure performance
reportWebVitals();
