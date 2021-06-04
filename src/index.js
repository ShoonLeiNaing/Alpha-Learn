import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'
import reducer, { initialState } from './reducer'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

