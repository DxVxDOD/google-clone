import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {ResultContextProvider} from './context/ResultContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ResultContextProvider>
        <Router>
          <App />
        </Router>
      </ResultContextProvider>
    </React.StrictMode>,
);
