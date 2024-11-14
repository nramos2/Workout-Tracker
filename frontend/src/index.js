import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/workoutContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider> { /*this makes app a child of our context, which allows us to wrap in in workoutContext.js as a child*/}
      <App />
    </WorkoutsContextProvider>

  </React.StrictMode>
);
