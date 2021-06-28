import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext'
import reducer, { initialUserState } from './reducer'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider initialState={initialUserState} reducer={reducer}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

