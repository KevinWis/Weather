import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

