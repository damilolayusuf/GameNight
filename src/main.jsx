import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GameNightProvider } from './context/GameNightContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GameNightProvider>
        <App />
      </GameNightProvider>
      
    </Router>
  </React.StrictMode>
);
